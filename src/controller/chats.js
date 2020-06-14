const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const Employee = require('../model/employee.model');
const errorHandler = require('../service/errorHandler');
const User = require('../model/user.model');
const mongoose = require('mongoose');

exports.getMembers = async (req, res) => {
  try {
    let data = {};

    if (req.user.role == 'institute') {
      data = await Institute.aggregate([
        {
          $project: {
            _id: {
              $toString: '$_id',
            },
            parentUser: 1,
          },
        },
        {
          $lookup: {
            from: 'students',
            localField: '_id',
            foreignField: 'instituteDetails.instituteId',
            as: 'studentsDetails',
          },
        },
        {
          $lookup: {
            from: 'employees',
            localField: '_id',
            foreignField: 'instituteDetails.instituteId',
            as: 'employeeDetails',
          },
        },
        {
          $match: {
            parentUser: req.user._id.toString(),
          },
        },
        {
          $project: {
            'studentsDetails.basicDetails': 1,
            'studentsDetails.eduAtlasId': 1,
            'studentsDetails._id': 1,
            'employeeDetails.basicDetails': 1,
            'employeeDetails.eduAtlasId': 1,
          },
        },
      ]);
    }
    // } else if ((req.user.role = 'employee')) {
    //   data = await Employee.aggregate([{
    //     $lookup:{
    //       from:'institutes',
    //       localField:"instituteDetails.instituteId",
    //       forgeinField:'_id'
    //       as
    //     }
    //   }]);
    // }
    res.status(200).send(data);
  } catch (error) {
    errorHandler(error, res);
  }
};
