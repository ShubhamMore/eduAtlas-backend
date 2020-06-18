const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  testName: {
    type: String,
  },
  date: {
    type: String,
  },
  instituteId: {
    type: String,
  },
  courseId: {
    type: String,
  },
  batchId: {
    type: String,
  },
  totalMarks: {
    type: String,
  },
  students: [
    {
      studentId: {
        type: String,
      },
      rollNo: {
        type: String,
      },
      marks: {
        type: String,
      },
    },
  ],
});

const Test = mongoose.model('test', testSchema);

module.exports = Test;
