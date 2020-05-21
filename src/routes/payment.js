const paymentRouter = require('express').Router();

const checkAuth = require('../middleware/checkAuth');
const paymentController = require('../controller/payment');

paymentRouter.post('/orderGenerate/:branchId', checkAuth, paymentController.orderGenerate);
paymentRouter.post('/verifyPayment/:branchId', checkAuth, paymentController.verifyPayment);

module.exports = paymentRouter;
