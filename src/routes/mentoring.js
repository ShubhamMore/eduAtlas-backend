const mentorRouter = require('express').Router();
const mentorController = require('../controller/mentoring');
const checkAuth = require('../middleware/checkAuth');

mentorRouter.post('/addMentoring', checkAuth, mentorController.addMentoring);
mentorRouter.post('/getMentoringByInstitute', checkAuth, mentorController.getMentoringByInstitute);
mentorRouter.post(
  '/getMentoringOfStudentByInstitute',
  checkAuth,
  mentorController.getMentoringOfStudentByInstitute
);
mentorRouter.post('/updateMentoring', checkAuth, mentorController.updateMentoring);
mentorRouter.post('/deleteMentoring', checkAuth, mentorController.deleteMentoring);

module.exports = mentorRouter;
