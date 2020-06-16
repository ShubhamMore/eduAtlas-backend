const checkAuth = require('../middleware/checkAuth');

const studentRouter = require('express').Router({ caseSensitive: true });
const studentController = require('../controller/student');
//to add new student - 1. create new user 2. add student
studentRouter.post('/add', studentController.addStudent); //done

//Add course to existing student
studentRouter.post('/addCourseStudent', studentController.addCourseStudent); //done

//to get list of active student of a courese
studentRouter.post('/getActiveStudents', studentController.getActiveStudents); //not done

//to get pending students
studentRouter.post('/getPendingStudents', studentController.getPendingStudents); //done

//to remove course from the student
studentRouter.post('/deleteStudentCourse', studentController.deleteStudentCourse);

//to get have course details of student
studentRouter.post('/getOneStudentByInstitute', studentController.getOneStudentByInstitute);

//to update student course
studentRouter.post('/updateStudentCourse', studentController.updateStudentCourse);

//to update student course
studentRouter.post('/updateStudentCourseFee', studentController.updateStudentCourseFee);

//Update student personal Details
studentRouter.post('/updateStudentPersonalDetails', studentController.updateStudentPersonalDetails);

studentRouter.post('/getStudentsByBatch', checkAuth, studentController.getStudentsByBatch);

studentRouter.post('', checkAuth, studentController.getOneStudent);

studentRouter.post('/getOneStudent', studentController.getOneStudent); //done

studentRouter.delete('', checkAuth, studentController.deleteStudent);

studentRouter.get('/all/:instituteId', checkAuth, studentController.getAllStudents);

studentRouter.post('/getStudentsByInstitute', checkAuth, studentController.getStudentsByInstitute);

studentRouter.post(
  '/getCoursesOfStudentByInstitute',
  studentController.getCoursesOfStudentByInstitute
);

module.exports = studentRouter;
