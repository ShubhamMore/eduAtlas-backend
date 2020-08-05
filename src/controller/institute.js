const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const { ObjectId } = require('bson');
const Announcement = require('../model/announcement.model');
const schema = require('../service/joi');
const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const mongoose = require('mongoose');

const awsUploadFile = require('../functions/awsUploadFile');
const awsRemoveFile = require('../functions/awsRemoveFile');

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

    if (!req.user.phone) {
      throw new Error('User Phone is Not Available');
    }

    const id = new ObjectId();

    const instIdCount = await Institute.findById(id).count();

    if (instIdCount > 0) {
      throw new Error('Institute ID already Exist');
    }

    let filePath = req.file.path;
    let fileName = req.file.filename;
    let fileSize = req.file.size;

    const cloudDirectory = id + '/logo';
    const uploadResponce = await awsUploadFile(filePath, fileName, cloudDirectory);

    const upload_res = uploadResponce.upload_res;

    const logo = {
      image_name: upload_res.key
        .split('/')[2]
        .substring(0, upload_res.key.split('/')[2].lastIndexOf('-'))
        .split('-')
        .join(' ')
        .toUpperCase(),

      file_size: fileSize,
      secure_url: upload_res.Location,
      public_id: upload_res.key,
      created_at: Date.now(),
    };

    delete req.body.logo;

    let institute = new Institute();

    institute._id = id;

    institute.basicInfo = Object.assign({}, req.body.basicInfo);

    institute.basicInfo.logo = logo;

    institute.address = Object.assign({}, req.body.address);

    institute.category = req.body.category;

    institute.metaTag = req.body.metaTag;
    institute.storageUsed = logo.file_size;

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
      smsCount = 5000;
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
      await awsRemoveFile(institute.basicInfo.logo.public_id);
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

exports.getInstituteStorage = async (req, res, next) => {
  try {
    if (!req.body.id) {
      response(res, 400, 'Institute id is required');
      return;
    }
    const institute = await Institute.findById(req.body.id, {
      _id: 1,
      totalStorage: 1,
      storageUsed: 1,
    });

    if (!institute) {
      throw new Error('Institute Not Found');
    }

    res.status(200).json(institute);
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

    let totalStorage = 104857600; // 100 MB

    if (institute.currentPlan == 'Lite') {
      totalStorage = 104857600; // 100 MB (1024*1024*100 Bytes)
    } else if (institute.currentPlan == 'Lite Plus') {
      totalStorage = 2147483648; // 2 GB (1024*1024*1024*2 Bytes)
    } else if (institute.currentPlan == 'Value') {
      totalStorage = 2147483648; // 2 GB (1024*1024*1024*2 Bytes)
    } else if (institute.currentPlan == 'Power') {
      totalStorage = 10737418240; // 10 GB (1024*1024*1024*10 Bytes)
    }

    let logo = institute.basicInfo.logo;
    let storageUsed = institute.storageUsed;

    if (req.file) {
      let filePath = req.file.path;
      let fileName = req.file.filename;
      let fileSize = req.file.size;

      const cloudDirectory = id + '/logo';
      const uploadResponce = await awsUploadFile(filePath, fileName, cloudDirectory);

      const upload_res = uploadResponce.upload_res;

      if (logo.public_id) {
        await awsRemoveFile(logo.public_id);
        if (logo.file_size) {
          storageUsed = storageUsed - logo.file_size;
        }
      }

      logo = {
        image_name: upload_res.key
          .split('/')[2]
          .substring(0, upload_res.key.split('/')[2].lastIndexOf('-'))
          .split('-')
          .join(' ')
          .toUpperCase(),

        file_size: fileSize,
        secure_url: upload_res.Location,
        public_id: upload_res.key,
        created_at: Date.now(),
      };
    }

    storageUsed = storageUsed + logo.file_size;

    delete req.body.logo;

    newInstitute = {};
    newInstitute.basicInfo = Object.assign({}, req.body.basicInfo);
    newInstitute.basicInfo.logo = logo;
    newInstitute.address = Object.assign({}, req.body.address);
    newInstitute.category = req.body.category;
    newInstitute.metaTag = req.body.metaTag;
    newInstitute.totalStorage = totalStorage;
    newInstitute.storageUsed = storageUsed;

    const updatedInstitute = await Institute.findByIdAndUpdate(
      id,
      { $set: newInstitute },
      { new: true }
    );

    res.status(201).json({ updatedInstitute });
  } catch (error) {
    console.log(error)
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
