const Notification = require('../model/notification.model');

const ChatSockets = require('../chats/chat-sockets');

const sendNotification = async (notify) => {
  const notifyData = {
    title: notify.title,
    message: notify.message,
  };
  await Notification.updateOne(
    { eduatlasId: notify.receiverId },
    { $push: { notifications: notifyData } },
    { upsert: true }
  );

  const receiver = ChatSockets.getSocket(notify.receiverId);
  if (receiver) {
    notifyMessage = {
      title: notify.title,
      message: notify.message,
      date: new Date(),
    };
    receiver.emit('notify', notifyMessage);
  }
};

module.exports = sendNotification;
