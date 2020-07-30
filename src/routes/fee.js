const checkAuth = require('../middleware/checkAuth');

const feeRouter = require('express').Router();

const feeController = require('../controller/fee');

feeRouter.post('/addFee', checkAuth, feeController.addFee);

feeRouter.post('/getFeeOfStudent', checkAuth, feeController.getFeeOfStudent);

feeRouter.post('/getFeeOfStudentByCourse', checkAuth, feeController.getFeeOfStudentByCourse);

feeRouter.post('/updateFeeOfStudent', checkAuth, feeController.updateFeeOfStudent);

feeRouter.post('/getPendingFeeByInstitute', checkAuth, feeController.getPendingFeeByInstitute);

module.exports = feeRouter;
