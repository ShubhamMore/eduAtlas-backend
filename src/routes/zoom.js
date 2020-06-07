const checkAuth = require('../middleware/checkAuth')
const zoomAuth = require('../middleware/zoomAuth')
const zoomGenerateToken = require('../middleware/zoomGenerateToken')
const zoomCheckToken = require('../middleware/zoomCheckToken')

const zoomRouter = require('express').Router()

const onlineMeetingController = require('../controller/onlineMeeting')

zoomRouter.post('/getZoomAuth',checkAuth, zoomAuth)
zoomRouter.post('/generateZoomAuthToken',zoomGenerateToken)
zoomRouter.post('/addCredemtials', checkAuth, onlineMeetingController.addCredentials)

module.exports = zoomRouter