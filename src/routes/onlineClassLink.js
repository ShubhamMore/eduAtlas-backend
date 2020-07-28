const onlineClassLinkRouter = require('express').Router();
const onlineClassLinkController = require('../controller/onlineClassLink');
const uploadRecordings = require('../middleware/uploadRecordings');
const checkAuth = require('../middleware/checkAuth');

onlineClassLinkRouter.post(
  '/getAllMeetingLinks',
  checkAuth,
  onlineClassLinkController.getAllMeetingLinks
);

onlineClassLinkRouter.post(
  '/deleteMeetingLink',
  checkAuth,
  onlineClassLinkController.deleteMeetingLink
);

onlineClassLinkRouter.post(
  '/updateMeetingLink',
  checkAuth,
  onlineClassLinkController.updateMeetingLink
);

onlineClassLinkRouter.post(
  '/createMeetingLink',
  checkAuth,
  onlineClassLinkController.createMeetingLink
);

onlineClassLinkRouter.post(
  '/getOneMeetingLink',
  checkAuth,
  onlineClassLinkController.getOneMeetingLink
);

onlineClassLinkRouter.post(
  '/getMeetingLinks',
  checkAuth,
  onlineClassLinkController.getMeetingLinks
);

onlineClassLinkRouter.post(
  '/addRecording',
  checkAuth,
  uploadRecordings,
  onlineClassLinkController.addRecording
);

onlineClassLinkRouter.post(
  '/deleteRecording',
  checkAuth,
  onlineClassLinkController.deleteRecording
);

module.exports = onlineClassLinkRouter;
