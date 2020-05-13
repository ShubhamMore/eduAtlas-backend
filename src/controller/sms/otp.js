const User = require('../../model/user.model');
const response = require('../../service/response');
const smsService = require('../../service/sms');
const errorHandler = require('../../service/errorHandler');
const { NewUser, OneTimePassword } = require('../../clientStore');

const generateOTP = (ph) => {
  var digits = '0123456789';
  let OTP = '1234';
  // for (let i = 0; i < 4; i++) {
  //   OTP += digits[Math.floor(Math.random() * 10)];
  // }
  setTimeout(() => {
    OneTimePassword.deleteOTP(ph);
  }, 60000);
  return OTP;
};

exports.sendOtp = async (req, res, next) => {
  try {
    const phone = req.params.phone;

    if (!phone) {
      response(res, 400, 'Phone number not provided');
      return;
    }

    new OneTimePassword(phone, generateOTP(phone));

    // const smsRes = await smsService.sendSms(
    //   phone,
    //   'Your OTP (One Time Password): ' + OneTimePassword.getOTP(phone)
    // );

    const smsRes = 'send sms'; // remove later
    console.log('send');

    res.status(200).send({ message: `${smsRes} to  ${phone}` }); //Change later
  } catch (error) {
    console.log(error);
    response(res, 500, 'Internal server error');
  }
};

exports.sendOtpForRegisteredUser = async (req, res, next) => {
  try {
    const phone = req.params.phone;

    if (!phone) {
      response(res, 400, 'Phone number not provided');
      return;
    }

    const user = await User.findOne({ phone });

    if (!user) {
      throw new Error('User not found with ' + phone);
    }

    new OneTimePassword(phone, generateOTP(phone));

    // const smsRes = await smsService.sendSms(
    //   phone,
    //   'Your OTP (One Time Password): ' + OneTimePassword.getOTP(phone)
    // );

    const smsRes = 'send sms'; // remove later
    console.log('send');

    res.status(200).send({ message: `${smsRes} to  ${phone}` }); //Change later
  } catch (error) {
    console.log(error);
    response(res, 500, 'Internal server error');
  }
};

exports.verifyUserOTP = async (req, res, next) => {
  try {
    const verifyType = req.body.verifyType;
    const phone = req.body.phone;
    const clientOTP = req.body.otp;
    console.log(req.body);
    if (!clientOTP || !verifyType || !phone) {
      throw new Error('Insufficient or Wrong parameters provided');
    }

    if (verifyType !== 'creatUser') {
      throw new Error('Wrong User Type');
    }

    const otp = OneTimePassword.getOTP(phone);

    if (!otp) {
      throw new Error(`OTP for ${phone} has not been generated yet`);
    } else if (otp < 0) {
      throw new Error('OTP Expired');
    } else if (otp !== clientOTP) {
      throw new Error('Incorrect OTP');
    } else if (otp === clientOTP) {
      const user = NewUser.getUser(phone);
      await user.save();
      NewUser.deleteUser(phone);
      res.status(200).send({ success: 'New User Created Successfully' });
    } else {
      throw new Error('Unknown OTP error');
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, res);
  }
};

exports.verifyOTP = async (req, res, next) => {
  try {
    const verifyType = req.body.verifyType;
    const phone = req.body.phone;
    const clientOTP = req.body.otp;

    if (!clientOTP || !verifyType || !phone) {
      throw new Error('Insufficient or Wrong parameters provided');
    }

    if (verifyType !== 'forgotPassword') {
      throw new Error('Wrong User Type');
    }

    const otp = OneTimePassword.getOTP(phone);

    if (!otp) {
      throw new Error(`OTP for ${phone} has not been generated yet`);
    } else if (otp < 0) {
      throw new Error('OTP Expired');
    } else if (otp !== clientOTP) {
      throw new Error('Incorrect OTP');
    } else if (otp === clientOTP) {
      res.status(200).send({ message: 'OTP verified' });
    } else {
      throw new Error('Unknown OTP error');
    }
  } catch (error) {
    errorHandler(error, res);
  }
};
