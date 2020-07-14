const checkAuth = require('../middleware/checkAuth');

const studentRouter = require('express').Router({ caseSensitive: true });
const studentController = require('../controller/student');
const studentDashboardController = require('../controller/studentDashboard');
//to add new student - 1. create new user 2. add student
studentRouter.post('/add', checkAuth, studentController.addStudent); //done

//Add course to existing student
studentRouter.post('/addCourseStudent', checkAuth, studentController.addCourseStudent); //done

//to get list of active student of a courese
studentRouter.post('/getActiveStudents', checkAuth, studentController.getActiveStudents); //not done

//to get pending students
studentRouter.post('/getPendingStudents', checkAuth, studentController.getPendingStudents); //done

//to remove course from the student
studentRouter.post('/deleteStudentCourse', checkAuth, studentController.deleteStudentCourse);

//to get have course details of student
studentRouter.post(
  '/getOneStudentByInstitute',
  checkAuth,
  studentController.getOneStudentByInstitute
);

//to update student course
studentRouter.post('/updateStudentCourse', checkAuth, studentController.updateStudentCourse);

//to update student course
studentRouter.post('/updateStudentCourseFee', checkAuth, studentController.updateStudentCourseFee);

//Update student personal Details
studentRouter.post(
  '/updateStudentPersonalDetails',
  checkAuth,
  studentController.updateStudentPersonalDetails
);

studentRouter.post('/getStudentsByBatch', checkAuth, studentController.getStudentsByBatch);

studentRouter.post('', checkAuth, studentController.getOneStudent);

studentRouter.post('/getOneStudent', checkAuth, studentController.getOneStudent); //done

studentRouter.delete('', checkAuth, studentController.deleteStudent);

studentRouter.get('/all/:instituteId', checkAuth, studentController.getAllStudents);

studentRouter.post('/getStudentsByInstitute', checkAuth, studentController.getStudentsByInstitute);

studentRouter.post(
  '/getCoursesOfStudentByInstitute',
  studentController.getCoursesOfStudentByInstitute
);

/**
 * Student Login ROutes
 */

studentRouter.post('/getInstitutesOfStudent', checkAuth, studentController.getInstitutesOfStudent);

studentRouter.post(
  '/getStudentCoursesByInstitutes',
  checkAuth,
  studentController.getStudentCoursesByInstitutes
);

studentRouter.post('/getStudentSchedule', checkAuth, studentController.getStudentSchedule);

studentRouter.post(
  '/getStudentAllCoursesByInstitute',
  checkAuth,
  studentController.getStudentAllCoursesByInstitute
);

studentRouter.post(
  '/getStudentPTMByInstitutes',
  checkAuth,
  studentController.getStudentPTMByInstitutes
);

studentRouter.post(
  '/getStudentMentoringByInstitute',
  checkAuth,
  studentController.getStudentMentoringByInstitute
);

studentRouter.post(
  '/getStudentTestScheduleByInstitute',
  checkAuth,
  studentController.getStudentTestScheduleByInstitute
);

/**  --------------------- STUDENT DASHBOARD -------------------------- */
studentRouter.post(
  '/getStudentDashboard',
  checkAuth,
  studentDashboardController.getStudentDashboard
);

studentRouter.post(
  '/studentInstituteDashboard',
  checkAuth,
  studentDashboardController.studentInstituteDashboard
);

module.exports = studentRouter;
