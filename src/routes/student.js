const checkAuth = require('../middleware/checkAuth');

const studentRouter = require('express').Router({ caseSensitive: true });
const studentController = require('../controller/student');

studentRouter.post('/add', studentController.addStudent);

studentRouter.get('/all/:instituteId', checkAuth, studentController.getAllStudents);

studentRouter.get('', checkAuth, studentController.getOneStudent);

<<<<<<< HEAD
studentRouter.post('/updateStudent', studentController.addCourseStudent);
=======
// studentRouter.post('/updateStudent', studentController.updateStudent);
>>>>>>> b997f204ba5495169b228eb56612654ac23a27c6

studentRouter.delete('', checkAuth, studentController.deleteStudent);

module.exports = studentRouter;
