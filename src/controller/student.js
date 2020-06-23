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
const Fee = require('../model/fee.model');

const send = require('../service/mail');
exports.addStudent = async (req, res, next) => {
  try {
    //    console.log('****************************body***********************************');
    console.log(req.body);
    if (req.body.instituteDetails.batchId) {
      const checkRoll = await Student.findOne({
        $and: [
          {
            'instituteDetails.instituteId': req.body.instituteDetails.instituteId,
          },
          {
            'instituteDetails.courseId': req.body.instituteDetails.courseId,
          },
          {
            'instituteDetails.batchId': req.body.instituteDetails.batchId,
          },
          {
            'instituteDetails.rollNumber': req.body.instituteDetails.rollNumber,
          },
        ],
      });
      //  console.log('****************************checkRoll***********************************');
      console.log(checkRoll);
      if (checkRoll) {
        const error = new Error('Roll Number is already used');
        error.statusCode = 202;
        throw error;
      }
    }

    const user = await User.find({
      $or: [
        {
          phone: req.body.basicDetails.studentContact,
        },
        {
          email: req.body.basicDetails.studentEmail,
        },
      ],
    });
    //    console.log('****************************user***********************************');

    console.log(user);

    if (user.length != 0) {
      console.log('length ', user.length);
      const error = new Error('User Already Exists');
      //error.prototype.statusCode = 400;
      throw error;
    }
    //EDU-2020-ST-000000
    const eduatlasId = await EduAtlasId.find({});
    //   console.log("ID", eduatlasId[0])
    var studentId = eduatlasId[0].studentEduId.split('-');
    var d = new Date();
    var newEduAtlasId = 'EDU-' + d.getFullYear() + '-ST-' + (parseInt(studentId[3]) + 1);
    console.log(newEduAtlasId);

    const newUser = {
      name: req.body.basicDetails.name,
      role: 'student',
      phone: req.body.basicDetails.studentContact,
      email: req.body.basicDetails.studentEmail,
      password: req.body.basicDetails.studentContact,
      eduAtlasId: newEduAtlasId.split('-').join(''),
    };
    const addUser = new User(newUser);
    await addUser.save();
    console.log('ID', eduatlasId[0]._id);

    const newStudent = {
      basicDetails: req.body.basicDetails,
      parentDetails: req.body.parentDetails,
      instituteDetails: req.body.instituteDetails,
      eduAtlasId: newEduAtlasId.split('-').join(''),
      fee: req.body.fee,
      active: req.body.active,
      materialRecord: req.body.materialRecord,
    };
    const instituteDetails = await Institute.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.body.instituteDetails.instituteId),
        },
      },
      {
        $project: {
          basicInfo: 1,
          parentUser: {
            $toObjectId: '$parentUser',
          },
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'parentUser',
          foreignField: '_id',
          as: 'parentInstitute',
        },
      },
      {
        $unwind: '$parentInstitute',
      },
      {
        $project: {
          basicInfo: 1,
          'parentInstitute.name': 1,
          'parentInstitute.email': 1,
          'parentInstitute.phone': 1,
        },
      },
    ]);
    console.log('****************************PARENT INSTITUTE***********************************');

    console.log(instituteDetails);
    // Send Mail Code Here
    let mail = {
      from: 'admin@eduatlas.in',
      to: req.body.basicDetails.studentEmail,
      subject: 'INSTITUTE REQUEST EDUATLAS',
      html:
        '<!DOCTYPE html>' +
        '<html><head><title>YOUR ACCOUT HAS BEEN CREATED AT EDUATLAS.COM</title>' +
        '</head><body><div>' +
        '<p>Dear ' +
        req.body.basicDetails.name +
        ',<br> The Following Institute has added you</p>' +
        '<p>INSTITUTE NAME:' +
        instituteDetails[0].parentInstitute.name +
        '</p>' +
        '<p>BRANCH NAME: ' +
        instituteDetails[0].basicInfo.name +
        '</p>' +
        '<p>CONTACT: ' +
        instituteDetails[0].basicInfo.instituteContact +
        '</p>' +
        '<p>FOR LOGIN CREDENTIALS: </p>' +
        '<p>EMAIL: ' +
        req.body.basicDetails.email +
        '</p>' +
        '<p>PASSWORD: ' +
        req.body.basicDetails.phone +
        '</p>' +
        '<p>Thank you </p>' +
        '<p>EDUATLAS </p>' +
        '</div></body></html>',
    };

    const addStudent = new Student(newStudent);
    console.log(addStudent);
    await addStudent.save();
    console.log();
    await EduAtlasId.updateOne(
      { _id: eduatlasId[0]._id },
      {
        $set: {
          studentEduId: newEduAtlasId,
        },
      }
    );

    res.status(200).send(addStudent);
    await send(mail);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getActiveStudents = async (req, res) => {
  try {
    let match = {};
    if (!req.body.courseId && req.body.instituteId) {
      match = {
        $match: {
          'instituteDetails.instituteId': req.body.instituteId,
          'instituteDetails.active': true,
        },
      };
    } else if (req.body.courseId && req.body.instituteId) {
      match = {
        $match: {
          'instituteDetails.instituteId': req.body.instituteId,
          'instituteDetails.courseId': req.body.courseId,
          'instituteDetails.active': true,
        },
      };
    }
    const students = await Student.aggregate([
      {
        $unwind: '$instituteDetails',
      },
      match,
    ]);
    //  const students = await Student.agg({
    //    $and:[ {
    //     "instituteDetails.instituteId":req.body.instituteId,
    //   },{
    //     "instituteDetails.courseId":req.body.courseId,
    //   },{
    //     "instituteDetails.active":true
    //   }
    // ]
    //   })
    console.log(students);
    res.status(200).send(students);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getPendingStudents = async (req, res) => {
  try {
    let match = {};
    if (!req.body.courseId && req.body.instituteId) {
      match = {
        $match: {
          'instituteDetails.instituteId': req.body.instituteId,
          'instituteDetails.active': true,
        },
      };
    } else if (req.body.courseId && req.body.instituteId) {
      match = {
        $match: {
          'instituteDetails.instituteId': req.body.instituteId,
          'instituteDetails.courseId': req.body.courseId,
          'instituteDetails.active': true,
        },
      };
    }
    const students = await Student.aggregate([
      {
        $unwind: '$instituteDetails',
      },
      match,
    ]);
    console.log(students);
    res.status(200).send(students);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getAllStudents = async (req, res, next) => {
  try {
    const instituteId = req.params.instituteId;
    if (!instituteId) {
      const error = new Error('Institute id not provided');
      error.prototype.statusCode = 400;
      throw error;
    }

    const students = await Student.find({ instituteId });

    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    const statusCode = error.prototype.statusCode || 500;
    response(res, statusCode, error.message);
  }
};

exports.getOneStudentByInstitute = async (req, res) => {
  try {
    console.log(req.body);
    const student = await Student.aggregate([
      {
        $match: {
          eduAtlasId: req.body.eduatlasId,
        },
      },
      {
        $unwind: '$instituteDetails',
      },
      {
        $match: {
          'instituteDetails.instituteId': req.body.instituteId,
          'instituteDetails.courseId': req.body.courseId,
        },
      },
    ]);

    const fee = await Fees.findOne({
      eduAtlasId: req.body.eduatlasId,
      instituteId: req.body.instituteId,
      courseId: req.body.courseId,
    });

    student[0].fees = fee;

    res.status(200).send(student);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getOneStudent = async (req, res, next) => {
  console.log(req.body);
  try {
    if (!req.body.eduatlasId) {
      const error = new Error('Student Eduatlas ID not provided');
      error.statusCode = 400;
      throw error;
    }
    const student = await Student.findOne(
      {
        $or: [
          {
            eduAtlasId: req.body.eduatlasId,
          },
          {
            'basicDetails.studentEmail': req.body.eduatlasId,
          },
        ],
      },
      {
        basicDetails: 1,
        parentDetails: 1,
        eduAtlasId: 1,
      }
    );

    if (!student) {
      throw new Error('Student Not Found');
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.addCourseStudent = async (req, res, next) => {
  //To add student in a course
  try {
    console.log(req.body.instituteDetails.instituteId);
    const courseAvailable = await Student.find({
      $and: [
        {
          eduAtlasId: req.body.eduAtlasId,
        },
        {
          'instituteDetails.instituteId': req.body.instituteDetails.instituteId,
        },
        {
          'instituteDetails.courseId': req.body.instituteDetails.courseId,
        },
      ],
    });

    if (courseAvailable.length != 0) {
      console.log('length ', courseAvailable.length);
      const error = new Error('Student Already enrolled to this Course');
      error.statusCode = 400;
      throw error;
    }

    if (req.body.instituteDetails.batchId) {
      const checkRoll = await Student.findOne({
        $and: [
          {
            'instituteDetails.instituteId': req.body.instituteDetails.instituteId,
          },
          {
            'instituteDetails.courseId': req.body.instituteDetails.courseId,
          },
          {
            'instituteDetails.batchId': req.body.instituteDetails.batchId,
          },
          {
            'instituteDetails.rollNumber': req.body.instituteDetails.rollNumber,
          },
        ],
      });
      if (checkRoll) {
        const error = new Error('Roll Number is already used');
        error.statusCode = 400;
        throw error;
      }
    }

    //const studentInfo = req.body;
    //console.log(req.body, req.body.eduAtlasId);
    const updatedStudent = await Student.update(
      {
        eduAtlasId: req.body.eduAtlasId,
      },
      {
        $push: {
          instituteDetails: req.body.instituteDetails,
          fee: req.body.fee,
        },
      }
    );

    const instituteDetails = await Institute.aggregate([
      {
        $unwind: '$course',
      },
      {
        $unwind: '$batch',
      },
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.body.instituteDetails.instituteId),
          'course._id': mongoose.Types.ObjectId(req.body.instituteDetails.courseId),
          // 'batch._id': mongoose.Types.ObjectId(req.body.instituteDetails.batchId),
        },
      },
      {
        $project: {
          course: 1,
          // batch: 1,
          basicInfo: 1,
          parentUser: {
            $toObjectId: '$parentUser',
          },
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'parentUser',
          foreignField: '_id',
          as: 'parentInstitute',
        },
      },
    ]);

    const student = await Student.findOne(
      { eduAtlasId: req.body.eduAtlasId },
      { _id: 1, basicDetails: 1 }
    );

    console.log(student);
    res.status(200).json(student);

    let mail = {
      from: 'admin@eduatlas.in',
      to: student.basicDetails.studentEmail,
      subject: 'INSTITUTE REQUEST EDUATLAS',
      html:
        '<!DOCTYPE html>' +
        '<html><head><title>YOUR ACCOUNT HAS BEEN CREATED AT EDUATLAS.COM</title>' +
        '</head><body><div>' +
        '<p>Dear ' +
        student.basicDetails.name +
        ',<br> You have been added in the course</p>' +
        '<p>INSTITUTE NAME:' +
        instituteDetails[0].parentInstitute.name +
        '</p>' +
        '<p>BRANCH NAME: ' +
        instituteDetails[0].instituteId +
        '</p>' +
        '<p>CONTACT: ' +
        instituteDetails[0].basicInfo.instituteContact +
        '</p>' +
        '<p>FOR LOGIN CREDENTIALS: </p>' +
        '<p>EMAIL: ' +
        student.basicDetails.studentEmail +
        '</p>' +
        '<p>PASSWORD: ' +
        student.basicDetails.studentContact +
        '</p>' +
        '<p>Thank you </p>' +
        '<p>EDUATLAS </p>' +
        '</div></body></html>',
    };

    send(mail);
  } catch (error) {
    console.log(error);
    errorHandler(error, res);
  }
};

exports.updateStudentPersonalDetails = async (req, res) => {
  try {
    console.log(req.body);
    const updateStudent = await Student.updateOne(
      {
        _id: req.body._id,
      },
      {
        $set: {
          basicDetails: req.body.basicDetails,
          parentDetails: req.body.parentDetails,
        },
      }
    );
    res.status(200).send({ success: true });
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.updateStudentCourse = async (req, res) => {
  try {
    let body = {};

    if (req.body.instituteDetails.batchId) {
      const checkRoll = await Student.findOne({
        $and: [
          {
            _id: {
              $ne: req.body._id,
            },
          },

          {
            'instituteDetails.instituteId': req.body.instituteDetails.instituteId,
          },
          {
            'instituteDetails.courseId': req.body.instituteDetails.courseId,
          },
          {
            'instituteDetails.batchId': req.body.instituteDetails.batchId,
          },
          {
            'instituteDetails.rollNumber': req.body.instituteDetails.rollNumber,
          },
        ],
      });
      console.log('****************************checkRoll***********************************');
      console.log(checkRoll);
      if (checkRoll) {
        const error = new Error('Roll Number is already used');
        console.log('errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
        error.statusCode = 400;
        throw error;
      }
    }

    const updateStudent = await Student.updateOne(
      {
        _id: req.body.studentId,
        'instituteDetails._id': req.body.instituteId,
      },
      {
        $set: {
          instituteDetails: req.body.instituteDetails,
          fee: req.body.fee,
        },
      }
    );
    res.status(200).send({ success: true });
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.updateStudentCourseFee = async (req, res) => {
  try {
    const updateStudent = await Student.updateOne(
      {
        _id: req.body.studentId,
        'fee._id': req.body.feeId,
      },
      {
        $set: {
          'fee.$': req.body.fee,
        },
      }
    );
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.deleteStudentCourse = async (req, res) => {
  try {
    const deleteStudent = await Student.updateOne(
      {
        eduAtlasId: req.body.eduatlasId,
      },
      {
        $pull: {
          instituteDetails: {
            _id: req.body._id,
          },
        },
      }
    );

    await Fee.findOneAndDelete({
      studentId: req.body.studentId,
      instituteId: req.body.instituteId,
      courseId: req.body.courseId,
    });

    res.status(200).send(deleteStudent);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const studentInfo = req.query;
    console.log('StudentInfo', studentInfo);
    if (!studentInfo.instituteId || !studentInfo.studentEmail) {
      const error = new Error('Student info not provided');
      error.statusCode = 400;
      throw error;
    }
    console.log('StudentInfo', studentInfo);
    await Student.findOneAndDelete({
      instituteId: studentInfo.instituteId,
      'basicDetails.studentEmail': studentInfo.studentEmail,
    });

    res.status(202).json({ message: 'Student deleted successfully' });
  } catch (error) {
    errorHandler(error, res);
  }
};
exports.getStudentsByBatch = async (req, res) => {
  try {
    const studentsArray = new Array();

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

    res.status(200).send(students);
  } catch (error) {
    errorHandler(error, res);
  }
};
//Api for accepting invites

//List of active and pending students APi Creation

exports.getStudentsByInstitute = async (req, res) => {
  try {
    console.log(req.body);
    const students = await Student.find({
      'instituteDetails.instituteId': req.body.instituteId,
    });

    if (students.length == 0) {
      const error = new Error('No student found');
      error.statusCode = 400;
      throw error;
    }

    res.status(200).send(students);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getCoursesOfStudentByInstitute = async (req, res) => {
  try {
    const student = await Student.aggregate([
      {
        $unwind: '$instituteDetails',
      },
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.body._id),
          'instituteDetails.instituteId': req.body.instituteId,
        },
      },
      // {
      //   $group: {
      //     _id: '$instituteDetails.courseId',
      //   },
      // },
      {
        $project: {
          _id: {
            $toObjectId: '$instituteDetails.courseId',
          },
        },
      },
      {
        $lookup: {
          from: 'institutes',
          localField: '_id',
          foreignField: 'course._id',
          as: 'courses',
        },
      },
      {
        $unwind: '$courses',
      },
      {
        $project: {
          'courses.course': 1,
        },
      },
      {
        $unwind: '$courses.course',
      },
      {
        $match: {
          $expr: {
            $eq: ['$_id', '$courses.course._id'],
          },
        },
      },
      // {
      //   $group: {
      //     _id: '$courses.course',
      //   },
      // },
      // {
      //   $unwind: '$_id',
      // },
      // {
      //   $project: {
      //     'courses.course': 1,
      //   },
      // },
    ]);

    console.log(student);
    res.status(200).send(student);
  } catch (error) {
    errorHandler(error, res);
  }
};

//exports.pendingStudents = async (req, res) => {};
