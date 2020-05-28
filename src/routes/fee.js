const feeRouter = require('express').Router({ caseSensitive: true });

const feeController = require('../controller/fee');

feeRouter.post('/addFee',feeController.addFee)
feeRouter.post('/getFeeOfStudent',feeController.getFeeOfStudent)
feeRouter.post('/getFeeByCourse',feeController.getFeeByCourse)
feeRouter.post('/updateFeeOfStudent',feeController.updateFeeOfStudent)
//feeRouter.post('/addFee',feeController.addFee)


module.exports = feeRouter