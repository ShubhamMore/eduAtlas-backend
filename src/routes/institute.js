const instituteRouter = require('express').Router();
const instituteController = require('../controller/institute');
const couseConroller = require('../controller/course');
// const scheduleController = require('../controller/schedule');
const dashboardController = require('../controller/instituteDashboard');
const checkAuth = require('../middleware/checkAuth');
const checkPayment = require('../middleware/checkPayment');
const extractFile = require('../middleware/file');
// const roleController = require('../controller/role');
// const { varyfyOTP } = require('../controller/users');
//@Institute_Routes
instituteRouter.post(
  '/addInstitute',
  checkAuth,
  checkPayment,
  extractFile,
  instituteController.addInstitute
);
instituteRouter.post('/activateInstitute', checkAuth, instituteController.activateInstitute);
instituteRouter.post('/deactivateInstitute', checkAuth, instituteController.deactivateInstitute);
instituteRouter.get('/all', checkAuth, checkPayment, instituteController.getAllInstitutes);
instituteRouter.delete('/:id', checkAuth, instituteController.deleteInstitute);
instituteRouter.get('/oneInstitute/:id', checkAuth, instituteController.getOneInstitute);
instituteRouter.put(
  '/updateInstitute/:id',
  checkAuth,
  extractFile,
  instituteController.updateInstitute
);

//@course_Routes
instituteRouter.post('/course/addCourse/:branchId', checkAuth, couseConroller.addCourse);
instituteRouter.post('/course/addBatch/:branchId', checkAuth, couseConroller.addBatch);
instituteRouter.post('/course/addDiscount/:branchId', checkAuth, couseConroller.addDiscount);
instituteRouter.post('/course/addReciept/:branchId', checkAuth, couseConroller.addReciept);

instituteRouter.get('/course/all/:branchId', couseConroller.getCourses);
instituteRouter.get('/course/one', checkAuth, couseConroller.getCourse);
instituteRouter.get('/course/batch', checkAuth, couseConroller.getBatche);
instituteRouter.get('/course/discount', checkAuth, couseConroller.getDiscount);
instituteRouter.get('/course/batches/:branchId', checkAuth, couseConroller.getBatches);
instituteRouter.get('/course/discounts/:branchId', checkAuth, couseConroller.getDiscounts);
instituteRouter.get('/course/reciept/:branchId', checkAuth, couseConroller.getReciept);

//TeamDevelopers API's
instituteRouter.get('/getCourseTD/:branchId', couseConroller.getCoursesTD);

instituteRouter.patch('/course/batch', checkAuth, couseConroller.updateBatch);
instituteRouter.patch('/course/discount', checkAuth, couseConroller.updateDiscount);
instituteRouter.patch('/course/reciept/:instituteId', checkAuth, couseConroller.updateReciept);
instituteRouter.patch('/course', checkAuth, couseConroller.updateCourse);

instituteRouter.delete('/course/course', checkAuth, couseConroller.deleteCourse);
instituteRouter.delete('/course/batch', checkAuth, couseConroller.deleteBatch);
instituteRouter.delete('/course/discount', checkAuth, couseConroller.deleteDiscount);
instituteRouter.delete('/course/reciept/:instituteId', checkAuth, couseConroller.deleteReciept);

//@make_anounce
// instituteRouter.post('/announcement', checkAuth, instituteController.makeAnouncement);

//@Attendence_Routes
// instituteRouter.post('/attendence/:instituteId', checkAuth, instituteController.addAttendence);
// instituteRouter.patch('/attendence', checkAuth, instituteController.updateAttendence);
// instituteRouter.get('/attendence', checkAuth, instituteController.getAttendece);

//@Role_assigne
// instituteRouter.post('/role', checkAuth, roleController.assignRole);

//@Dashboard
instituteRouter.post('/getDashboardInfo', checkAuth, dashboardController.getDashboardInfo);
module.exports = instituteRouter;
