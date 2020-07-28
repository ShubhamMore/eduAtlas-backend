const mongoose = require('mongoose');

const onlineClassLinkSchema = new mongoose.Schema({
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
  topic: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  toTime: {
    type: String,
    required: true,
  },
  fromTime: {
    type: String,
    required: true,
  },
  recordings: [
    {
      fileName: {
        type: String,
        required: true,
      },
      fileSize: {
        type: Number,
        required: true,
      },
      secureUrl: {
        type: String,
        required: true,
      },
      publicId: {
        type: String,
        required: true,
      },
      createdAt: {
        type: String,
        default: Date.now().toLocaleString(),
      },
    },
  ],
});

const OnlineClassLink = mongoose.model('onlineClassLink', onlineClassLinkSchema);

module.exports = OnlineClassLink;
