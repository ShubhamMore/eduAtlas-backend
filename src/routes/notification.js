const mentorRouter = require('express').Router();
const notificationController = require('../controller/notification');
const checkAuth = require('../middleware/checkAuth');

mentorRouter.post('/deleteNotification', checkAuth, notificationController.deleteNotification);
mentorRouter.post('/getNotifications', checkAuth, notificationController.getNotifications);
mentorRouter.post('/seenNotification', checkAuth, notificationController.seenNotification);

module.exports = mentorRouter;
