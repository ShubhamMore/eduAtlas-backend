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
    let data = {};
    //console.log('user ', req.user);
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
      //console.log(typeof req.user.eduAtlasId, ' ', req.user.eduAtlasId);
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
            eduAtlasId: 'EDU2020EMP100009', //req.user._id,
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
      console.log(data);
      data = data[0];
      let studentDetails = [];
      let employeeDetails = [];

      for (var i = 0; i < data.instDetails.length; i++) {
        const students = await Student.find(
          {
            'instituteDetails.instituteId': data.instDetails[0]._id,
          },
          {
            _id: 1,
            basicDetails: 1,
            eduAtlasId: 1,
          }
        );
        for (var j = 0; j < students.length; j++) {
          if (!studentDetails.includes((st) => st._id == students[j]._id)) {
            studentDetails.push(students[j]);
          }
        }
        const employees = await Employee.find(
          {
            'instituteDetails.instituteId': data.instDetails[0]._id,
          },
          {
            _id: 1,
            basicDetails: 1,
            eduAtlasId: 1,
          }
        );
        for (var j = 0; j < employees.length; j++) {
          console.log(typeof data._id);
          console.log(employees[j]._id);
          if (
            !employeeDetails.includes((st) => st._id == employees[j]._id) &&
            employees[j]._id != data._id.toString()
          ) {
            employeeDetails.push(employees[j]);
          }
        }
        data.studentDetails = studentDetails;
        data.employeeDetails = employeeDetails;
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
    }
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

    console.log(messages);

    messages.sort((msg1, msg2) => {
      const msg1Date = new Date(msg1.date);
      const msg2Date = new Date(msg2.date);
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
