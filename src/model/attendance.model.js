const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  scheduleId: {
    type: String,
  },
  lectureId: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  batchId: {
    type: String,
    required: true,
  },
  instituteId: {
    type: String,
    required: true,
  },
  attendance: [
    {
      studentId: {
        type: String,
        require: true,
      },
      attendanceStatus: {
        type: Boolean,
        require: true,
      },
    },
  ],
});

module.exports = mongoose.model('Attendance', attendanceSchema);
