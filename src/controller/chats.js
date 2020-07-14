const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const Employee = require('../model/employee.model');
const errorHandler = require('../service/errorHandler');
const User = require('../model/user.model');
const mongoose = require('mongoose');
const EduAtlasId = require('../model/eduatlasId.model');
const Chat = require('../model/chats.model');

exports.getMembers = async (req, res) => {
  try {
    let data = [{}];
    //
    if (req.user.role == 'institute') {
      //req.user.role == 'institute'
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
    } else if (req.user.role == 'employee') {
      //req.user.role == 'employee'
      //
      data = await Employee.aggregate([
        {
          $unwind: '$instituteDetails',
        },
        {
          $project: {
            'instituteDetails.instituteId': {
              $toObjectId: '$instituteDetails.instituteId',
            },
            basicDetails: 1,
            eduAtlasId: 1,
          },
        },
        {
          $lookup: {
            from: 'institutes',
            localField: 'instituteDetails.instituteId',
            foreignField: '_id',
            as: 'instDetails',
          },
        },
        {
          $match: {
            eduAtlasId: req.user.eduAtlasId, //req.user._id,
          },
        },
        // {
        //   $unwind: '$instDetails',
        // },
        {
          $project: {
            'instDetails._id': 1,
            'instDetails.basicInfo': 1,
            'instDetails.eduAtlasId': 1,
          },
        },
      ]);
      //
      // data = data[0];
      let studentsDetails = [];
      let employeeDetails = [];

      for (var i = 0; i < data[0].instDetails.length; i++) {
        const students = await Student.find(
          {
            'instituteDetails.instituteId': data[0].instDetails[0]._id,
          },
          {
            _id: 1,
            basicDetails: 1,
            eduAtlasId: 1,
          }
        );
        for (var j = 0; j < students.length; j++) {
          if (!studentsDetails.includes((st) => st._id == students[j]._id)) {
            studentsDetails.push(students[j]);
          }
        }
        const employees = await Employee.find(
          {
            'instituteDetails.instituteId': data[0].instDetails[0]._id,
          },
          {
            _id: 1,
            basicDetails: 1,
            eduAtlasId: 1,
          }
        );
        for (var j = 0; j < employees.length; j++) {
          if (
            !employeeDetails.includes((st) => st._id == employees[j]._id) &&
            employees[j]._id != data[0]._id.toString()
          ) {
            employeeDetails.push(employees[j]);
          }
        }
        data[0].studentsDetails = studentsDetails;
        data[0].employeeDetails = employeeDetails;
      }

      // data = await Employee.aggregate([
      //   {
      //     $unwind: '$instituteDetails',
      //   },
      //   {
      //     $project: {
      //       'instituteDetails.instituteId': {
      //         $toObjectId: '$instituteDetails.instituteId',
      //       },
      //       basicDetails: 1,
      //     },
      //   },
      //   {
      //     $lookup: {
      //       from: 'institutes',
      //       localField: 'instituteDetails.instituteId',
      //       foreignField: '_id',
      //       as: 'instDetails',
      //     },
      //   },
      //   { $unwind: '$instDetails' },
      //   {
      //     $addFields: {
      //       instID: '$instDetails._id',
      //     },
      //   },
      //   {
      //     $project: {
      //       instID: 1,

      //       'instDetails.basicInfo': 1,
      //       'instDetails._id': 1,
      //       basicDetails: 1,
      //     },
      //   },
      //   {
      //     $lookup: {
      //       from: 'students',
      //       let: {
      //         instId: '$$instID',
      //       },
      //       pipeline: [
      //         {
      //           $match: {
      //             $expr: {
      //               $eq: ['$$instID', '$instituteDetails.instituteId'],
      //             },
      //           },
      //         },
      //       ],
      //       // localField: 'instID'.toString(),
      //       // foreignField: 'instituteDetails.instituteId',
      //       as: 'instDetails.studentsDetails',
      //     },
      //   },
      // ]);
    } else if (req.user.role == 'student') {
      //
      const institutes = await Student.aggregate([
        {
          $match: {
            eduAtlasId: req.user.eduAtlasId,
          },
        },
        {
          $unwind: '$instituteDetails',
        },
        {
          $group: {
            _id: {
              $toObjectId: '$instituteDetails.instituteId',
            },
          },
        },
        {
          $lookup: {
            from: 'institutes',
            localField: '_id',
            foreignField: '_id',
            as: 'institutes',
          },
        },
        {
          $unwind: '$institutes',
        },
        {
          $group: {
            _id: {
              $toObjectId: '$institutes.parentUser',
            },
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: '_id',
            foreignField: '_id',
            as: 'instituteUsers',
          },
        },
        {
          $unwind: '$instituteUsers',
        },
        {
          $project: {
            instituteUsers: 1,
          },
        },
      ]);

      const teachers = await Student.aggregate([
        {
          $match: {
            eduAtlasId: req.user.eduAtlasId,
          },
        },
        {
          $unwind: '$instituteDetails',
        },
        {
          $group: {
            _id: '$instituteDetails.instituteId',
          },
        },
        {
          $lookup: {
            from: 'employees',
            localField: '_id',
            foreignField: 'instituteDetails.instituteId',
            as: 'teachers',
          },
        },
        {
          $unwind: '$teachers',
        },
        {
          $group: {
            _id: '$teachers.eduAtlasId',
          },
        },
        {
          $lookup: {
            from: 'users',
            localField: '_id',
            foreignField: 'eduAtlasId',
            as: 'teachers',
          },
        },
        {
          $unwind: '$teachers',
        },
        {
          $project: {
            'teachers.token': -1,
          },
        },
      ]);
      data[0].instituteDetails = institutes;
      data[0].teacherDetails = teachers;
    }

    //

    res.status(200).send(data);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getChats = async (req, res) => {
  try {
    const receiverId = req.body.receiverId;
    const userId = req.user.eduAtlasId;

    // const myMessages = await Chat.aggregate([
    //   {
    //     $match: {
    //       eduatlasId: userId,
    //       'chats.senderId': receiverId,
    //     },
    //   },
    // ]);

    // const senderMessages = await Chat.aggregate([
    //   {
    //     $match: {
    //       eduatlasId: receiverId,
    //       'chats.senderId': userId,
    //     },
    //   },
    // ]);

    const myMessages = await Chat.find({
      eduatlasId: userId,
      'chats.senderId': receiverId,
    });

    const senderMessages = await Chat.find({
      eduatlasId: receiverId,
      'chats.senderId': userId,
    });

    const messages = new Array();

    if (myMessages.length > 0) {
      messages.push(...myMessages[0].chats);
    }

    if (senderMessages.length > 0) {
      messages.push(...senderMessages[0].chats);
    }

    //

    messages.sort((msg1, msg2) => {
      const msg1Date = msg1._id;
      const msg2Date = msg2._id;
      if (msg1Date > msg2Date) {
        return 1;
      } else {
        return -1;
      }
    });

    const sendMsg = new Array();

    messages.forEach((message) => {
      const msg = {
        text: message.message,
        date: new Date(message.date),
        reply: message.senderId === userId,
        user: {
          name: message.senderName,
        },
      };

      sendMsg.push(msg);
    });

    res.status(200).send(sendMsg);
  } catch (err) {
    errorHandler(err, res);
  }
};

//get student chat Members (only teachers and institutes)
