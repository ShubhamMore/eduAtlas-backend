const adminRouter = require('express').Router({ caseSensitive: true });
const adminController = require('../controller/admin.controller');
const checkAuth = require('../middleware/checkAuth');
const planController = require('../controller/plan.controller');

adminRouter.post('/addPlan', checkAuth, planController.addPlan);
adminRouter.post('/updatePlan', checkAuth, planController.updatePlan);
adminRouter.post('/getPlan', checkAuth, planController.getPlan);
adminRouter.post('/getAllPlans', checkAuth, planController.getAllPlans);

//to Add new Employee
adminRouter.post('/getInstitutes', checkAuth, adminController.getInstitutes);
adminRouter.post('/getAllInstitutes', checkAuth, adminController.getAllInstitutes);

module.exports = adminRouter;
