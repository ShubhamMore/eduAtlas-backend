const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    date: {
        type: String,
        required: true
      },
      courseId: {
        type: String,
        required: true
      },
      batchId: {
        type: String,
        required: true
      },
      instituteId: {
        type: String,
        required: true
      },
      attendance: [
        {
          studentId: {
            type: mongoose.Schema.Types.ObjectId,
            require: true
          },
          attendanceStatus: {
            type: String,
            require: true
          }
        }
      ]
})

module.exports = mongoose.model('Attendance', attendanceSchema)