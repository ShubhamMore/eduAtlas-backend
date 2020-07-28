const mongoose = require('mongoose');

// plan registration schema
const planSchema = mongoose.Schema({
  planType: { type: String, required: true },
  planCode: { type: String, required: true },
  amount: { type: String, required: true },
  upgradeAmount: { type: String, default: '2999' },
});

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
