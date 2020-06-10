const feeRouter = require('express').Router();

const feeController = require('../controller/fee');

feeRouter.post('/addFee', feeController.addFee);

feeRouter.post('/getFeeOfStudent', feeController.getFeeOfStudent);

feeRouter.post('/getFeeOfStudentByCourse', feeController.getFeeOfStudentByCourse);

feeRouter.post('/updateFeeOfStudent', feeController.updateFeeOfStudent);

feeRouter.post('/getPendingFeeByInstitute',feeController.getPendingFeeByInstitute)



module.exports = feeRouter;
