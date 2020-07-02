const mongoose = require('mongoose');
const remarksSchema = new mongoose.Schema({
  studentId: {
    type: String,
  },
  remarks: [
    {
      instituteId: {
        type: String,
      },
      courseId: {
        type: String,
      },
      batchId: {
        type: String,
      },
      teacherId: {
        type: String,
      },
      remark: {
        type: String,
      },
      suggestion: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

const remarkModel = mongoose.model('remark', remarksSchema);
module.exports = remarkModel;
