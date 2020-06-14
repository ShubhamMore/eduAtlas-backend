const Chat = require('../model/chats.model');
const errorHandler = require('../service/errorHandler');

exports.getChats = async (req, res) => {
  try {
    const receiverId = req.body.receiverId;
    const userId = req.user.eduAtlasId;

    const myMessages = await Chat.aggregate([
      {
        $match: {
          eduatlasId: userId,
          'chats.senderId': receiverId,
        },
      },
    ]);

    const senderMessages = await Chat.aggregate([
      {
        $match: {
          eduatlasId: receiverId,
          'chats.senderId': userId,
        },
      },
    ]);

    const messages = [...myMessages, ...senderMessages];

    messages.sort((msg1, msg2) => {
      const msg1Date = new Date(msg1.date);
      const msg2Date = new Date(msg2.date);
      if (msg1Date > msg2Date) {
        return 1;
      } else {
        return -1;
      }
    });

    const sendMsg = new Array();

    messages.forEach((message) => {
      const msg = {
        text: msg.message,
        date: new Date(msg.date),
        reply: msg.senderId !== userId,
        user: {
          name: msg.senderName,
        },
      };

      sendMsg.push(msg);
    });

    res.status(200).send(sendMsg);
  } catch (err) {
    errorHandler(err, res);
  }
};
