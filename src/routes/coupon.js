const couponRouter = require('express').Router();
const couponController = require('../controller/coupen.controller');
const checkAuth = require('../middleware/checkAuth');

couponRouter.post('/validateCoupon', checkAuth, couponController.validateCoupon);
couponRouter.post('/getCoupons', checkAuth, couponController.getCoupons);
couponRouter.post('/getCoupon', checkAuth, couponController.getCoupon);
couponRouter.post('/addCoupon', checkAuth, couponController.addCoupon);
couponRouter.post('/updateCoupon', checkAuth, couponController.updateCoupon);
couponRouter.post('/deleteCoupon', checkAuth, couponController.deleteCoupon);

module.exports = couponRouter;
