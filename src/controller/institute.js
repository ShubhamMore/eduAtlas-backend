const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const Announcement = require('../model/announcement.model');
const schema = require('../service/joi');
const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const fs = require('fs');
const path = require('path');

const deleteImage = (filePath) => {
  fs.unlink(path.join(__dirname + '../../../' + filePath), (error) => {
    if (error) {
      console.log(error);
      const err = new Error('Error while deleting the image');
      err.statusCode = 500;
      throw err;
    }
    console.log('File Deleted successfully');
  });
};

exports.addInstitute = async (req, res, next) => {
  try {
    
    req.body.basicInfo = JSON.parse(req.body.basicInfo);
    req.body.address = JSON.parse(req.body.address);
    req.body.category = JSON.parse(req.body.category);
    req.body.metaTag = JSON.parse(req.body.metaTag);
    req.body.paymentDetails = JSON.parse(req.body.paymentDetails);
    req.body.parentUser = JSON.parse(req.user._id)
    
    if (!req.file) {
      throw new Error('Institute Logo is Required');
    }

    const image = {
      filePath: req.file.path,
      fileName: `${req.file.filename.substring(
        0,
        req.file.filename.lastIndexOf('-')
      )}.${req.file.filename.substring(req.file.filename.lastIndexOf('.') + 1)}`,
    };

    delete req.body.logo;

    const { error, value } = schema('addInstitute').validate(req.body);
    if (error) {
      const err = new Error('Insufficient/wrong parameter provided');
      err.statusCode = 400;
      throw err;
    }

    if (!req.user.phone) {
      throw new Error('req.user.phone is empty');
    }

    let institute = new Institute();

    institute.basicInfo = Object.assign({}, req.body.basicInfo);

    const logo = {
      image_name: image.fileName,
      secure_url: process.env.SERVER + image.filePath,
      public_id: image.filePath,
      created_at: Date.now(),
    };

    institute.basicInfo.logo = logo;

    institute.address = Object.assign({}, req.body.address);

    institute.category = req.body.category;

    institute.metaTag = req.body.metaTag;

    institute.userPhone = req.user.phone;

    institute.paymentDetails.push(Object.assign({}, req.body.paymentDetails));
    console.log(institute.paymentDetails);

    institute.currentPlan = req.body.paymentDetails.planType;
    console.log(institute.currentPlan);

    const date = new Date();
    const year = date.getFullYear() + 1;
    date.setFullYear(year);
    console.log(date);

    institute.expiryDate = date;
    console.log(institute.expiryDate);

    await institute.save();

    response(res, 201, 'Institute added successfully');
  } catch (error) {
    console.log(error);
    // response(res, error.statusCode || 500, error.message);
  }
};

exports.deleteInstitute = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      return response(res, 400, 'Institute Id not provided');
    }
    const institute = await Institute.findByIdAndDelete(id);
    if (institute.basicInfo.logo.public_id) {
      deleteImage(institute.basicInfo.logo.public_id);
    }
    response(res, 202, 'Institute deleted successfully');
  } catch (error) {
    console.log(error);
    response(res, 500, 'Internal Server Error while performing Deletion');
  }
};

exports.getOneInstitute = async (req, res, next) => {
  try {
    if (!req.params.id) {
      response(res, 400, 'Institute id is required');
      return;
    }
    const institute = await Institute.findById(req.params.id);
    res.status(200).json({ institute });
  } catch (error) {
    console.log(error);
    response(res, 500, 'Internal server error while getting institute');
  }
};

exports.getAllInstitutes = async (req, res, next) => {
  try {
    const institutes = await Institute.find({ userPhone: req.user.phone });

    res.status(200).send(institutes);
  } catch (error) {
    console.log(error);
    response(res, 500, error.message);
  }
};

