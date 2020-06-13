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
      message: {
        type: String,
      },
      timestamp: true,
    },
  ],
});

const Chat = mongoose.model('chat', chatSchema);

module.exports = Chat;
