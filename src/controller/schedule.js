const mongoose = require('mongoose');
const Schedule = require('../model/schedule.model');
const errorHandler = require('../service/errorHandler');
const schema = require('../service/joi');
const response = require('../service/response');
const Institute = require('../model/institute.model');
const Employee = require('../model/employee.model');
const Student = require('../model/student.model');
const { query } = require('express');

exports.addSchedule = async (req, res, next) => {
  try {
    const checkBatch = await Institute.find({
      $and: [
        {
          _id: req.body.instituteId,
        },
        {
          'course._id': req.body.courseId,
        },
        {
          'batch._id': req.body.batchId,
        },
      ],
    });
    if (checkBatch.length == 0) {
      const error = new Error('Batch not Found');
      error.statusCode = 400;
      throw error;
    }
    const batchSchedule = new Schedule(req.body);

    await batchSchedule.save();
    const students = await Student.find({
      $and: [
        {
          'instituteDetails.instituteId': req.body.instituteId,
        },
        {
          'instituteDetails.courseId': req.body.courseId,
        },
        {
          'instituteDetails.batchId': req.body.batchId,
        },
      ],
    });
    let mail = {};
    mail.from = 'admin@eduatlas.in';
    mail.subject = 'SCHEDULE ADDED';
    for (var i = 0; i < students.length; i++) {
      mail.to = students[i].basicDetails.email;
      mail.html =
        '<!DOCTYPE html>' +
        '<html><head><title>SCHEDULE</title>' +
        '</head><body><div>' +
        '<p>Thank you for your appointment.</p>' +
        '<p>Here is summery:</p>' +
        '<p>Name: James Falcon</p>' +
        '<p>Date: Feb 2, 2017</p>' +
        '<p>Package: Hair Cut </p>' +
        '<p>Arrival time: 4:30 PM</p>' +
        '</div></body></html>';
    }
    response(res, 201, 'Schedule added successfully');
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.updateSchedule = async (req, res, next) => {
  try {
    const updatedSchedule = await Schedule.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      { $set: req.body },
      { upsert: true }
    );

    res.status(200).json(updatedSchedule);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getScheduleByInstitute = async (req, res) => {
  try {
    details = {};

    if (!req.body.batchId && !req.body.courseId) {
      details = {
        instituteId: req.body.instituteId,
      };
    } else if (!req.body.batchId && req.body.courseId) {
      details = {
        instituteId: req.body.instituteId,
        courseId: req.body.courseId,
      };
    } else if (req.body.batchId) {
      details = {
        instituteId: req.body.instituteId,
        courseId: req.body.courseId,
      };
    } else {
      const error = new Error('No Institute available');
      error.statusCode = 400;
      throw error;
    }

    const instituteSchedule = await Schedule.find(details);
    let instSchedule = [];
    instSchedule = instSchedule;
    for (var i = 0; i < instituteSchedule.length; i++) {
      const institute = await Institute.aggregate([
        {
          $unwind: '$course',
        },
        {
          $unwind: '$batch',
        },
        {
          $match: {
            _id: mongoose.Types.ObjectId(req.body.instituteId),
            'course._id': mongoose.Types.ObjectId(instituteSchedule[i].courseId),
            'batch._id': mongoose.Types.ObjectId(instituteSchedule[i].batchId),
          },
        },
      ]);

      instituteSchedule[i].courseId = institute[0].course.name;
      instituteSchedule[i].batchId = institute[0].batch.batchCode;
      //   const data = await Schedule.aggregate([
      //     {
      //       $unwind: '$days',
      //     },
      //     {
      //       $match: {
      //         _id: mongoose.Types.ObjectId(instituteSchedule[i]._id),
      //       },
      //     },
      //     {
      //       $project: {
      //         teacherId: {
      //           $toObjectId: 'days.teacherId',
      //         },
      //       },
      //     },
      //     {
      //       $lookup: {
      //         from: 'employees',
      //         localField: '$teacherId',
      //         foreignField: '_id',
      //         as: 'days.teacher',
      //       },
      //     },
      //   ]);
    }

    //teachername course name and batch nae
    res.status(200).send(instituteSchedule);
  } catch (error) {
    errorHandler(error, res);
  }
};
exports.getScheduleByBatch = async (req, res) => {
  try {
    const batchSchedule = await Schedule.find({
      $and: [
        {
          instituteId: req.body.instituteId,
        },
        {
          courseId: req.body.courseId,
        },
        {
          batchId: req.body.batchId,
        },
        {
          recurrence: true,
        },
      ],
    });
    // for (var i = 0; i < batchSchedule.length; i++) {
    //   con;
    // }
    //teacher ID and teacher both needed

    res.status(200).send(batchSchedule);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getSchedule = async (req, res, next) => {
  try {
    console.log(req.body);
    const singleSchedule = await Schedule.findOne({
      _id: req.body.scheduleId,
    });

    res.status(200).send(singleSchedule);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getScheduleDetails = async (req, res) => {
  try {
    console.log(req.body);
    let singleSchedule = await Schedule.findOne({
      _id: req.body.scheduleId,
    });
    let schdeduleDetails = req.body;
    console.log(singleSchedule);
    const courseDetails = await Institute.aggregate([
      {
        $unwind: '$course',
      },
      {
        $unwind: '$batch',
      },
      {
        $match: {
          _id: mongoose.Types.ObjectId(singleSchedule.instituteId),
          'course._id': mongoose.Types.ObjectId(singleSchedule.courseId),
          'batch._id': mongoose.Types.ObjectId(singleSchedule.batchId),
        },
      },
    ]);
    console.log('here ', courseDetails);
    if (courseDetails.length == 0) {
      const error = new Error('Batch not found');
      error.statusCode = 400;
      throw error;
    }
    singleSchedule.courseId = courseDetails[0].course.name;
    singleSchedule.batchId = courseDetails[0].batch.batchCode;

    for (var i = 0; i < singleSchedule.days.length; i++) {
      if (singleSchedule.days[i].teacher != '') {
        const teacherInfo = await Employee.findOne({
          _id: singleSchedule.days[i].teacher,
        });
        singleSchedule.days[i].teacher = teacherInfo.basicDetails.name;
      }
    }
    res.status(200).send(singleSchedule);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.deleteSchedule = async (req, res, next) => {
  try {
    await Schedule.deleteOne({
      _id: req.body.scheduleId,
    });

    res.status(200).send({ msg: 'Schedule Deleted Successfully' });
  } catch (error) {
    errorHandler(error, res);
  }
};
