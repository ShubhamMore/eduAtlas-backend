const checkAuth = require('../middleware/checkAuth');
const zoomAuth = require('../middleware/zoomAuth');
const zoomGenerateToken = require('../middleware/zoomGenerateToken');
const zoomCheckToken = require('../middleware/zoomCheckToken');

const zoomRouter = require('express').Router();

const onlineMeetingController = require('../controller/onlineMeeting');

zoomRouter.post('/getZoomAuth', checkAuth, zoomAuth);
zoomRouter.get('/generateZoomAuthToken', zoomGenerateToken);
zoomRouter.post('/addCredentials', checkAuth, onlineMeetingController.addCredentials);
zoomRouter.get('/getCredentials', checkAuth, onlineMeetingController.getCredentials);
zoomRouter.post('/createMeeting', checkAuth, zoomCheckToken, onlineMeetingController.createMeeting);
zoomRouter.post('/updateMeeting', checkAuth, zoomCheckToken, onlineMeetingController.updateMeeting);
zoomRouter.post('/deleteMeeting', checkAuth, zoomCheckToken, onlineMeetingController.deleteMeeting);
zoomRouter.post('/getAllMeetings', checkAuth, onlineMeetingController.getAllMeetings);
zoomRouter.post(
  '/getMeetingsFromZoom',
  checkAuth,
  zoomCheckToken,
  onlineMeetingController.getMeetingsFromZoom
);
zoomRouter.post('/getMeetingByBatch', checkAuth, onlineMeetingController.getMeetingByBatch);
zoomRouter.post('/getOneMeeting', checkAuth, onlineMeetingController.getOneMeeting);
module.exports = zoomRouter;
