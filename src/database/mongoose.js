const mongoose = require('mongoose');

// const MONGO_SERVER =
//   // 'mongodb+srv://userDB:aaouikika@bingbot-3awwl.mongodb.net/Eduatlas?retryWrites=true';
const MONGO_SERVER = process.env.MONGODB_URL;
mongoose.connect(MONGO_SERVER, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
