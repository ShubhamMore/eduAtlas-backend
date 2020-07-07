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
        $lookup: {
          from: 'announcements',
          localField: 'instituteDetails.instituteId',
          foreignField: 'instituteId',
          as: 'announcements',
        },
      },
    ]);
    const schedule = await Schedule.aggregate([{}]);
    const test = await Test.aggregate([]);
  } catch (error) {}
};
