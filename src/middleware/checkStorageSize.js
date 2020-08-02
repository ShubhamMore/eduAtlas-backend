const Institute = require('../model/institute.model');
const fs = require('fs');
const path = require('path');

const checkStorage = async (req, res, next) => {
  try {
    if (req.file) {
      let instId = req.body.instituteId;
      if (!instId) {
        instId = req.params.id;
      }

      let institute = await Institute.findById(instId);

      if (!institute) {
        throw new Error('Institute Not Found');
      }

      const totalStorage = +institute.totalStorage;
      const storageUsed = +institute.storageUsed;

      if (totalStorage < storageUsed + req.file.size) {
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
    console.log(e);
    res.status(401).send(e);
  }
};

module.exports = checkStorage;
