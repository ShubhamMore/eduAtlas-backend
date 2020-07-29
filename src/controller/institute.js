const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const Announcement = require('../model/announcement.model');
const schema = require('../service/joi');
const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const deleteImage = (filePath) => {
  fs.unlink(path.join(__dirname + '../../../' + filePath), (error) => {
    if (error) {
      const err = new Error('Error while deleting the image');
      err.statusCode = 500;
      throw err;
    }
  });
};

exports.addInstitute = async (req, res, next) => {
  try {
    req.body.basicInfo = JSON.parse(req.body.basicInfo);
    req.body.address = JSON.parse(req.body.address);
    req.body.category = JSON.parse(req.body.category);
    req.body.metaTag = JSON.parse(req.body.metaTag);
    // req.body.paymentDetails = JSON.parse(req.body.paymentDetails);
    req.body.parentUser = req.user._id;

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
    institute.parentUser = req.body.parentUser;

    await institute.save();
    res.status(200).send({ instituteId: institute._id });
  } catch (error) {
    response(res, error.statusCode || 500, error.message);
  }
};

exports.activateInstitute = async (req, res, next) => {
  try {
    const id = req.body._id;
    req.body = JSON.parse(JSON.stringify(req.body));
    if (!id) {
      return response(res, 400, 'Institute Id not provided');
    }

    const currentPlan = req.body.paymentDetails.planType;

    let smsCount = 0;
    let totalStorage = 104857600; // 100 MB

    if (currentPlan == 'Lite') {
      smsCount = 0;
      totalStorage = 104857600; // 2 GB (1024*1024*100 Bytes)
    } else if (currentPlan == 'Lite Plus') {
      smsCount = 0;
      totalStorage = 2147483648; // 2 GB (1024*1024*1024*2 Bytes)
    } else if (currentPlan == 'Value') {
      smsCount = 5000;
      totalStorage = 2147483648; // 2 GB (1024*1024*1024*2 Bytes)
    } else if (currentPlan == 'Power') {
      smsCount = 10000;
      totalStorage = 10737418240; // 10 GB (1024*1024*1024*10 Bytes)
    }
    const date = new Date();
    const startDate = date;
    const year = date.getFullYear() + 1;
    date.setFullYear(year);

    const expiryDate = date;

    const paymentDetails = req.body.paymentDetails;
    paymentDetails.activationDate = startDate;
    paymentDetails.expiryDate = expiryDate;

    const inst = await Institute.updateOne(
      {
        _id: req.body._id,
      },
      {
        active: true,
        $push: { paymentDetails: paymentDetails },
        currentPlan,
        startDate,
        expiryDate,
        smsCount,
        totalStorage,
      }
    );
    res.status(200).send(inst);
  } catch (error) {
    response(res, error.statusCode || 500, error.message);
  }
};

exports.deactivateInstitute = async (req, res, next) => {
  try {
    const id = req.body._id;

    const inst = await Institute.findByIdAndUpdate(id, { active: false });

    if (!inst) {
      throw new Error('Institute Not Found');
    }

    res.status(200).send(inst);
  } catch (error) {
    response(res, error.statusCode || 500, error.message);
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
    response(res, 500, 'Internal server error while getting institute');
  }
};

exports.getAllInstitutes = async (req, res, next) => {
  try {
    const institutes = await Institute.find({ parentUser: req.user._id });

    res.status(200).send(institutes);
  } catch (error) {
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
    response(res, error.statusCode || 500, error.message);
  }
};

exports.getStudentByInstitute = async (req, res) => {
  let body = {};
  try {
    if (!req.body.batchId && !req.body.courseId) {
      body = [
        {
          $unwind: '$instituteDetails',
        },
      ];
    }
    const student = await Student.aggregate([]);
  } catch (error) {
    errorHandler(error, res);
  }
};
