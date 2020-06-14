const chatRouter = require('express').Router();
const chatController = require('../controller/chats');
const checkAuth = require('../middleware/checkAuth');
chatRouter.post('/getMembers', checkAuth, chatController.getMembers);

module.exports = chatRouter;
