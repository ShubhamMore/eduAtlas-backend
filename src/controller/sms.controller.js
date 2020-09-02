const SmsPack = require('../model/smspack.model');
const Institute = require('../model/institute.model');
const errorHandler = require('../service/errorHandler');

exports.addSmsPack = async (req, res) => {
  try {
    const smsPack = new SmsPack(req.body);
    await smsPack.save();
    res.send({ success: true });
  } catch (e) {
    errorHandler(e, res);
  }
};

exports.updateSmsPack = async (req, res) => {
  try {
    const smsPack = await SmsPack.findByIdAndUpdate(req.body._id, req.body);
    if (!smsPack) {
      throw new Error('Sms Pack Not Found');
    }
    res.send({ success: true });
  } catch (e) {
    errorHandler(e, res);
  }
};

exports.deleteSmsPack = async (req, res) => {
  try {
    const smsPack = await SmsPack.findByIdAndDelete(req.body.id);
    if (!smsPack) {
      throw new Error('Sms Pack Not Found');
    }
    res.send({ success: true });
  } catch (e) {
    errorHandler(e, res);
  }
};

exports.getSmsPacks = async (req, res) => {
  try {
    const smsPacks = await SmsPack.find({});
    res.send(smsPacks);
  } catch (e) {
    errorHandler(e, res);
  }
};

exports.getSmsPack = async (req, res) => {
  try {
    const smsPack = await SmsPack.findById(req.body._id);
    if (!smsPack) {
      throw new Error('Sms Pack Not Found');
    }
    res.send(smsPack);
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};

exports.rechargeSms = async (req, res) => {
  try {
    const smsPack = await SmsPack.findById(req.body.packId);
    if (!smsPack) {
      throw new Error('Sms Pack Not Found');
    }

    const institute = await Institute.findById(req.body.id);

    let smsCount = +institute.smsCount;
    smsCount = +smsCount + +smsPack.noOfSMS;

    await Institute.findByIdAndUpdate(req.body.id, { smsCount });

    res.send({ success: true });
  } catch (e) {
    console.log(e);
    errorHandler(e, res);
  }
};
