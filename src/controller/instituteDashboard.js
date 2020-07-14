const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const Fee = require('../model/fee.model');
const Lead = require('../model/leads.model');
const mongoose = require('mongoose');
const OnlineClass = require('../model/onlineClass.model');
const Leads = require('../model/leads.model');
const errorHandler = require('../service/errorHandler');
const Schedule = require('../model/schedule.model');
const Announcement = require('../model/announcement.model');

const appendZero = (n) => {
  if (n < 10) {
    return '0' + n;
  }
  return '' + n;
};

exports.getDashboardInfo = async (req, res) => {
  try {
    let data = {};

    const currentTime = new Date().getTime() / 1000;
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const date = new RegExp('.*' + year + '-' + appendZero(month) + '-' + appendZero(day) + '.*');

    data.upcomingClass = await Schedule.aggregate([
      { $unwind: '$days' },
      {
        $match: {
          instituteId: req.body.instituteId,
          'days.date': date,
        },
      },
      {
        $addFields: {
          'days.teacher': {
            $toObjectId: '$days.teacher',
          },

          batchId: {
            $toObjectId: '$batchId',
          },
          courseId: {
            $toObjectId: '$courseId',
          },
        },
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'days.teacher',
          foreignField: '_id',
          as: 'teacher',
        },
      },
      {
        $lookup: {
          from: 'institutes',
          localField: 'batchId',
          foreignField: 'batch._id',
          as: 'institute',
        },
      },
      {
        $unwind: '$teacher',
      },
      {
        $unwind: '$institute',
      },
      {
        $unwind: '$institute.batch',
      },
      {
        $unwind: '$institute.course',
      },
      {
        $match: {
          $expr: {
            $and: [
              {
                $eq: ['$courseId', '$institute.course._id'],
              },
              {
                $eq: ['$batchId', '$institute.batch._id'],
              },
            ],
          },
        },
      },
      {
        $project: {
          days: 1,
          courseId: 1,
          batchId: 1,
          instituteId: 1,
          teacherName: '$teacher.basicDetails.name',
          courseName: '$institute.course.name',
          batchCode: '$institute.batch.batchCode',
        },
      },
    ]);

    const pendingFees = await Fee.find({
      instituteId: req.body.instituteId,
      pendingAmount: {
        $ne: '0',
      },
    });

    let fee = new Array();

    for (var i = 0; i < pendingFees.length; i++) {
      const student = await Student.findOne({
        _id: pendingFees[i].studentId,
      });
      let obj = {};
      pendingFees[i].studentName = student.basicDetails.name;

      const course = await Institute.aggregate([
        {
          $unwind: '$course',
        },
        {
          $match: {
            _id: mongoose.Types.ObjectId(pendingFees[i].instituteId),
            'course._id': mongoose.Types.ObjectId(pendingFees[i].courseId),
          },
        },
      ]);

      pendingFees[i].courseName = course[0].course.name;
      obj = {
        studentId: pendingFees[i].studentId,
        studentName: student.basicDetails.name,
        courseId: pendingFees[i].courseId,
        courseName: course[0].course.name,
        pendingAmount: pendingFees[i].pendingAmount,
      };
      fee.push(obj);
    }
    data.pendingFees = fee;

    //For Number of batches in Institute
    const batchCount = await Institute.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(req.body.instituteId) },
      },
      {
        $unwind: '$batch',
      },
    ]);
    data.batchCount = batchCount.length;

    //Number of Students in Institute
    const studentCount = await Student.aggregate([
      {
        $unwind: '$instituteDetails',
      },
      {
        $match: {
          'instituteDetails.instituteId': req.body.instituteId,
        },
      },
    ]);

    data.studentCount = studentCount.length;

    const leads = await Leads.find({
      status: {
        $in: ['OPEN'],
      },
    });

    data.leads = leads;

    const AnnouncementDate = new RegExp('.*' + year + '-' + appendZero(month) + '.*');

    const announcements = await Announcement.find({
      instituteId: req.body.instituteId,
      date: AnnouncementDate,
    });

    data.announcements = announcements;

    res.status(200).send(data);
  } catch (error) {
    errorHandler(error, res);
  }
};
