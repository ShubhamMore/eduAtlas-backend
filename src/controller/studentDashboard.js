const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const mongoose = require('mongoose');
const schema = require('../service/joi');
const Student = require('../model/student.model');
const Fees = require('../model/fee.model');
const User = require('../model/user.model');
const userController = require('../controller/users');
const EduAtlasId = require('../model/eduatlasId.model');
const Institute = require('../model/institute.model');
const Announcement = require('../model/announcement.model');
const Fee = require('../model/fee.model');
const Schedule = require('../model/schedule.model');
const Test = require('../model/test.model');

const appendZero = (n) => {
  if (n < 10) {
    return '0' + n;
  }
  return '' + n;
};

exports.getStudentDashboard = async (req, res) => {
  try {
    const date = new Date();
    const currentDate =
      date.getFullYear() +
      '-' +
      appendZero(date.getMonth() + 1) +
      '-' +
      appendZero(date.getDate()) +
      'T00:00:00';
    console.log(currentDate);

    const announcements = await Student.aggregate([
      {
        $match: {
          eduAtlasId: req.user.eduAtlasId,
        },
      },
      {
        $unwind: '$instituteDetails',
      },
      {
        $addFields: {
          'instituteDetails.instituteId': {
            $toObjectId: '$instituteDetails.instituteId',
          },
        },
      },
      {
        $lookup: {
          from: 'institutes',
          localField: 'instituteDetails.instituteId',
          foreignField: '_id',
          as: 'instituteCourse',
        },
      },
      {
        $unwind: '$instituteCourse',
      },
      {
        $addFields: {
          batchId: {
            $toObjectId: '$instituteDetails.batchId',
          },
        },
      },
      {
        $unwind: '$instituteCourse.batch',
      },
      {
        $match: {
          $expr: {
            $and: [
              {
                $eq: ['$instituteCourse.batch._id', '$batchId'],
              },
            ],
          },
        },
      },
      {
        $project: {
          'instituteDetails.instituteId': 1,
          batchCode: '$instituteCourse.batch.batchCode',
        },
      },
      {
        $lookup: {
          from: 'announcements',
          localField: 'instituteDetails.instituteId',
          foreignField: 'instituteId',
          as: 'announcements',
        },
      },
      {
        $unwind: '$announcements',
      },
      {
        $unwind: '$announcements.batchCodes',
      },
      {
        $match: {
          $expr: {
            $eq: ['$batchCode', '$announcements.batchCodes'],
          },
        },
      },
    ]);
    const schedule = await Student.aggregate([
      {
        $match: {
          eduAtlasId: req.user.eduAtlasId,
        },
      },
      {
        $unwind: '$instituteDetails',
      },
      {
        $addFields: {
          'instituteDetails.instituteId': {
            $toObjectId: '$instituteDetails.instituteId',
          },
        },
      },
      {
        $lookup: {
          from: 'institutes',
          localField: 'instituteDetails.instituteId',
          foreignField: '_id',
          as: 'instituteCourse',
        },
      },
      {
        $unwind: '$instituteCourse',
      },
      {
        $addFields: {
          courseId: {
            $toObjectId: '$instituteDetails.courseId',
          },
          batchId: {
            $toObjectId: '$instituteDetails.batchId',
          },
        },
      },
      {
        $unwind: '$instituteCourse.course',
      },
      {
        $unwind: '$instituteCourse.batch',
      },
      {
        $match: {
          $expr: {
            $and: [
              {
                $eq: ['$instituteCourse.course._id', '$courseId'],
              },
              {
                $eq: ['$instituteCourse.batch._id', '$batchId'],
              },
            ],
          },
        },
      },
      {
        $addFields: {
          'instituteDetails.instituteId': {
            $toString: '$instituteDetails.instituteId',
          },
          batchId: {
            $toString: '$instituteDetails.batchId',
          },
          courseId: {
            $toString: 'instituteDetails.courseId',
          },
        },
      },

      {
        $lookup: {
          from: 'schedules',
          localField: 'instituteDetails.instituteId',
          foreignField: 'instituteId',
          as: 'schedule',
        },
      },
      { $unwind: '$schedule' },
      { $unwind: '$schedule.days' },
      {
        $match: {
          $expr: {
            $eq: ['$batchId', '$schedule.batchId'],
          },
          'schedule.days.select': true,
          'schedule.days.date': { $gte: '2020-07-10' },
        },
      },
      {
        $sort: {
          'schedule.days.date': 1,
        },
      },
      {
        $project: {
          instituteName: '$instituteCourse.basicInfo.name',
          batchCode: '$instituteCourse.batch.batchCode',
          courseName: '$instituteCourse.course.name',
          lecture: '$schedule.days',
        },
      },
    ]);
    const test = await Student.aggregate([
      {
        $match: {
          eduAtlasId: req.user.eduAtlasId,
        },
      },
      {
        $unwind: '$instituteDetails',
      },
      {
        $addFields: {
          'instituteDetails.instituteId': {
            $toObjectId: '$instituteDetails.instituteId',
          },
        },
      },
      {
        $lookup: {
          from: 'institutes',
          localField: 'instituteDetails.instituteId',
          foreignField: '_id',
          as: 'instituteCourse',
        },
      },
      {
        $unwind: '$instituteCourse',
      },
      {
        $addFields: {
          courseId: {
            $toObjectId: '$instituteDetails.courseId',
          },
          batchId: {
            $toObjectId: '$instituteDetails.batchId',
          },
        },
      },
      {
        $unwind: '$instituteCourse.course',
      },
      {
        $unwind: '$instituteCourse.batch',
      },
      {
        $match: {
          $expr: {
            $and: [
              {
                $eq: ['$instituteCourse.course._id', '$courseId'],
              },
              {
                $eq: ['$instituteCourse.batch._id', '$batchId'],
              },
            ],
          },
        },
      },
      {
        $addFields: {
          'instituteDetails.instituteId': {
            $toString: '$instituteDetails.instituteId',
          },
          batchId: {
            $toString: '$instituteDetails.batchId',
          },
        },
      },

      {
        $lookup: {
          from: 'tests',
          localField: 'instituteDetails.instituteId',
          foreignField: 'instituteId',
          as: 'test',
        },
      },
      { $unwind: '$test' },
      {
        $match: {
          $expr: {
            $eq: ['$batchId', '$test.batchId'],
          },
          'test.date': {
            $gte: currentDate,
          },
        },
      },
      {
        $project: {
          instituteName: '$instituteCourse.basicInfo.name',
          batchCode: '$instituteCourse.batch.batchCode',
          courseName: '$instituteCourse.course.name',
          test: 1,
        },
      },
    ]);

    res.status(200).send({
      announcements,
      test,
      schedule,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};
