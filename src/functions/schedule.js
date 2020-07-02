const Student = require('../model/student.model');
const Employee = require('../model/employee.model');
const Institute = require('../model/institute.model');
const Schedule = require('../model/schedule.model');
const send = require('../service/mail');

const appendZero = (n) => {
  if (n < 10) {
    return '0' + n;
  }
  return '' + n;
};

const sendScheduleUpdate = async () => {
  const now = new Date() + 86400000;
  const date = new RegExp(
    '.*' +
      now.getFullYear() +
      '-' +
      appendZero(now.getMonth() + 1).toString() +
      '-' +
      appendZero(now.getDate()) +
      '.*'
  );
  const schedule = await Schedule.aggregate([
    {
      $unwind: '$days',
    },
    {
      $match: {
        'days.date': date,
      },
    },
    {},
  ]);
  //   const students = await Student.find({ birthDate: date }, { _id: 0, name: 1, email: 1 });
  //   const n = students.length;
  for (let i = 0; i < n; i++) {
    const mail = {
      from: 'admin@eduatlas.in',
      to: students[i].email,
      subject: `Happy Birthday ${students[i].name.toUpperCase()} From Way2Success`,
      text: '',
      html: `<strong>Happy Birthday <em>${students[
        i
      ].name.toUpperCase()}</em></strong><br><p>Wishing you happiness, good health and a great year ahead. Wishing you all the best that life has to offer on your birthday. May you always stay happy and blessed! May this day bring countless happiness and endless joy and live with peace and serenity.</p><br><p style="text-align: right;">From Way2Success</p>`,
    };
    await sendMail(mail);
  }
};

const dailySchedule = async () => {
  const now = new Date();
  let milliSecTill7 =
    new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 00, 0, 0) - now; // subtract 5 hrs and 30 mins for indian Time
  if (milliSecTill7 < 0) {
    milliSecTill7 += 86400000; // it's after 7am, try 7am tomorrow.
  }

  setTimeout(async () => {
    await sendScheduleUpdate();
    setInterval(async () => {
      await sendScheduleUpdate();
    }, 86400000);
  }, milliSecTill7);
};

module.exports = dailySchedule;
