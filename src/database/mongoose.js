const mongoose = require('mongoose');
const MONGO_SERVER = "mongodb+srv://userDB:aaouikika@bingbot-3awwl.mongodb.net/Eduatlas?retryWrites=true"
mongoose.connect(MONGO_SERVER, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
