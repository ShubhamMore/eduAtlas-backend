const testRouter = require('express').Router()
const testsController = require('../controller/tests')
const checkAuth = require('../middleware/checkAuth')

testRouter.post('/addTest',checkAuth,testsController.addTest)

testRouter.post('/getTestByBatch',checkAuth,testsController.getTestByBatch)

testRouter.post('/getSingleTest',checkAuth,testsController.getSingleTest)

testRouter.post('/updateTest',checkAuth,testsController.updateTest)

testRouter.post('/addTestScore',checkAuth,testsController.addTestScore)

testRouter.post('/getTestByStudent',checkAuth,testsController.getScoreOfStudentByBatch)
// testRouter.post('/addTest',checkAuth,testsController.addTest)
// testRouter.post('/addTest',checkAuth,testsController.addTest)
// testRouter.post('/addTest',checkAuth,testsController.addTest)
// testRouter.post('/addTest',checkAuth,testsController.addTest)


module.exports = testRouter