const announcementRouter = require('express').Router()
const announcementController = require('../controller/announcement')
const file = require('../middleware/announcementFile')
const chechAuth = require('../middleware/checkAuth')

announcementRouter.post('/makeAnnouncement', file, announcementController.makeAnnouncement)
announcementRouter.post('/getAnnouncement',  announcementController.getAnnouncement)
announcementRouter.post('/deleteAnnouncement', announcementController.deleteAnnouncement)


module.exports = announcementRouter