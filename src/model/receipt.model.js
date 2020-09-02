const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// receipt registration schema
const receiptSchema = mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  userPhone: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  userEmail: {
    type: String,
    require: true,
  },
  amount: {
    type: String,
    require: true,
  },
  planType: {
    type: String,
    require: true,
  },
  couponCode: {
    type: String,
  },
  success: {
    type: String,
    default: '0',
  },
  orderId: {
    type: String,
    default: '',
  },
});

const Receipt = mongoose.model('Receipt', receiptSchema);
module.exports = Receipt;
