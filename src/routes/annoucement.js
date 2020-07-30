const announcementRouter = require('express').Router();
const announcementController = require('../controller/announcement');
const file = require('../middleware/announcementFile');
const checkAuth = require('../middleware/checkAuth');
const checkStorage = require('../middleware/checkStorageSize');

announcementRouter.post(
  '/makeAnnouncement',
  checkAuth,
  file,
  checkStorage,
  announcementController.makeAnnouncement
);
announcementRouter.post(
  '/editAnnouncement',
  checkAuth,
  file,
  checkStorage,
  announcementController.editAnnouncement
);
announcementRouter.post(
  '/getSingleAnnouncement',
  checkAuth,
  announcementController.getSingleAnnouncement
);
announcementRouter.post('/getAnnouncement', checkAuth, announcementController.getAnnouncement);
announcementRouter.post(
  '/getStudentAnnouncements',
  checkAuth,
  announcementController.getStudentAnnouncements
);
announcementRouter.post(
  '/deleteAnnouncement',
  checkAuth,
  announcementController.deleteAnnouncement
);

module.exports = announcementRouter;
