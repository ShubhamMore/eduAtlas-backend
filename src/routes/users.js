const express = require('express');
const authRouter = express.Router();
const checkAuth = require('../middleware/checkAuth');
const userController = require('../controller/users');
const otpController = require('../controller/sms/otp');

authRouter.post('/signup', userController.creatUser);

authRouter.post('/login', userController.loginUser);
authRouter.post('/autoLogin', checkAuth, userController.autoLogin);
authRouter.post('/logout', checkAuth, userController.logoutUser);

authRouter.get('/sendOTP/:phone', otpController.sendOtp);
authRouter.get('/sendOtpForRegisteredUser/:phone', otpController.sendOtpForRegisteredUser);
authRouter.post('/sendOtpForGetUserDetails', otpController.sendOtpForGetUserDetails);
authRouter.post('/verifyUserOTP', otpController.verifyUserOTP);
authRouter.post('/verifyOTP', otpController.verifyOTP);

authRouter.post('/findUser', userController.findUser);

authRouter.patch('/resetPassword', userController.resetPassword);

// authRouter.delete('', userController.deleteAllUsers);

// authRouter.get('', userController.getAllUsers);

module.exports = authRouter;
