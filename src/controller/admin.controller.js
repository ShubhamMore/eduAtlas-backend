const User = require('../model/user.model');
const Institute = require('../model/institute.model');
const errorHandler = require('../service/errorHandler');

exports.getAllInstitutes = async (req, res) => {
  try {
    const activeInstitutes = Institute.find({ parentUser: req.body.parentUser, active: true });
    const inactiveInstitutes = Institute.find({ parentUser: req.body.parentUser, active: false });

    Promise.all([activeInstitutes, inactiveInstitutes])
      .then((data) => {
        res.send({
          activeInstitutes: data[0],
          inactiveInstitutes: data[1],
        });
      })
      .catch((e) => {
        errorHandler(e, res);
      });
  } catch (e) {
    errorHandler(e, res);
  }
};

exports.getInstitutes = async (req, res) => {
  try {
    const institutes = await User.find(
      { role: 'institute' },
      { _id: 1, name: 1, email: 1, phone: 1 }
    );
    res.send(institutes);
  } catch (e) {
    errorHandler(e, res);
  }
};
