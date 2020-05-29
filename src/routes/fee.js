const feeRouter = require('express').Router();

const feeController = require('../controller/fee');

feeRouter.post('/addFee', feeController.addFee);

feeRouter.post('/getFeeOfStudent', feeController.getFeeOfStudent);

feeRouter.post('/getFeeOfStudentByCourse', feeController.getFeeOfStudentByCourse);

feeRouter.post('/updateFeeOfStudent', feeController.updateFeeOfStudent);
//feeRouter.post('/addFee',feeController.addFee)

module.exports = feeRouter;
