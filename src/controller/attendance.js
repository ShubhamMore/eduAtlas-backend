const Attendance = require('../model/attendance.model');
const Institute = require('../model/institute.model');
const errorHandler = require('../service/errorHandler');
const Student = require('../model/student.model');
const Schedule = require('../model/schedule.model');
const Employee = require('../model/employee.model');
const fs = require('fs').promises;
const path = require('path');
const excelToJson = require('convert-excel-to-json');
const sendNotification = require('../notifications/notification');
const XLSX = require('xlsx');
const smsService = require('../service/sms');

const appendZero = (n) => {
  if (n < 10) {
    return '0' + n;
  }
  return '' + n;
};

const deleteFile = (filePath) => {
  fs.unlink(path.join(__dirname + '../../../' + filePath), (error) => {
    if (error) {
      const err = new Error('Error while deleting the File');
      err.statusCode = 500;
      throw err;
    }
  });
};

const mongoose = require('mongoose');
exports.addAttendance = async (req, res) => {
  try {
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
    const date = new Date();
    const currentDate =
      date.getFullYear() +
      '-' +
      appendZero(date.getMonth() + 1) +
      '-' +
      appendZero(date.getDate()) +
      'T00:00:00';

    //yyyy-mm-ddT00:00:00
    const markedData = [];
    const marked = await Schedule.aggregate([
      {
        $match: {
          instituteId: req.body.instituteId,
        },
      },
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
          'days.select': true,
          'days.attendanceMark': true,
          // date: {
          //   $lt: new Date(currentDate),
          // },
        },
      },
      {
        $sort: {
          date: 1,
        },
      },
    ]);

    const mlength = marked.length;
    for (var i = 0; i < mlength; i++) {
      const course = await Institute.aggregate([
        {
          $unwind: '$course',
        },
        {
          $unwind: '$batch',
        },
        {
          $match: {
            _id: mongoose.Types.ObjectId(req.body.instituteId),

            'course._id': mongoose.Types.ObjectId(marked[i].courseId),

            'batch._id': mongoose.Types.ObjectId(marked[i].batchId),
          },
        },
      ]);
      //
      let data = {};
      data = marked[i];
      //
      //

      data.days.courseName = course[0].course.name;
      data.days.batchName = course[0].batch.batchCode;
      //
      //

      //
      const teacher = await Employee.findOne({
        _id: marked[i].days.teacher,
      });
      if (teacher) {
        data.days.teacherName = teacher.basicDetails.name;
      }

      markedData.push(data);
    }

    let unmarkedData = [];
    const unmarked = await Schedule.aggregate([
      {
        $match: {
          instituteId: req.body.instituteId,
        },
      },
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
          'days.select': true,
          'days.attendanceMark': false,
          // date: {
          //   $lt: new Date(currentDate),
          // },
        },
      },
      {
        $sort: {
          date: 1,
        },
      },
    ]);
    //
    const ulength = unmarked.length;
    for (var i = 0; i < ulength; i++) {
      const course = await Institute.aggregate([
        {
          $unwind: '$course',
        },
        {
          $unwind: '$batch',
        },
        {
          $match: {
            _id: mongoose.Types.ObjectId(req.body.instituteId),

            'course._id': mongoose.Types.ObjectId(unmarked[i].courseId),

            'batch._id': mongoose.Types.ObjectId(unmarked[i].batchId),
          },
        },
      ]);
      //
      //
      let data = {};
      data = unmarked[i];
      data.days.courseName = course[0].course.name;
      data.days.batchName = course[0].batch.batchCode;

      const teacher = await Employee.findOne({
        _id: unmarked[i].days.teacher,
      });
      if (teacher) {
        data.days.teacherName = teacher.basicDetails.name;
      }

      unmarkedData.push(data);
    }

    //

    res.status(200).send({ markedData, unmarkedData });
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
      {
        $addFields: {
          scheduleId: {
            $toObjectId: '$scheduleId',
          },
        },
      },
      {
        $lookup: {
          from: 'schedules',
          localField: 'scheduleId',
          foreignField: '_id',
          as: 'schedule',
        },
      },
      {
        $unwind: '$schedule',
      },
      {
        $unwind: '$schedule.days',
      },
      {
        $addFields: {
          lectureId: {
            $toObjectId: '$lectureId',
          },
        },
      },
      {
        $match: {
          $expr: {
            $eq: ['$lectureId', '$schedule.days._id'],
          },
        },
      },
    ]);

    res.status(200).send(student);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.attendanceByFile = async (req, res) => {
  try {
    const file = path.join(__dirname + '../../../' + req.file.path);

    const excelData = excelToJson({
      sourceFile: file,

      sheets: [
        {
          name: 'Sheet1',

          header: {
            rows: 1,
          },

          columnToKey: {
            A: 'rollNo',
            B: 'name',
            C: 'attendanceStatus',
          },
        },
      ],
    });

    const s = excelData.Sheet1.length;
    let attendance = [];
    for (var i = 0; i < s; i++) {
      // Sheet1[i].attendanceStatus =
      //   Sheet1[i].attendanceStatus == 'P' || Sheet1[i].attendanceStatus == 'p' ? true : false;

      const student = await Student.findOne({
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
          {
            'instituteDetails.rollNumber': excelData.Sheet1[i].rollNo,
          },
        ],
      });

      attendance.push({
        studentId: student._id,
        attendanceStatus:
          excelData.Sheet1[i].attendanceStatus == 'PRESENT' ||
          excelData.Sheet1[i].attendanceStatus == 'p'
            ? true
            : false,
      });
    }
    const attBody = {
      instituteId: req.body.instituteId,
      courseId: req.body.courseId,
      batchId: req.body.batchId,
      date: req.body.date,
      scheduleId: req.body.scheduleId,
      lectureId: req.body.lectureId,
      attendance,
    };
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
      attBody,
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
    deleteFile(req.file.path);

    res.status(200).send(addAtt);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.sendAttendanceSMS = async (req, res) => {
  try {
    const checkSmsCount = await Institute.aggregate([
      {
        $unwind: '$course',
      },
      {
        $unwind: '$batch',
      },
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.body.instituteId),
          'course._id': mongoose.Types.ObjectId(req.body.courseId),
          'batch.course': req.body.courseId,
        },
      },
      {
        $project: {
          smsCount: 1,
          course: 1,
          batch: 1,
          basicInfo: 1,
        },
      },
    ]);
    console.log('Hi ', checkSmsCount);
    if (checkSmsCount[0].smsCount <= 0) {
      const err = new Error('Insufficient SMS Balance');
      err.statusCode = 400;
      throw err;
    }
    const studentInfo = await Student.findOne(
      {
        _id: req.body.studentId,
      },
      {
        basicDetails: 1,
      }
    );
    if (!studentInfo) {
      const err = new Error('Insufficient SMS Balance');
      err.statusCode = 400;
      throw err;
    }

    const msgText = `Dear ${req.body.studentName},\nAttendance Report:\nInstitute Name: ${checkSmsCount[0].basicInfo.name} \nCourse: ${checkSmsCount[0].course.name} Batch: ${checkSmsCount[0].batch.batchCode}\n Attendance: ${req.body.totalPresent}/${req.body.totalLectures} \n Percentage:${req.body.percentage}\nFor more details visit lms.eduatlas.in \nFrom Eduatlas`;
    const smsRes = await smsService.sendSms(studentInfo.basicDetails.studentContact, msgText);
    const updateSmsCount = await Institute.update(
      {
        _id: mongoose.Types.ObjectId(req.body.instituteId),
      },
      {
        $inc: {
          smsCount: -1,
        },
      }
    );
    res.send({ status: 'SMS send' });
  } catch (error) {
    console.log(error);
    errorHandler(error, res);
  }
};
