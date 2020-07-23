const User = require('../../model/user.model');
const response = require('../../service/response');
const smsService = require('../../service/sms');
const errorHandler = require('../../service/errorHandler');
const { NewUser, OneTimePassword } = require('../../clientStore');
const send = require('../../service/mail');

const generateHtml = (otp) => {
  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Eduatlas OTP</title>
        <style>
          .align-center {
            align-items: center;
          }

          .text-center {
            text-align: center;
          }
        </style>
      </head>
      <body width="100vw">
      <div  class="align-center">
          
        <table style="width:'100%'">
          <thead>
            <tr class="align-center" width='100%' style="background-color:#ffd500;">
              <th>
                <img src="${process.env.SERVER}sample/ealogo-300x138.png" />
              </th>
            </tr>
          </thead>

          <tbody>

            
            
            <tr class="align-center" width='100%' >
              <td>
                <h4 style="text-align:center;display:block;margin:0;padding:0;color:#949494;font-family:Georgia; font-size:20px;font-style:italic; font-weight:normal; line-height:125%; letter-spacing:normal">
                  <br><br>
                  <span>Dear Eduatlas User</span>
                  <br><br>
                </h4>
              </td>
            </tr>
          
            <tr class="align-center" width='100%' >
              <td class="text-center">
                <br><br>
                <p>Your One Time Password (OTP) is: <strong>${otp}</strong></p>
              </td>
            </tr>
          
            </tbody>

          <tfoot>

            <tr class="align-center" width='100%' style="background-color:#333333; color:#ffffff";>
              <th>
                <br><br>
                <em>Copyright (C) 2020, Eduatlas.com. All rights reserved.</em>
                <br><br>
                <strong>Get in touch:</strong>
                <br>
                <span>contact@eduatlas.com</span>
                <br><br><br>
              </th>
            </tr>
          </tfoot>
        </table>  
      </body>
    </html>
  `;

  return htmlTemplate;
};

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

    const mail = {
      to: req.params.email,
      from: 'admin@eduatlas.in',
      subject: 'EDUATLAS: OTP Verification',
      html: generateHtml(OneTimePassword.getOTP(phone)),
    };

    await send(mail);
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

    const mail = {
      to: req.params.email,
      from: 'admin@eduatlas.in',
      subject: 'EDUATLAS: OTP Verification',
      html: generateHtml(OneTimePassword.getOTP(phone)),
    };

    await send(mail);

    res.status(200).send({ message: `OTP Send to  ${phone}`, phone }); //Change later
  } catch (error) {
    response(res, 500, 'Internal server error');
  }
};

exports.sendOtpForGetUserDetails = async (req, res, next) => {
  try {
    const id = req.body.eduAtlasId;
    console.log(id);
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

    const smsRes = await smsService.sendSms(user.phone, 'Your OTP (One Time Password): ' + otp);

    const mail = {
      to: user.email,
      from: 'admin@eduatlas.in',
      subject: 'EDUATLAS: OTP Verification',
      html: generateHtml(OneTimePassword.getOTP(user.phone)),
    };

    await send(mail);

    res.status(200).send({ message: `OTP Send to  ${user.phone}`, phone: user.phone }); //Change later
  } catch (error) {
    console.log(error);
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
