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
  batchName: {
    type: String,
  },
  testCode: {
    type: String,
  },
  totalMarks: {
    type: String,
  },
  startTime: {
    type: String,
  },
  toTime: {
    type: String,
  },
  scored: {
    type: Boolean,
    default: false,
  },

  students: [
    {
      studentId: {
        type: String,
      },
      studentName: {
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
