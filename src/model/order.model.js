const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// order registration schema
const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    set: parseRole,
    required: [true, 'Role is required'],
  },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
