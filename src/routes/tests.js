const testRouter = require('express').Router();
const testsController = require('../controller/tests');
const checkAuth = require('../middleware/checkAuth');
const xcelUpload = require('../middleware/xcelFile');
testRouter.post('/addTest', checkAuth, testsController.addTest);

testRouter.post('/getTestByInstitute', checkAuth, testsController.getTestByInstitute);

testRouter.post('/getSingleTest', checkAuth, testsController.getSingleTest);

testRouter.post('/updateTest', checkAuth, testsController.updateTest);

testRouter.post('/addTestScore', checkAuth, testsController.addTestScore);

testRouter.post('/getTestByStudent', checkAuth, testsController.getScoreOfStudentByBatch);

testRouter.post('/deleteTest', checkAuth, testsController.deleteTest);

testRouter.post('/addScoreUsingExcel', xcelUpload, testsController.addScoreUsingExcel);

testRouter.post('/getTestsForReports', checkAuth, testsController.getTestsForReports);

testRouter.post(
  '/getScoresOfStutdentByInstitute',
  checkAuth,
  testsController.getScoresOfStutdentByInstitute
);

testRouter.post('/getScoreOfStudentByBatch', checkAuth, testsController.getScoreOfStudentByBatch);

module.exports = testRouter;
