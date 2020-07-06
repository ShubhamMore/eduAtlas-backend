const paymentRouter = require('express').Router();

const checkAuth = require('../middleware/checkAuth');
const paymentController = require('../controller/payment');

paymentRouter.post('/getAllPlans', paymentController.getAllPlans);
paymentRouter.post('/orderGenerate', paymentController.orderGenerate);
paymentRouter.post('/verifyPayment', paymentController.verifyPayment);
paymentRouter.post('/deleteOrder', paymentController.deleteOrder);

module.exports = paymentRouter;
