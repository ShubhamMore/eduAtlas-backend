const User = require('../../model/user.model');
const response = require('../../service/response');
const smsService = require('../../service/sms');
const errorHandler = require('../../service/errorHandler');
const { NewUser, OneTimePassword } = require('../../clientStore');
const send = require('../../service/mail');
const generateOTP = (ph) => {
  var digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }

  console.log(OTP);

  setTimeout(() => {
    OneTimePassword.deleteOTP(ph);
  }, 60000);
  return OTP;
};

exports.sendOtp = async (req, res, next) => {
  try {
    const phone = req.params.phone;
    const email = req.params.email;
    if (!phone) {
      response(res, 400, 'Phone number not provided');
      return;
    }
    if (!email) {
      response(res, 400, 'Email not provided');
      return;
    }

    new OneTimePassword(phone, generateOTP(phone));

    const smsRes = await smsService.sendSms(
      phone,
      'Your OTP (One Time Password): ' + OneTimePassword.getOTP(phone)
    );
    // const user = await User.findOne({
    //   email: req.params.email,
    // });
    // const token = await user.generateAuthToken();

    // const url = process.env.SERVER + 'users/verifyEmail?token=' + token;
    //
    // const smsRes = 'send sms'; // remove later
    // const mail = {
    //   to: req.params.email,
    //   from: 'admin@eduatlas.in',
    //   subject: 'EDUATLAS: VERIFY EMAIL',
    //   html: `<a href= '${url}'> ${url} </a>`,
    // };

    // await send(mail);
    res.status(200).send({ message: `OTP Send to  ${phone}` }); //Change later
  } catch (error) {
    response(res, 500, 'Internal server error');
  }
};

exports.sendOtpForRegisteredUser = async (req, res, next) => {
  try {
    const email = req.params.email;

    if (!email) {
      response(res, 400, 'Email not provided');
      return;
    }

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('User not found with ' + email);
    }

    const phone = user.phone;

    new OneTimePassword(phone, generateOTP(phone));

    const smsRes = await smsService.sendSms(
      phone,
      'Your OTP (One Time Password): ' + OneTimePassword.getOTP(phone)
    );

    // const smsRes = 'send sms'; // remove later

    res.status(200).send({ message: `OTP Send to  ${phone}`, phone }); //Change later
  } catch (error) {
    response(res, 500, 'Internal server error');
  }
};

exports.sendOtpForGetUserDetails = async (req, res, next) => {
  try {
    const id = req.body.eduAtlasId;

    if (!id) {
      response(res, 400, 'EduAtlas Id or Email Not Provided');
      return;
    }

    const user = await User.findOne({
      $or: [
        {
          email: id,
        },
        {
          eduAtlasId: id,
        },
      ],
      role: req.body.role,
    });

    if (!user) {
      throw new Error('User not found with for ID ' + id);
    }

    new OneTimePassword(user.phone, generateOTP(user.phone));
    const otp = OneTimePassword.getOTP(user.phone);

    const smsRes = await smsService.sendSms(phone, 'Your OTP (One Time Password): ' + otp);

    let mail = {
      to: user.email,
      from: 'admin@eduatlas.in',
      subject: 'OTP for Eduatlas',
      html:
        '<!DOCTYPE html>' +
        '<html><head><title>OTP</title>' +
        '</head><body><div>' +
        '<p>Dear Eduatlas User,</p>' +
        '<p>YOUR OTP IS :</p>' +
        otp +
        '</div></body></html>',
    };

    //const smsRes = 'send sms'; // remove later
    // const smsRes = 'send sms';

    res.status(200).send({ message: `OTP Send to  ${user.phone}`, phone: user.phone }); //Change later
  } catch (error) {
    response(res, 500, 'Internal server error');
  }
};

exports.verifyUserOTP = async (req, res, next) => {
  try {
    const phone = req.body.phone;
    const clientOTP = req.body.otp;
    const verifyType = req.body.verifyType;

    if (!clientOTP || !verifyType || !phone) {
      throw new Error('Insufficient or Wrong parameters provided');
    }

    if (verifyType !== 'loginUser' && verifyType !== 'createUser') {
      throw new Error('Invalid verify Type');
    }

    const otp = OneTimePassword.getOTP(phone);

    if (!otp) {
      throw new Error(`OTP for ${phone} has not been generated yet`);
    } else if (otp < 0) {
      throw new Error('OTP Expired');
    } else if (otp !== clientOTP) {
      throw new Error('Incorrect OTP');
    } else if (otp === clientOTP) {
      // VALID OTP
      const user = await User.findOneAndUpdate({ phone }, { verifyOTP: '1' });

      if (!user) {
        throw new Error('User does not Found');
      }

      if (verifyType === 'createUser') {
        res.status(200).send({ success: 'New User Created Successfully' });
      } else if (verifyType === 'loginUser') {
        if (user.verifyEmail === '1') {
          const token = await user.generateAuthToken();
          const data = {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            eduAtlasId: user.eduAtlasId,
            token,
            expiresIn: 36000,
          };
          res.status(200).send(data);
        } else {
          res.status(200).send({ verifyEmail: true });
        }
      } else {
        throw new Error('Invalid verify Type');
      }
    } else {
      throw new Error('Unknown OTP error');
    }
  } catch (error) {
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

    if (verifyType !== 'verifyUser' && verifyType !== 'forgotPassword') {
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
