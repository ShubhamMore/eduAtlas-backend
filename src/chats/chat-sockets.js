class ChatSockets {
  static sockets = {};

  constructor(userId, socket) {
    ChatSockets.sockets[userId] = socket;
  }

  static setSocket(userId, socket) {
    ChatSockets.sockets[userId] = socket;
  }

  static getSocket(userId) {
    return ChatSockets.sockets[userId];
  }

  static deleteSocket(userId) {
    ChatSockets.sockets[userId] = null;
  }
}

module.exports = ChatSockets;
