const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const schema = require('../service/joi');
const Student = require('../model/student.model');
const Fees = require('../model/fee.model');
const User = require('../model/user.model');
const userController = require('../controller/users');
const EduAtlasId = require('../model/eduatlasId.model');

exports.addStudent = async (req, res, next) => {
  try {
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

    // Send Mail Code Here

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
  } catch (error) {
    console.log(error);
    response(res, 500, error.message);
  }
};

exports.getActiveStudents = async (req, res) => {
  try {
    const students = await Student.aggregate([
      {
        $unwind: '$instituteDetails',
      },
      {
        $match: {
          'instituteDetails.instituteId': req.body.instituteId,
          'instituteDetails.courseId': req.body.courseId,
          'instituteDetails.active': true,
        },
      },
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
  } catch (error) {}
};

exports.getPendingStudents = async (req, res) => {
  try {
    const students = await Student.aggregate([
      {
        $unwind: '$instituteDetails',
      },
      {
        $match: {
          'instituteDetails.instituteId': req.body.instituteId,
          'instituteDetails.courseId': req.body.courseId,
          'instituteDetails.active': false,
        },
      },
    ]);
    console.log(students);
    res.status(200).send(students);
  } catch (error) {}
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
  } catch (error) {}
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
    console.log(error);
    res.status(400).json(error);

    response(res, error.statusCode || 500, error.message);
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

    console.log(courseAvailable);

    if (courseAvailable.length != 0) {
      console.log('length ', courseAvailable.length);
      const error = new Error('Course Already Exists');
      error.statusCode = 400;
      throw error;
    }

    //const studentInfo = req.body;
    // console.log(req.body, req.body.eduAtlasId);
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

    res.status(200).json(updatedStudent);
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
  } catch (error) {}
};

exports.updateStudentCourse = async (req, res) => {
  try {
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
  } catch (error) {}
};

exports.updateStudentCourseFee = async (req, res) => {
  try {
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
    } catch (error) {}
  } catch (error) {}
};

exports.deleteStudentCourse = async (req, res) => {
  console.log(req.body);
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
    res.status(200).send(deleteStudent);
  } catch (error) {
    console.log(error);
    res.send(error);
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
    console.log('========================');
    console.log(error);
    response(res, error.prototype.statusCode || 500, error.message);
  }
};

//Api for accepting invites

//List of active and pending students APi Creation

exports.pendingStudents = async (req, res) => {};
