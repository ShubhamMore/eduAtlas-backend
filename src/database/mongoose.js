const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_LOCAL_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
