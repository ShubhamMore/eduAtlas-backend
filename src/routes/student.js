const checkAuth = require('../middleware/checkAuth');

const studentRouter = require('express').Router({ caseSensitive: true });
const studentController = require('../controller/student');

studentRouter.post('/add', studentController.addStudent);

studentRouter.get('/all/:instituteId', checkAuth, studentController.getAllStudents);

studentRouter.post('', checkAuth, studentController.getOneStudent);

studentRouter.post('/updateStudent', studentController.addCourseStudent);

studentRouter.delete('', checkAuth, studentController.deleteStudent);

studentRouter.post('/getActiveStudents', studentController.getActiveStudents)

studentRouter.post('/getPendingStudents',studentController.getPendingStudents)

studentRouter.post('/deleteStudentCourse',studentController.deleteStudentCourse)

studentRouter.post('/getOneStudentByInstitute',studentController.getOneStudentByInstitute)

module.exports = studentRouter;
