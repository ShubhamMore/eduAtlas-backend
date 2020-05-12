const express = require('express');
const authRouter = express.Router();
const userConstroller = require('../controller/users');
const checkAuth = require('../middleware/checkAuth');
const otpController = require('../controller/sms/otp')
authRouter.post('/signup', userConstroller.creatUser);

authRouter.post('/login', userConstroller.loginUser);

authRouter.get('/varifyOTP', otpController.varyfyOTP);
authRouter.get('/:phone', userConstroller.findUser);
authRouter.get('/sendOTP/:phone', otpController.sendOtp);
authRouter.get('/announcement/:instituteId', checkAuth, userConstroller.getAnnouncement);
authRouter.delete('/announcement/:instituteId', checkAuth, userConstroller.deleteAnnouncement);

authRouter.patch('/resetPassword', userConstroller.varyfyOTP , userConstroller.resetPassword);


// authRouter.delete('', userConstroller.deleteAllUsers);

// authRouter.get('', userConstroller.getAllUsers);

module.exports = authRouter;
