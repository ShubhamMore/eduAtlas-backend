const chatRouter = require('express').Router({ caseSensitive: true });
const chatController = require('../controller/chat');
const checkAuth = require('../middleware/checkAuth');

//to Add new Employee
chatRouter.post('/getChats', checkAuth, chatController.getChats);

module.exports = chatRouter;
