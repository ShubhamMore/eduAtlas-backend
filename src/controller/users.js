const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/user.model');
const EduAtlasId = require('../model/eduatlasId.model');
const Announcement = require('../model/announcement.model');
const Student = require('../model/student.model');
const smsService = require('../service/sms');
const send = require('../service/mail');

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
      console.log(req.body);
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
      let newStudent = {
        eduatlasId: newEduAtlasId,
        basicDetails: {
          name: req.body.name,
          studentEmail: req.body.email,
          studentContact: req.body.phone,
        },
      };
      // console.log(newStudent);
      const addStudent = new Student(newStudent);
      await addStudent.save();
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
    } else if (user.role === 'employee') {
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

    user.eduAtlasId = newEduAtlasId.split('-').join('');

    await new User(user).save();
    const newUser = await User.findOne({
      email: req.body.email,
    });

    const token = await newUser.generateAuthToken();
    const url = process.env.SERVER + 'users/verifyEmail?token=' + token;

    // Send Mail Here
    const mail = {
      to: req.body.email,
      from: 'admin@eduatlas.in',
      subject: 'EDUATLAS: VERIFY EMAIL',
      html: `<h2>Confirm your Eduatlas account</h2>
      <p>You just signed up for a new Eduatlas account with the following details:</p>
      <strong>Name: ${newUser.name}</strong><br>
      <strong>Email: ${newUser.email}</strong><br>
      <strong>Contact No.: ${newUser.phone}</strong><br>
       
      <p>To finish creating your account, click on the link below:</p>
       
      <a style="text-decoration: none; color: #000; background-color: #ffd500; padding: 10px 20px; font-size: 25px; font-weight: bold;" href="${url}">CONFIRM</a>
       
      <p>Having trouble? Click on this link instead: <br>
          <a href="${url}">${url}</a>  
      </p>
      
      <strong>_ _ _ _</strong><br>
      <strong>The Eduatlas Team</strong>`,
    };

    response(res, 200, 'Verify OTP now');
    send(mail);
  } catch (error) {
    console.log(error);
    errorHandler(error, res);
  }
};

exports.verifyEmail = async (req, res) => {
  try {
    const decoded = jwt.verify(req.query.token, process.env.JWT_SECRET);

    const user = await User.findOneAndUpdate(
      {
        _id: decoded._id,
        'tokens.token': req.query.token,
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

    if (user.verifyOTP === '1' && user.verifyEmail === '1') {
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
      res.status(200).send({
        verifyOtp: user.verifyOTP === '0',
        verifyEmail: user.verifyEmail === '0',
        phone: user.phone,
      });
    }
    if (user.verifyEmail === '0') {
      const token = await user.generateAuthToken();
      const url = process.env.SERVER + 'users/verifyEmail?token=' + token;

      // Send Mail Here
      const mail = {
        to: req.body.email,
        from: 'admin@eduatlas.in',
        subject: 'EDUATLAS: VERIFY EMAIL',
        html: `<h2>Confirm your Eduatlas account</h2>
        <p>You just signed up for a new Eduatlas account with the following details:</p>
        <strong>Name: ${user.name}</strong><br>
        <strong>Email: ${user.email}</strong><br>
        <strong>Contact No.: ${user.phone}</strong><br>
         
        <p>To finish creating your account, click on the link below:</p>
         
        <a style="text-decoration: none; color: #000; background-color: #ffd500; padding: 10px 20px; font-size: 25px; font-weight: bold;" href="${url}">CONFIRM</a>
         
        <p>Having trouble? Click on this link instead: <br>
            <a href="${url}">${url}</a>  
        </p>
        
        <strong>_ _ _ _</strong><br>
        <strong>The Eduatlas Team</strong>`,
      };

      send(mail);
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

exports.changePassword = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findByCredentials(req.body.email, req.body.password);
    console.log(user);
    if (!user) {
      throw new Error('Old Password Does not Match, Please Try Again');
    }

    user.password = req.body.newPassword;

    await user.save();

    res.send({ success: true });
  } catch (e) {
    res.status(400).send(e);
  }
};
