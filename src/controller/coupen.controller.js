const Coupon = require('../model/coupon.model');
const errorHandler = require('../service/errorHandler');

exports.validateCoupon = async (req, res) => {
  try {
    const code = req.body.code.toUpperCase();

    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
      throw new Error(`Coupon Not Found`);
    }

    const couponDate = new Date(coupon.expiryDate);
    const date = new Date();
    if (couponDate < date) {
      throw new Error(`This Coupon is Expired`);
    }

    res.send(coupon);
  } catch (e) {
    errorHandler(e, res);
  }
};

exports.addCoupon = async (req, res) => {
  try {
    const code = req.body.code.toUpperCase();

    const coupon = await Coupon.findOne({ code });

    if (coupon) {
      throw new Error(`This Coupon Code ${code} Already Exist`);
    }

    req.body.code = code;

    const newCoupon = new Coupon(req.body);
    await newCoupon.save();
    res.send({ success: true });
  } catch (e) {
    errorHandler(e, res);
  }
};

exports.updateCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(req.body._id, req.body);
    if (!coupon) {
      throw new Error('Coupon Not Found');
    }
    res.send({ success: true });
  } catch (e) {
    errorHandler(e, res);
  }
};

exports.deleteCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndDelete(req.body.id);
    if (!coupon) {
      throw new Error('Coupon Not Found');
    }
    res.send({ success: true });
  } catch (e) {
    errorHandler(e, res);
  }
};

exports.getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find({});
    res.send(coupons);
  } catch (e) {
    errorHandler(e, res);
  }
};

exports.getCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.body._id);
    if (!coupon) {
      throw new Error('Coupon Not Found');
    }
    res.send(coupon);
  } catch (e) {
    errorHandler(e, res);
  }
};
