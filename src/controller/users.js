const bcrypt = require('bcryptjs');
const otpFunction = require('./sms/otp');
const User = require('../model/user.model');
const jwt = require('jsonwebtoken');

const schema = require('../service/joi');
const response = require('../service/response');

const smsService = require('../service/sms');

const errorHandler = require('../service/errorHandler');

const { NewUser, OneTimePassword, getKeyByValue, user_role } = require('../clientStore');

const Announcement = require('../model/announcement.model');

exports.creatUser = async (req, res, next) => {
  try {
    const { error, value } = schema('signup').validate(req.body, { abortEarly: true });
    if (error) {
      console.log(error);
      res.status(400).json({
        message: 'Insufficient parameters provided',
      });
      return;
    }

    new NewUser(req.body.phone, new User(req.body));

    response(res, 200, 'Varify OTP now');
  } catch (error) {
    console.log(error);
  }
};

exports.autoLogin = async (req, res, next) => {
  try {
    res.send({ authenticated: true });
  } catch (e) {
    let err = '' + e;
    res.status(400).send(err.replace('Error: ', ''));
  }
};

exports.loginUser = async (req, res, next) => {
  const { error, value } = schema('login').validate(req.body, { abortEarly: true });
  if (error) {
    console.log('Joi error - ', error);
    res.status(400).json({
      message: 'Wrong/Insufficient parameters provided',
    });
    return;
  }
  console.log(req.body);
  try {
    const user = await User.findByCredentials(req.body.phone, req.body.password);

    const token = await user.generateAuthToken();
    console.log(token);
    let _id = user._id;

    // if (user.role == 'student') {
    //   const student = await Student.findOne({ email: user.email });
    //   _id = student._id;
    // } else if (user.role == 'staff') {
    //   const staff = await Staff.findOne({ email: user.email });
    //   _id = staff._id;
    // } else if (user.role == 'branch') {
    //   const branch = await Branch.findOne({ email: user.email });
    //   _id = branch._id;
    // }
    const data = {
      _id: _id,
      email: user.email,
      phone: user.phone,
      role: user.role,
      token,
      expiresIn: 36000,
    };

    res.status(200).send(data);
  } catch (e) {
    console.log(e);
    let err = '' + e;
    res.status(400).send(err.replace('Error: ', ''));
  }
};

exports.logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send({ success: true });
  } catch (e) {
    let err = '' + e;
    res.status(400).send(err.replace('Error: ', ''));
  }
};

exports.findUser = async (req, res) => {
  const phone = req.params.phone;

  if (!phone || phone.toString().length != 10) {
    res.status(400).json({ message: 'Wrong phone number' });
    return;
  }

  try {
    const user = await User.findOne({ phone: phone });
    res.status(200).send({ user: user });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({
      phone: req.body.phone,
    });

    if (!user) {
      throw new Error('No user Found');
    }

    user.tokens = [];
    user.password = req.body.password;

    await user.save();

    res.status(200).send({ message: 'Password updated successfully' });
  } catch (error) {
    errorHandler(error);
  }
};

exports.getAnnouncement = async (req, res, next) => {
  const instituteId = req.params.instituteId;
  if (req.user.role == 4) {
    const announcements = await Announcement.find({ instituteId });
    res.status(200).json(announcements);
  } else if (req.user.role == 3) {
    const announcements = await Announcement.find({});
    res.status(200).json(announcements);
  } else {
    res.end();
  }
};

exports.deleteAnnouncement = async (req, res, next) => {
  const instituteId = req.params.instituteId;

  if (!instituteId) {
    res.status(400).json({ message: 'institute id not provided' });
    next(new Error('institute id not provided'));
  }

  await Announcement.deleteOne({ instituteId });
  res.status(200).json({ message: 'Deleted successfully' });
};

// exports.deleteAllUsers = async (req, res, next) => {
//   await User.deleteMany({});
//   res.status(200).json({ 'message': 'All deleted' })
// }

// exports.getAllUsers = (req, res, next) => {
//   User.find().then(users => res.send(users));
// }
