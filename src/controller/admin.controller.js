const Institute = require('../model/institute.model');
const errorHandler = require('../service/errorHandler');

exports.getAllInstitutes = async (req, res) => {
  try {
    const activeInstitutes = Institute.find({ active: true });
    const inactiveInstitutes = Institute.find({ active: false });

    Promise.all([activeInstitutes, inactiveInstitutes])
      .then((data) => {
        console.log(data);
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