exports.updateInstitute = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) {
      response(res, 400, 'Institute id not provided');
      const err = new Error('Institute id not provided');
      err.statusCode = 400;
      throw err;
    }

    req.body.basicInfo = JSON.parse(req.body.basicInfo);
    req.body.address = JSON.parse(req.body.address);
    req.body.category = JSON.parse(req.body.category);
    req.body.metaTag = JSON.parse(req.body.metaTag);

    const institute = await Institute.findById(id);

    let logo = institute.basicInfo.logo;

    if (req.file) {
      const image = {
        filePath: req.file.path,
        fileName: `${req.file.filename.substring(
          0,
          req.file.filename.lastIndexOf('-')
        )}.${req.file.filename.substring(req.file.filename.lastIndexOf('.') + 1)}`,
      };

      if (logo.public_id) {
        deleteImage(logo.public_id);
      }

      logo = {
        image_name: image.fileName,
        secure_url: process.env.SERVER + image.filePath,
        public_id: image.filePath,
        created_at: Date.now(),
      };
    }

    delete req.body.logo;

    newInstitute = {};

    newInstitute.basicInfo = Object.assign({}, req.body.basicInfo);

    newInstitute.basicInfo.logo = logo;

    newInstitute.address = Object.assign({}, req.body.address);

    newInstitute.category = req.body.category;

    newInstitute.metaTag = req.body.metaTag;

    const updatedInstitute = await Institute.findByIdAndUpdate(
      id,
      { $set: newInstitute },
      { new: true }
    );

    res.status(201).json({ updatedInstitute });
  } catch (error) {
    console.log(error);
    response(res, error.statusCode || 500, error.message);
  }
};

exports.makeAnouncement = async (req, res, next) => {
  console.log(req.body);
  try {
    const announcement = new Announcement(req.body);
    await announcement.save();
    res.status(201).json(announcement);
  } catch (error) {
    console.log(error);
    response(res, error.statusCode || 500, error.message);
  }
};

//@ Attendence APIs----------

exports.addAttendence = async (req, res, next) => {
  try {
    const instituteId = req.params.instituteId;
    const { error, value } = schema('addAttendence').validate(req.body);

    if (error || !instituteId) {
      let err;
      if (error) {
        console.log(error);
        err = new Error('Wrong or Insufficient parameters provided');
      } else {
        err = new Error('Institute Id not provided');
      }
      err.statusCode = 400;
      throw err;
    }

    await Institute.findByIdAndUpdate(instituteId, { $push: { attendence: req.body } });

    response(res, 201, 'Attendence added successfully');
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.updateAttendence = async (req, res, next) => {
  try {
    const attendenceInfo = req.query;
    const { error, value } = schema('addAttendence').validate(req.body);

    if (!attendenceInfo.instituteId || !attendenceInfo.batchId || error) {
      let err;
      if (error) {
        console.log(error);
        err = new Error('Wrong or Insufficient parameters provided');
      } else {
        err = new Error('Attendence information not provided');
      }
      err.statusCode = 400;
      throw err;
    }

    await Institute.updateOne(
      {
        _id: attendenceInfo.instituteId,
        'attendence.batchId': attendenceInfo.batchId,
      },
      { $set: { 'attendence.$': req.body } }
    );

    response(res, 200, 'Attendence updated successfuly');
  } catch (error) {
    errorHandler(error, res);
  }
};

// exports.deleteAttendence = async (req, res, next) => {
//     try {

//         const batchId = req.params.batchId;

//         if(!batchId) {
//             response(res, 400, 'Batch id not provided');
//             next(new Error('Batch id not provided'));
//         }

//         await Institute.updateOne({
//             _id: attendenceInfo.instituteId,
//             "attendence.batchId": attendenceInfo.batchId
//         }, { $set: {"attendence.$": req.body} });

//     } catch(error) {
//         errorHandler(error, res);
//     }
// };

exports.getAttendece = async (req, res, next) => {
  try {
    const many = req.query.many;
    const instituteId = req.query.instituteId;
    let err = new Error();
    err.statusCode = 400;
    if (!many || !instituteId) {
      err.message = '"many" or "instituteId" not provided';
      throw err;
    }

    if (many == true) {
      const attendences = await Institute.findById(instituteId, { attendence: 1, _id: 0 });
      res.status(200).json(attendences);
    } else {
      const batchId = req.query.batchId;

      if (!batchId) {
        err.message = 'Batch Id not provided';
        throw err;
      }

      const attendence = await Institute.findOne({ 'attendence.batchId': batchId });

      res.status(200).json(attendence);
    }
  } catch (error) {
    errorHandler(error, res);
  }
};
