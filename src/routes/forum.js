const forumRouter = require('express').Router()
const checkAuth = require('../middleware/checkAuth')
const forumController = require('../controller/forum')

forumRouter.post('/addForum',forumController.addForum)
forumRouter.post('/getForumsByInstitute',forumController.getForumsByInstitute)
forumRouter.post('/getSingleForum',forumController.getSingleForum)
forumRouter.post('/addComment',forumController.addComment)
forumRouter.post('/updateForum',forumController.updateForum)
forumRouter.post('/deleteForum',forumController.deleteForum)


//forumRouter.post('/',forumController.)

module.exports = forumRouter