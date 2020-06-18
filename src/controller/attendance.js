const Attendance = require('../model/attendance.model');
const Institute = require('../model/institute.model');
const errorHandler = require('../service/errorHandler');
const Student = require('../model/student.model');
const Schedule = require('../model/schedule.model');
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
    const updateSchedule = await Schedule.updateOne(
      {
        _id: req.body.scheduleId,
        'days._id': req.body.lectureId,
      },
      {
        $set: {
          'days.$.attendanceMark': true,
        },
      }
    );
    res.status(200).send(addAtt);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getAttendanceByInstitute = async (req, res) => {
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
        batchId: req.body.batchId,
      };
    } else {
      const error = new Error('No Institute available');
      error.statusCode = 400;
      throw error;
    }

    const date = new Date();
    const currentDate = date.getFullYear() + date.getMonth + date.getDate() + 'T00:00:00';

    //yyyy-mm-ddT00:00:00

    const marked = await Schedule.aggregate([
      {
        $unwind: '$days',
      },
      {
        $project: {
          instituteId: 1,
          courseId: 1,
          batchId: 1,
          days: 1,
          date: {
            $dateFromString: {
              dateString: '$days.date',
            },
          },
        },
      },
      {
        $match: {
          details,
          'days.attendanceMark': true,
          'days.date': {
            $lt: currentDate,
          },
        },
      },
    ]);

    const unmarked = await Schedule.aggregate([
      {
        $unwind: '$days',
      },
      {
        $project: {
          instituteId: 1,
          courseId: 1,
          batchId: 1,
          days: 1,
          date: {
            $dateFromString: {
              dateString: '$days.date',
            },
          },
        },
      },
      {
        $match: {
          details,
          'days.attendanceMark': false,
          'days.date': {
            $lt: currentDate,
          },
        },
      },
    ]);
    res.status(200).send(marked, unmarked);
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
        const student = {
          studentId: curStudent._id,
          studentName: curStudent.basicDetails.name,
          studentRollNo: curStudent.instituteDetails.rollNumber,
        };
        console.log(student);
        studentsArray.push(student);
      });
    } else {
      for (let i = 0; i < attendanceRecord.attendance.length; i++) {
        const student = await Student.aggregate([
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

        var details = {
          studentId: attendanceRecord.attendance[i].studentId,
          studentName: student[0].basicDetails.name,
          studentRollNo: student[0].instituteDetails.rollNumber,
          attendanceStatus: attendanceRecord.attendance[i].attendanceStatus,
        };
        studentsArray.push(details);
      }
    }

    res.status(200).send(studentsArray);
  } catch (error) {
    errorHandler(error, res);
  }
};
exports.getAttendanceForStudentByCourse = async (req, res) => {
  try {
    const student = await Attendance.aggregate([
      {
        $unwind: '$attendance',
      },
      {
        $match: {
          instituteId: req.body.instituteId,
          'attendance.studentId': req.body.studentId,
          courseId: req.body.courseId,
        },
      },
    ]);

    console.log(student);
    res.status(200).send(student);
  } catch (error) {
    errorHandler(error, res);
  }
};
