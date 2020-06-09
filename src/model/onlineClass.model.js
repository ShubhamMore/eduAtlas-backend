const mongoose = require('mongoose');

const onlineClassSchema = new mongoose.Schema({
  topic: {
    type: String,
  },
  duration: {
    type: String,
  },
  password: {
    type: String,
  },
  agenda: {
    type: String,
  },
  meetingId: {
    type: String,
  },
  joinUrl: {
    type: String,
  },
  startUrl: {
    type: String,
  },
  startTime: {
    type: String,
  },
  instituteId: {
    type: String,
  },
  batchId: {
    type: String,
  },
  courseId: {
    type: String,
  },
  topic: {
    type: String,
  },
  hostId: {
    type: String,
  },
  hostEmail: {
    type: String,
  },
  hostName: {
    type: String,
  },
});

const OnlineClass = mongoose.model('onlineclass', onlineClassSchema);

module.exports = OnlineClass;
