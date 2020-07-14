const Razorpay = require('razorpay');
const Order = require('../model/order.model');
const Receipt = require('../model/receipt.model');
const Plan = require('../model/plans.model');

const crypto = require('crypto');

var instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();

    res.status(200).send(plans);
  } catch (e) {
    res.status(400).send();
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const receipt = await Receipt.findByIdAndDelete(req.body._id);
    await Order.findByIdAndDelete(receipt.orderId);
    res.status(200).send({ success: true });
  } catch (e) {
    res.status(400).send();
  }
};

exports.orderGenerate = async (req, res) => {
  try {
    const receiptData = req.body;

    const plan = await Plan.findOne({ planType: req.body.planType });
    if (!plan) {
      throw new Error('Invalid Plan');
    }
    const gstCalculatedAmount = (+plan.amount + +plan.amount * 0.18).toFixed(2);
    receiptData.amount = gstCalculatedAmount;
    const receipt = new Receipt(receiptData);

    const options = {
      amount: +receipt.amount * 100, // amount in the smallest currency unit
      currency: 'INR',
      receipt: `order_rcptid_${receipt._id}`,
      payment_capture: '0',
    };

    instance.orders.create(options, async (err, order) => {
      if (err) {
        throw new Error(err);
      }

      const orderDetails = {
        order_id: order.id,
        entity: order.entity,
        amount: order.amount.toString(),
        amount_paid: order.amount_paid.toString(),
        amount_due: order.amount_due.toString(),
        currency: order.currency,
        receipt: order.receipt,
        offer_id: order.offer_id,
        status: order.status,
        attempts: order.attempts.toString(),
        notes: order.notes,
        created_at: order.created_at,
      };
      const generatedOrder = new Order(orderDetails);
      receipt.orderId = generatedOrder._id;

      res.status(200).send({ receipt, order });

      await generatedOrder.save();
      await receipt.save();
    });
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);

    const payment = req.body.payment;
    const receipt = req.body.receipt;

    hmac.update(payment.razorpay_order_id + '|' + payment.razorpay_payment_id);
    let generatedSignature = hmac.digest('hex');

    if (generatedSignature == payment.razorpay_signature) {
      res.status(200).send({ orderId: receipt.orderId, receiptId: receipt._id });

      await Receipt.findByIdAndUpdate(receipt._id, { success: '1' });

      const order = await Order.findById(receipt.orderId);
      order.amount_paid = order.amount;
      order.amount_due = '0';
      await order.save();
    } else {
      throw new Error('Payment Verification Failed');
    }
  } catch (e) {
    res.status(400).send(e + '');
  }
};
