const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

require('./database/mongoose');
const mailController = require('./controller/sendmail');
const indexRouter = require('./routes/index');
const bodyParser = require('body-parser');

const dailySchedule = require('./functions/schedule');

const app = express();

app.use(express.json({ limit: '100mb' }));

app.use(cors());

app.use('/images', express.static(path.join('images')));
app.use('/receipts', express.static(path.join('receipts')));
app.use('/sample', express.static(path.join('sample')));
app.use('/announcements', express.static(path.join('announcements')));
app.use('/studyMaterial', express.static(path.join('studyMaterial')));
app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.urlencoded({ extended: true, limit: '100mb' }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(logger('dev'));

app.use('/admin', require('./routes/admin'));
app.use('/coupon', require('./routes/coupon'));
app.use('/sms', require('./routes/smsPack'));
app.use('/users', require('./routes/users'));
app.use('/institute', require('./routes/institute'));
app.use('/institute/payment', require('./routes/payment'));
app.use('/institute/student', require('./routes/student'));
app.use('/institute/fee', require('./routes/fee'));
app.use('/institute/employee', require('./routes/employee'));
app.use('/institute/schedule', require('./routes/schedule'));
app.use('/institute/attendance', require('./routes/attendance'));
app.use('/institute/zoom', require('./routes/zoom'));
app.use('/institute/tests', require('./routes/tests'));
app.use('/institute/announcement', require('./routes/annoucement'));
app.use('/institute/ptm', require('./routes/ptm'));
app.use('/institute/mentoring', require('./routes/mentoring'));
app.use('/institute/leads', require('./routes/leads'));
app.use('/institute/studyMaterial', require('./routes/studyMaterial'));
app.use('/institute/notification', require('./routes/notification'));
app.use('/institute/meeting', require('./routes/onlineClassLink'));
app.use('/institute/remark', require('./routes/remarks'));
app.use('/institute/forum', require('./routes/forum'));
app.use('/institute/chats', require('./routes/chats'));
app.use('/mail', require('./controller/sendmail'));
app.use((req, res, next) => {
  const error = new Error('NOT FOUND');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

dailySchedule();

module.exports = app;
