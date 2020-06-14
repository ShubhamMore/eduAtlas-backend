const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  eduatlasId: {
    type: String,
  },
  chats: [
    {
      senderId: {
        type: String,
      },

      senderName: {
        type: String,
      },
      message: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
