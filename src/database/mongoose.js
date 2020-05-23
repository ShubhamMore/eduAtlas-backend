const mongoose = require('mongoose');

const MONGO_SERVER = process.env.MONGODB_URL;
mongoose.connect(MONGO_SERVER, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
