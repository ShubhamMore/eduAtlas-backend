const forumRouter = require('express').Router();
const checkAuth = require('../middleware/checkAuth');
const forumController = require('../controller/forum');

forumRouter.post('/addForum', checkAuth, forumController.addForum);
forumRouter.post('/getForumsByInstitute', checkAuth, forumController.getForumsByInstitute);
forumRouter.post('/getSingleForum', checkAuth, forumController.getSingleForum);
forumRouter.post('/addComment', checkAuth, forumController.addComment);
forumRouter.post('/updateForum', checkAuth, forumController.updateForum);
forumRouter.post('/deleteForum', checkAuth, forumController.deleteForum);
forumRouter.post('/deleteComment', checkAuth, forumController.deleteComment);
forumRouter.post('/getMyForum', checkAuth, forumController.getMyForum);

module.exports = forumRouter;
