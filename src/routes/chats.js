const chatRouter = require('express').Router();
const chatController = require('../controller/chats');

chatRouter.post('/getMembers', chatController.getMembers);

module.exports = chatRouter;
