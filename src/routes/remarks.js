const remarkRouter = require('express').Router();
const checkAuth = require('../middleware/checkAuth');
const remarkController = require('../controller/remark');
const remarkModel = require('../model/remarks');
remarkRouter.post('/addRemark', remarkController.addRemark);
remarkRouter.post('/getRemarkOfStudentByInstitute', remarkController.getRemarkOfStudentByInstitute);
module.exports = remarkRouter;
