const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/user.model');
const EduAtlasId = require('../model/eduatlasId.model');
const Announcement = require('../model/announcement.model');

const smsService = require('../service/sms');

const schema = require('../service/joi');

const errorHandler = require('../service/errorHandler');
const response = require('../service/response');

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

    const user = req.body;

    const eduatlasId = await EduAtlasId.find({});

    let newEduAtlasId = '';
    const d = new Date();

    if (user.role === 'student') {
      const studentId = eduatlasId[0].studentEduId.split('-');
      newEduAtlasId = 'EDU-' + d.getFullYear() + '-ST-' + (parseInt(studentId[3]) + 1);
      await EduAtlasId.updateOne(
        { _id: eduatlasId[0]._id },
        {
          $set: {
            studentEduId: newEduAtlasId,
          },
        }
      );
    } else if (user.role === 'institute') {
      const instId = eduatlasId[0].instEduId.split('-');
      newEduAtlasId = 'EDU-' + d.getFullYear() + '-INST-' + (parseInt(instId[3]) + 1);
      await EduAtlasId.updateOne(
        { _id: eduatlasId[0]._id },
        {
          $set: {
            instEduId: newEduAtlasId,
          },
        }
      );
    } else if (
      user.role === 'branchManager' ||
      user.role === 'teacher' ||
      user.role === 'councillor'
    ) {
      const empId = eduatlasId[0].empEduId.split('-');
      newEduAtlasId = 'EDU-' + d.getFullYear() + '-EMP-' + (parseInt(empId[3]) + 1);
      await EduAtlasId.updateOne(
        { _id: eduatlasId[0]._id },
        {
          $set: {
            empEduId: newEduAtlasId,
          },
        }
      );
    } else {
      throw new Error('Role is Not Assign or Invalid Role');
    }

    user.eduAtlasId = newEduAtlasId;

    await new User(user).save();

    response(res, 200, 'Verify OTP now');
  } catch (error) {
    console.log(error);
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const decoded = jwt.verify(req.body.token, process.env.JWT_SECRET);

    const user = await User.findOneAndUpdate(
      {
        _id: decoded._id,
        'tokens.token': req.body.token,
      },
      { verifyEmail: '1' }
    );

    if (!user) {
      throw new Error('Verification Failed');
    }

    const data = {
      emailVerified: true,
    };

    res.status(200).send(data);
  } catch (e) {
    let err = '' + e;
    res.status(400).send(err.replace('Error: ', ''));
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
  
  try {
    const user = await User.findByCredentials(req.body.userId, req.body.password);

    if (user.verifyOTP === '1') {
      const token = await user.generateAuthToken();
      const data = {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        token,
        expiresIn: 36000,
      };

      console.log(data);

      res.status(200).send(data);
    } else {
      res.status(200).send({ verifyOtp: true, phone: user.phone });
    }
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
  const phone = req.body.phone;
  const email = req.body.email;
  if (!phone || phone.toString().length != 10) {
    throw new Error('Invalid Phone Number');
  }

  if (!email) {
    throw new Error('Email is Required');
  }

  try {
    const phoneExist = await User.findOne({ phone }, { phone: 1 });
    if (phoneExist) {
      throw new Error('Phone Number Already Exist');
    }
    const emailExist = await User.findOne({ email }, { email: 1 });
    if (emailExist) {
      throw new Error('Email Already Exist');
    } else {
      res.status(200).send({ success: true });
    }
  } catch (error) {
    console.log(error.message);
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
