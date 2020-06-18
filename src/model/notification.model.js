const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  eduatlasId: {
    type: String,
  },
  notifications: [
    {
      title: {
        type: String,
        default: '',
      },
      message: {
        type: String,
        default: '',
      },
      date: {
        type: Number,
        default: new Date().getTime(),
      },
      seen: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
