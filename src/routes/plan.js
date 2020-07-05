const planRouter = require('express').Router();
const checkAuth = require('../middleware/checkAuth');
const planController = require('../controller/plan.controller');

planRouter.post('/updatePlan', checkAuth, planController.updatePlan);
planRouter.post('/updatePlan', checkAuth, planController.updatePlan);
planRouter.post('/getPlan', checkAuth, planController.getPlan);
planRouter.post('/getAllPlans', checkAuth, planController.getAllPlans);

module.exports = planRouter;
