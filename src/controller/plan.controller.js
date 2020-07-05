const Plan = require('../model/plans.model');

exports.addPlan = async (req, res) => {
  try {
    const plan = new Plan(req.body);

    await plan.save();
    res.status(200).send(plan);
  } catch (e) {
    res.status(400).send();
  }
};

exports.updatePlan = async (req, res) => {
  try {
    const plan = await Plan.findByIdAndUpdate(req.body._id);

    if (!plan) {
      throw new Error('Plan Not Found');
    }

    res.status(200).send({ success: true });
  } catch (e) {
    res.status(400).send();
  }
};
