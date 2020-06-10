const mentorRouter = require('express').Router()
const mentorController = require('../controller/mentoring')
const checkAuth = require('../middleware/checkAuth')

mentorRouter.post('/addMentoring',checkAuth, mentorController.addMentoring)
mentorRouter.post('/getMentoringByInstitute',checkAuth, mentorController.getMentoringByInstitute)


module.exports = mentorRouter