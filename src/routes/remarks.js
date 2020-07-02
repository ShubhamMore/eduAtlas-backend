const remarkRouter = require('express').Router();
const checkAuth = require('../middleware/checkAuth');
const remarkController = require('../controller/remark');
const remarkModel = require('../model/remarks');
remarkRouter.post('/addRemark', checkAuth, remarkController.addRemark);
remarkRouter.post(
  '/getRemarkOfStudentByInstitute',
  checkAuth,
  remarkController.getRemarkOfStudentByInstitute
);
module.exports = remarkRouter;
