const Razorpay = require('razorpay');
const crypto = require('crypto');

var instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.orderGenerate = async (req, res) => {
  try {
    const options = req.body;

    instance.orders.create(options, function (err, order) {
      if (err) {
        res.status(400).send(err);
      }
      console.log(order);
      res.status(200).send(order);
    });
  } catch (e) {
    res.status(400).send();
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);

    hmac.update(req.body.razorpay_order_id + '|' + req.body.razorpay_payment_id);
    let generatedSignature = hmac.digest('hex');

    console.log(generatedSignature);

    if (generatedSignature == req.body.razorpay_signature) {
      res.status(200).send({ msg: 'payment is successful' });
    }
    throw new Error('Payment Verification Failed');
  } catch (e) {
    res.status(400).send(e + '');
  }
};
