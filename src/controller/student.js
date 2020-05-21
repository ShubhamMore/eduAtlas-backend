const response = require('../service/response');
const schema = require('../service/joi');
const Student = require('../model/student.model');
const User = require('../model/user.model');
const userController = require('../controller/users');
const EduAtlasId = require('../model/eduatlasId.model');

exports.addNewStudent = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    response(res, 500, error.message);
  }
};

exports.addStudent = async (req, res, next) => {
  try {
    const user = await Student.find({
      $or: [
        {
          'basicDetails.phone': req.body.basicDetails.studentContact,
        },
        {
          'basicDetails.email': req.body.basicDetails.studentEmail,
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
      eduAtlasId: newEduAtlasId,
    };
    const addUser = new User(newUser);
    await addUser.save();
    console.log('ID', eduatlasId[0]._id);

    const newStudent = {
      basicDetails: req.body.basicDetails,
      parentDetails: req.body.parentDetails,
      instituteDetails: req.body.instituteDetails,
      eduAtlasId: newEduAtlasId,
      fee: req.body.fee,
      active: req.body.active,
      materialRecord: req.body.materialRecord,
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
    res.status(200).send(addUser);
  } catch (error) {
    console.log(error);
    response(res, 500, error.message);
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

    const student = await Student.find({});
  } catch (error) {}
};
exports.getOneStudent = async (req, res, next) => {
  try {
    const studentInfo = req.query;
    if (!studentInfo.instituteId || !studentInfo.studentEmail) {
      const error = new Error('Student info not provided');
      error.statusCode = 400;
      throw error;
    }

    let student;

    if (studentInfo.anouncement) {
      student = await Student.findOne(
        {
          instituteId: studentInfo.instituteId,
          'basicDetails.studentEmail': studentInfo.studentEmail,
        },
        { anouncement: 1, _id: 0 }
      );
    } else {
      student = await Student.findOne({
        instituteId: studentInfo.instituteId,
        'basicDetails.studentEmail': studentInfo.studentEmail,
      });
    }

    res.status(200).json({ student });
  } catch (error) {
    console.log(error);

    response(res, error.statusCode || 500, error.message);
  }
};

exports.addCourseStudent = async (req, res, next) => {
  //To add student in a course
  try {
<<<<<<< HEAD
    console.log(req.body.instituteDetails.instituteId)
    const courseAvailabe =await Student.find({
      $and:[{
        eduAtlasId:req.body.eduAtlasId,
      },{
        "instituteDetails.instituteId": req.body.instituteDetails.instituteId
      },{
        "instituteDetails.courseId":req.body.instituteDetails.courseId
      }]
    })
    console.log(courseAvailabe)
    if(courseAvailabe.length!=0){
      console.log("length ",courseAvailabe.length)
      const error = new Error('Course Already Exists');
      error.prototype.statusCode = 400;
      throw error;
    }

    // const studentInfo = req.body;
    // console.log("req.body")
    // const updatedStudent = await Student.update(
    //   {
    //     eduAtlasId:req.body.eduAtlasId
    //   },
    //   { 
    //     $push: {
    //       instituteDetails:req.body.instituteDetails,
    //       fee:req.body.fee
    //     } 
    //   },
    // );

    res.status(200).json(courseAvailabe);
=======
    const studentInfo = req.body;
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
>>>>>>> b997f204ba5495169b228eb56612654ac23a27c6
  } catch (error) {
    console.log(error);
    response(res, error.prototype.statusCode || 500, error.message);
  }
};
<<<<<<< HEAD
exports.updateStudentCourse = async(req,res)=>{
  try {
    const updateStudent = await Student.updateOne({
      eduAtlasId:req.body.eduatlasId,
    },{
      $set:{
        instituteDetails:req.body.instituteDetails,
        fee:req.body.fee,
      }
    }
    )
  } catch (error) {
    
  }
}
exports.deleteCourseStudent = async(req,res)=>{
  try {
    
  } catch (error) {
    
  }
}
=======
exports.updateStudentCourse = async (req, res) => {};
>>>>>>> b997f204ba5495169b228eb56612654ac23a27c6
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
//List of active and pending students APi Creation
exports.pendingStudents = async (req, res) => {};
