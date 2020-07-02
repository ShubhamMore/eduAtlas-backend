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
      branchId: {
        type: String,
      },
      teacherId: {
        type: String,
      },
      remark: {
        type: String,
      },
      date: {
        type: Date.now(),
      },
    },
  ],
});

const remarkModel = mongoose.model('remark', remarksSchema);
module.exports = remarkModel;
