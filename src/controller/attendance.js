const Attendance = require('../model/attendance.model');
const Institute = require('../model/institute.model');
const errorHandler = require('../service/errorHandler');
const Student = require('../model/student.model');
const mongoose = require('mongoose');
exports.addAttendance = async (req, res) => {
  try {
    console.log(req.body);
    const check = await Institute.find({
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

    if (check.length == 0) {
      const error = new Error('Batch not Found');
      error.statusCode = 400;
      throw error;
    }

    const addAtt = await Attendance.updateOne(
      {
        $and: [
          {
            date: req.body.date,
          },
          {
            instituteId: req.body.instituteId,
          },
          {
            courseId: req.body.courseId,
          },
          {
            batchId: req.body.batchId,
          },
        ],
      },
      req.body,
      {
        upsert: true,
      }
    );

    res.status(200).send(addAtt);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getAttendanceByDate = async (req, res) => {
  try {
    const attendanceRecord = await Attendance.findOne({
      $and: [
        {
          date: req.body.date,
        },
        {
          instituteId: req.body.instituteId,
        },
        {
          courseId: req.body.courseId,
        },
        {
          batchId: req.body.batchId,
        },
      ],
    });

    const studentsArray = new Array();

    if (!attendanceRecord) {
      const students = await Student.aggregate([
        {
          $unwind: '$instituteDetails',
        },
        {
          $match: {
            'instituteDetails.instituteId': req.body.instituteId,
            'instituteDetails.courseId': req.body.courseId,
            'instituteDetails.batchId': req.body.batchId,
          },
        },
      ]);

      students.forEach((curStudent) => {
        // console.log(curStudent);
        const student = {
          studentId: curStudent._id,
          studentName: curStudent.basicDetails.name,
          studentRollNo: curStudent.instituteDetails.rollNumber,
        };
        console.log(student);
        studentsArray.push(student);
      });
    } else {
      let studentDetails = new Array();

      console.log(attendanceRecord);
      for (var i = 0; i < attendanceRecord.attendance.length; i++) {
        const search = await Student.aggregate([
          {
            $unwind: '$instituteDetails',
          },
          {
            $match: {
              _id: mongoose.Types.ObjectId(attendanceRecord.attendance[i].studentId),
              'instituteDetails.instituteId': attendanceRecord.instituteId,
              'instituteDetails.courseId': attendanceRecord.courseId,
              'instituteDetails.batchId': attendanceRecord.batchId,
            },
          },
        ]);

        // console.log(search);

        var details = {
          studentName: search[0].basicDetails.name,
          rollNo: search[0].instituteDetails.rollNumber,
        };

        studentDetails.push(details);
      }
      response = studentsArray;
    }

    // console.log(response);

    res.status(200).send(studentsArray);
  } catch (error) {
    errorHandler(error, res);
  }
};
