const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/user.model');
const EduAtlasId = require('../model/eduatlasId.model');
const Announcement = require('../model/announcement.model');
const Student = require('../model/student.model');
const Employee = require('../model/employee.model');
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
      html: `<html>

      <center>
      
      <table style="width:100%">
        <tr align="center" width=100% style="background-color:#ffd500";>
          <th><img src="${process.env.SERVER}sample/ealogo-300x138.png" /></th>
        </tr>
        <tr align="center" width=100% >
          <th><h4 style="text-align:center;display:block;margin:0;padding:0;color:#949494;font-family:Georgia; font-size:20px;font-style:italic; font-weight:normal; line-height:125%; letter-spacing:normal"><BR><BR>We are glad you are here!<BR><BR></h4></th>
        </tr>
        <tr align="center" width=100% >
          <th><h1 style="text-align:center;display:block;margin:0;padding:0;color:#222222;font-family:Helvetica;font-size:40px;font-style:normal;font-weight:bold;line-height:120%;letter-spacing:normal">HELLO, ${newUser.name}</h1>
      </th></tr>
      
        <tr align="center" width=100% >
          <th>
        <BR><BR>
        <style>
      .button {
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
      }
      
      .button1 {background-color: #e95a59;}
      </style>
      <button href= ${url} class="button button1">VERIFY EMAIL</button></th></tr>
      
      <tr>
          <th><p style="text-align:center;margin:10px 0;padding:0;color:#757575;font-family:Helvetica;font-size:16px;line-height:150%">(Just making sure you are you!)</p></th>
      </tr>
      <tr>
          <th>
        <hr>
        <h3 style=3D"display:block;margin:0;padding:0;color:#444444;font-family:Helvetica;font-size:22px;font-style:normal;font-weight:bold;line-height:100%;letter-spacing:normal;text-align:left"><span style=3D"font-size:14px">
        Having trouble? Click on this link instead: </span></h3>
        <h5 style="text-align:center;color:#949494;font-family:Georgia; font-size:14px; font-weight:normal;"> <a>${url}</a></h5>
        </th>
      </tr> 
        <tr align="center" width=100% style="background-color:#333333; color:#ffffff";>
          <th><br><Br><em>Copyright (C) 2020, Eduatlas.com. All rights reserved.</em><br>
      <br>
      <strong>Get in touch:</strong><br>contact@eduatlas.com<br><br><br></th>
        </tr>
      </table>  </html>
      `,
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

      if (user.role == 'employee') {
        const employee = await Employee.findOne({
          eduAtlasId: user.eduAtlasId,
        });
        data._id = employee._id;
        console.log('employee*******************************************');
      } else if (user.role == 'student') {
        const student = await Student.findOne({
          eduAtlasId: user.eduAtlasId,
        });
        data._id = student._id;
      }

      console.log(data);

      res.status(200).send(data);
    } else {
      res.status(200).send({
        verifyOtp: user.verifyOTP === '0',
        verifyEmail: user.verifyEmail === '0',
        phone: user.phone,
        email: user.email,
      });
    }
    if (user.verifyEmail === '0') {
      const token = await user.generateAuthToken();
      const url = process.env.SERVER + 'users/verifyEmail?token=' + token;

      // Send Mail Here
      const mail = {
        to: user.email,
        from: 'admin@eduatlas.in',
        subject: 'EDUATLAS: VERIFY EMAIL',
        html: `<html>

        <center>
        
        <table style="width:100%">
          <tr align="center" width=100% style="background-color:#ffd500";>
            <th><img src="${process.env.SERVER}sample/ealogo-300x138.png" /></th>
          </tr>
          <tr align="center" width=100% >
            <th><h4 style="text-align:center;display:block;margin:0;padding:0;color:#949494;font-family:Georgia; font-size:20px;font-style:italic; font-weight:normal; line-height:125%; letter-spacing:normal"><BR><BR>We are glad you are here!<BR><BR></h4></th>
          </tr>
          <tr align="center" width=100% >
            <th><h1 style="text-align:center;display:block;margin:0;padding:0;color:#222222;font-family:Helvetica;font-size:40px;font-style:normal;font-weight:bold;line-height:120%;letter-spacing:normal">HELLO, ${user.name}</h1>
        </th></tr>
        
          <tr align="center" width=100% >
            <th>
          <BR><BR>
          <style>
        .button {
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
        }
        
        .button1 {background-color: #e95a59;}
        </style>
        <button href="${url}" class="button button1">VERIFY EMAIL</button></th></tr>
        
        <tr>
            <th><p style="text-align:center;margin:10px 0;padding:0;color:#757575;font-family:Helvetica;font-size:16px;line-height:150%">(Just making sure you are you!)</p></th>
        </tr>
        <tr>
            <th>
          <hr>
          <h3 style=3D"display:block;margin:0;padding:0;color:#444444;font-family:Helvetica;font-size:22px;font-style:normal;font-weight:bold;line-height:100%;letter-spacing:normal;text-align:left"><span style=3D"font-size:14px">
          Having trouble? Click on this link instead: </span></h3>
          <h5 style="text-align:center;color:#949494;font-family:Georgia; font-size:14px; font-weight:normal;"> <a href="${url}">${url}</a></h5>
          </th>
        </tr> 
          <tr align="center" width=100% style="background-color:#333333; color:#ffffff";>
            <th><br><Br><em>Copyright (C) 2020, Eduatlas.com. All rights reserved.</em><br>
        <br>
        <strong>Get in touch:</strong><br>contact@eduatlas.com<br><br><br></th>
          </tr>
        </table>  </html>
        `,
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
