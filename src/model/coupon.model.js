const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  amountType: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
});

const Coupon = mongoose.model('Coupon', couponSchema);
module.exports = Coupon;
