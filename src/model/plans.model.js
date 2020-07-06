const mongoose = require('mongoose');

// plan registration schema
const planSchema = mongoose.Schema({
  planType: { type: String, required: true },
  planCode: { type: String, required: true },
  amount: { type: String, required: true },
});

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
