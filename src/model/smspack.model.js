const mongoose = require('mongoose');

const smsPackSchema = new mongoose.Schema({
  noOfSMS: {
    type: Number,
    require: true,
  },
  pricePerSMS: {
    type: Number,
    require: true,
  },
  totalAmount: {
    type: Number,
    require: true,
  },
});

const SmsPack = mongoose.model('SmsPack', smsPackSchema);

module.exports = SmsPack;
