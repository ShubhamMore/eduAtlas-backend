const mongoose = require('mongoose');
const MONGO_SERVER = "mongodb+srv://userDB:aaouikika@bingbot-3awwl.mongodb.net/Eduatlas?retryWrites=true"
const MONGO_SERVER_LOCAL = "mongodb://127.0.0.1:27017/Eduatlas"
mongoose.connect(MONGO_SERVER_LOCAL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
