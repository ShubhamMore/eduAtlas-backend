const Chat = require('../model/chats.model');
const errorHandler = require('../service/errorHandler');

exports.getChats = async (req, res) => {
  try {
    const receiverId = req.body.receiverId;
    const userId = req.user.eduAtlasId;

    // const myMessages = await Chat.aggregate([
    //   {
    //     $match: {
    //       eduatlasId: userId,
    //       'chats.senderId': receiverId,
    //     },
    //   },
    // ]);

    // const senderMessages = await Chat.aggregate([
    //   {
    //     $match: {
    //       eduatlasId: receiverId,
    //       'chats.senderId': userId,
    //     },
    //   },
    // ]);

    const myMessages = await Chat.find({
      eduatlasId: userId,
      'chats.senderId': receiverId,
    });

    const senderMessages = await Chat.find({
      eduatlasId: receiverId,
      'chats.senderId': userId,
    });

    const messages = new Array();

    if (myMessages.length > 0) {
      messages.push(...myMessages[0].chats);
    }

    if (senderMessages.length > 0) {
      messages.push(...senderMessages[0].chats);
    }

    console.log(messages);

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
        text: message.message,
        date: new Date(message.date),
        reply: message.senderId !== userId,
        user: {
          name: message.senderName,
        },
      };

      sendMsg.push(msg);
    });

    res.status(200).send(sendMsg);
  } catch (err) {
    errorHandler(err, res);
  }
};
