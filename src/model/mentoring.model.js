const mongoose = require('mongoose');

const mentoringSchema = new mongoose.Schema({
  instituteId: {
    type: String,
  },
  studentId: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  note: {
    type: String,
  },
  teacherId: {
    type: String,
  },
});

const Mentoring = mongoose.model('mentoring', mentoringSchema);

module.exports = Mentoring;
