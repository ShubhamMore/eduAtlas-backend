const chatRouter = require('express').Router({ caseSensitive: true });

const chatController = require('../controller/chat');

//to Add new Employee
chatRouter.post('/getChats', chatController.getChats);

module.exports = chatRouter;
