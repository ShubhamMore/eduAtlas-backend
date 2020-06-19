const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schedule schema
const scheduleSchema = new Schema({
  instituteId: {
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
  scheduleStart: {
    type: String,
    required: true,
  },
  scheduleEnd: {
    type: String,
    required: true,
  },
  recurrence: {
    type: Boolean,
    default: false,
  },
  days: [
    {
      select: {
        type: Boolean,
        default: false,
      },
      day: {
        type: String,
        default: '',
      },
      date: {
        type: String,
        default: '',
      },
      startTime: {
        type: String,
        default: '',
      },
      endTime: {
        type: String,
        default: '',
      },
      teacher: {
        type: String,
        default: null,
      },
      topic: {
        type: String,
        default: '',
      },
      attendanceMark: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

module.exports = mongoose.model('Schedule', scheduleSchema);
