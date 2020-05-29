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
    type: String,
    default: 'false',
  },
  days: [
    {
      day: {
        type: String,
      },
      date: {
        type: String,
      },
      time: {
        type: String,
      },
      teacher: {
        type: String,
      },
      topic: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model('Schedule', scheduleSchema);
