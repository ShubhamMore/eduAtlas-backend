const Institute = require('../model/institute.model');
const fs = require('fs');
const path = require('path');

const checkStorage = async (req, res, next) => {
  try {
    if (req.file) {
      const institute = await Institute.findById(req.body.instituteId);

      if (!institute) {
        throw new Error('Institute Not Found');
      }

      const totalStorage = +institute.totalStorage;
      const storageUsed = +institute.storageUsed;

      if (totalStorage > storageUsed + req.file.size) {
        fs.unlink(path.join(__dirname, '../../', req.file.path), (err) => {
          if (err) {
            file_err = err;
          }
        });
        throw new Error('Your Storage is Full, Please Upgrade Your Plan for More storage');
      }
    }

    next();
  } catch (e) {
    res.status(401).send(e);
  }
};

module.exports = checkStorage;
