const smsPackRouter = require('express').Router();
const smsPackController = require('../controller/sms.controller');
const checkAuth = require('../middleware/checkAuth');

smsPackRouter.post('/getSmsPacks', checkAuth, smsPackController.getSmsPacks);
smsPackRouter.post('/getSmsPack', checkAuth, smsPackController.getSmsPack);
smsPackRouter.post('/addSmsPack', checkAuth, smsPackController.addSmsPack);
smsPackRouter.post('/updateSmsPack', checkAuth, smsPackController.updateSmsPack);
smsPackRouter.post('/deleteSmsPack', checkAuth, smsPackController.deleteSmsPack);

module.exports = smsPackRouter;
