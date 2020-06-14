const chatRouter = require('express').Router();
const chatController = require('../controller/chats');
const checkAuth = require('../middleware/checkAuth');
//chatRouter.post('/getMembers', chatController.getMembers);
chatRouter.post('/getMembers', checkAuth, chatController.getMembers);
chatRouter.post('/getChats', checkAuth, chatController.getChats);

module.exports = chatRouter;
