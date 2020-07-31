const attendanceRouter = require('express').Router({ caseSensitive: true });
const attendanceController = require('../controller/attendance');
const attendanceUpload = require('../middleware/attendanceFile');
const checkAuth = require('../middleware/checkAuth');

//APIs
attendanceRouter.post('/addAttendance', attendanceController.addAttendance);
attendanceRouter.post('/getAttendanceByDate', attendanceController.getAttendanceByDate);
attendanceRouter.post(
  '/getAttendanceForStudentByCourse',
  attendanceController.getAttendanceForStudentByCourse
);
attendanceRouter.post('/getAttendanceByInstitute', attendanceController.getAttendanceByInstitute);
attendanceRouter.post('/attendanceByFile', attendanceUpload, attendanceController.attendanceByFile);
attendanceRouter.post('/sendAttendanceSMS', checkAuth, attendanceController.sendAttendanceSMS);
module.exports = attendanceRouter;
