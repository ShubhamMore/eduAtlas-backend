const checkAuth = require('../middleware/checkAuth');
const scheduleRouter = require('express').Router();
const scheduleController = require('../controller/schedule');

//@schedule_Routes
scheduleRouter.post('/addSchedule', scheduleController.addSchedule);

scheduleRouter.post('/updateSchedule', scheduleController.updateSchedule);

scheduleRouter.post('/getScheduleByBatch', scheduleController.getScheduleByBatch);

scheduleRouter.post('/getSchedule', scheduleController.getSchedule);

scheduleRouter.post('/getScheduleDetails', scheduleController.getScheduleDetails);

scheduleRouter.post('/deleteSchedule', scheduleController.deleteSchedule);

module.exports = scheduleRouter;
