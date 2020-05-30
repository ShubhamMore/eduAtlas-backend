const attendanceRouter = require('express').Router({ caseSensitive: true });

const attendanceController = require('../controller/attendance');

attendanceRouter.post('/addAttendance', attendanceController.addAttendance)

attendanceRouter.post('/getAttendanceByDate', attendanceController.getAttendanceByDate)

module.exports = attendanceRouter;
