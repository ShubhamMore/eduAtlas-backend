const jwt = require('jsonwebtoken');
const User = require('../model/user.model');
const ChatSockets = require('./chat-sockets');
const Chat = require('../model/chats.model');

const chatting = async (server) => {
  const io = require('socket.io')(server);

  io.of('/eduatlas-chat')
    .use(async (socket, next) => {
      if (socket.handshake.query && socket.handshake.query.token) {
        const token = socket.handshake.query.token.replace('Bearer ', '');

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
          if (err) return next(new Error('Authentication error'));
          const user = await User.findOne({
            _id: decoded._id,
            'tokens.token': token,
          });
          if (!user) {
            return next(new Error('Authentication error'));
          }
          socket.user = user;
          next();
        });
      } else {
        next(new Error('Authentication error'));
      }
    })
    .on('connection', (socket) => {
      new ChatSockets(socket.user.eduAtlasId, socket);

      socket.on('message', async (message) => {
        const chatMessage = {
          senderId: socket.user.eduAtlasId,
          senderName: socket.user.name,
          message: message.message,
        };
        await Chat.updateOne(
          { eduatlasId: message.receiverId },
          { $push: { chats: chatMessage } },
          { upsert: true }
        );
        const msg = {
          text: message.message,
          date: new Date(),
          reply: false,
          user: {
            name: socket.user.name,
          },
        };
        const receiver = ChatSockets.getSocket(message.receiverId);
        if (receiver) {
          receiver.emit('message', msg);
        }
        msg.reply = true;
        socket.emit('message', msg);
      });

      socket.on('disconnect', () => {
        ChatSockets.deleteSocket(socket.user.eduAtlasId);
      });
    });
};

module.exports = chatting;
