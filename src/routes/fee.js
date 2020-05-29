const feeRouter = require('express').Router();

const feeController = require('../controller/fee');

feeRouter.post('/addFee', feeController.addFee);
feeRouter.post('/getFeeOfStudent', feeController.getFeeOfStudent);
feeRouter.post('/getFeeByCourse', feeController.getFeeOfStudentByCourse);
feeRouter.post('/updateFeeOfStudent', feeController.updateFeeOfStudent);

module.exports = feeRouter;
