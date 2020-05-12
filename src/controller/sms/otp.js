const bcrypt = require('bcrypt');

const User = require('../../model/user.model');
const jwt = require('jsonwebtoken');

const schema = require('../../service/joi');
const response = require('../../service/response');

const smsService = require('../../service/sms');

const errorHandler = require('../../service/errorHandler');

const {  NewUser, OneTimePassword ,getKeyByValue, user_role } = require('../../clientStore');



function generateOTP(ph) {
    var digits = '0123456789';
    let OTP = '1234';
    // for (let i = 0; i < 4; i++) {
    //   OTP += digits[Math.floor(Math.random() * 10)];
    // }
    setTimeout(() => {
      OneTimePassword.deleteOTP(ph);
    }, 60050);
    return OTP;
  }
  
  exports.sendOtp = async (req, res, next) => {
    try {
      const register = req.query.register;
      const phone = req.params.phone;
      
      if (!phone) {
        response(res, 400, 'Phone number not provided');
        return;
      }
  
      if (!register || register == false) {
        // forgot password case
  
        const user = await User.findOne({ phone });
  
        if (!user) {
          response(res, 404, 'User not found with ' + phone);
          return;
        }
      }
  
      new OneTimePassword(phone, generateOTP(phone));
  
      // const smsRes = await smsService.sendSms(
      //   phone,
      //   'Your OTP (One Time Password): ' + OneTimePassword.getOTP(phone)
      // );
  
      response(res, 200, 'smsRes' + ' to ' + phone); //Change later
    } catch (error) {
      console.log(error);
      response(res, 500, 'Internal server error');
    }
  };
  
  exports.varyfyOTP = async (req, res, next) => {
    try {
      const type = req.query.varifyType;
      const isVarify = req.query.isVarify;
      const phone = req.query.phone;
      const clientOTP = req.query.otp;
  
      if (!clientOTP || !type || !phone) {
        return response(res, 400, 'Insufficient or Wrong parameters provided');
      }
  
      const otp = OneTimePassword.getOTP(phone);
      if (!otp) {
        response(res, 400, `OTP for ${phone} has not been generated yet`);
        next(new Error('OTP has not been generated yet'));
      } else if (!clientOTP || otp < 0) {
        otp < 0 ? response(res, 400, 'OTP Expired') : response(res, 400, 'OTP not provided');
        next(new Error('OTP Error'));
      } else if (otp !== clientOTP) {
        response(res, 400, 'Incorrect OTP');
        next(new Error('Incorrect OTP'));
      } else if (otp === clientOTP) {
        if (type == 'creatUser') {
          NewUser.saveUser(phone)
            .then((result) => {
              res.status(201).json({
                message: 'User created',
                result,
              });
              NewUser.deleteUser(phone);
            })
            .catch(next);
          return;
        } else if (type == 'forgotPassword') {
          if (isVarify == true) {
            response(res, 200, 'OTP varified');
            return;
          }
          next();
          return;
        } else if (type == 'roleAssign') {
          const newUser = await NewUser.saveUser(phone);
          res.status(200).json({
            message: 'Role user created successfully',
            newUser,
          });
          return;
        } else {
          response(res, 400, 'Varification type is not valid');
          return;
        }
      } else {
        next(new Error('Unknown OTP error'));
      }
    } catch (error) {
      errorHandler(error, res);
    }
  };
  