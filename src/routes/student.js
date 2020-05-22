const checkAuth = require('../middleware/checkAuth');

const studentRouter = require('express').Router({ caseSensitive: true });
const studentController = require('../controller/student');
//to add new student - 1. create new user 2. add student
studentRouter.post('/add', studentController.addStudent);

//Add course to existing student
studentRouter.post('/addCourseStudent', studentController.addCourseStudent);

//to get list of active student of a courese
studentRouter.post('/getActiveStudents', studentController.getActiveStudents)

//to get pending students
studentRouter.post('/getPendingStudents',studentController.getPendingStudents)

//to remove course from the student
studentRouter.post('/deleteStudentCourse',studentController.deleteStudentCourse)

//to get have course details of student
studentRouter.post('/getOneStudentByInstitute',studentController.getOneStudentByInstitute)


studentRouter.get('/all/:instituteId', checkAuth, studentController.getAllStudents);


studentRouter.post('', checkAuth, studentController.getOneStudent);



studentRouter.delete('', checkAuth, studentController.deleteStudent);


module.exports = studentRouter;
