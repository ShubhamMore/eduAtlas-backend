const Student = require('../model/student.model');
const Employee = require('../model/employee.model');
const Institute = require('../model/institute.model');
const Schedule = require('../model/schedule.model');
const send = require('../service/mail');
const sendNotification = require('../notifications/notification');
var cron = require('node-cron');

const appendZero = (n) => {
  if (n < 10) {
    return '0' + n;
  }
  return '' + n;
};

const sendScheduleUpdate = async () => {
  const now = new Date(new Date().getTime() + 86400000);

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
    {
      $lookup: {
        from: 'students',
        localField: 'instituteId',
        foreignField: 'instituteDetails.instituteId',
        as: 'students',
      },
    },
    {
      $addFields: {
        'days.teacher': {
          $toObjectId: '$days.teacher',
        },
      },
    },
    {
      $lookup: {
        from: 'employees',
        localField: 'days.teacher',
        foreignField: '_id',
        as: 'teacher',
      },
    },
    {
      $project: {
        days: 1,
        'students.basicDetails.studentEmail': 1,
        'students.eduAtlasId': 1,
        'teacher.basicDetails.employeeEmail': 1,
        'teacher.eduAtlasId': 1,
      },
    },
  ]);

  schedule.forEach((schedule) => {
    const message = `
      <h3>Schedule Reminder</h3>
      <p>You have lecture on ${new Date(schedule.days.date)} of topic ${schedule.days.topic} 
      from ${schedule.days.startTime} to ${schedule.days.endTime} </p>
      <p>Be present on time for lecture</p>
      <p>----<br>Eduatlas Team</p>
    `;

    const notification = {
      title: 'Schedule Reminder',
      message: `You have lecture on ${new Date(schedule.days.date)} of topic ${
        schedule.days.topic
      } from ${schedule.days.startTime} to ${schedule.days.endTime}`,
    };

    schedule.students.forEach((student) => {
      const mail = {
        from: process.env.GMAIL_USER,
        to: students.basicDetails.studentEmail,
        subject: `Schedule Reminder from Eduatlas`,
        text: '',
        html: message,
      };
      sendMail(mail);
      notification.receiverId = student.eduAtlasId;
      sendNotification(notification);
    });

    schedule.teacher.forEach((teacher) => {
      const mail = {
        from: process.env.GMAIL_USER,
        to: teacher.basicDetails.employeeEmail,
        subject: `Schedule Reminder from Eduatlas`,
        text: '',
        html: message,
      };
      sendMail(mail);
      notification.receiverId = teacher.eduAtlasId;
      sendNotification(notification);
    });
  });
};

const dailySchedule = async () => {
  const now = new Date();
  let milliSecTill7 =
    new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 04, 00, 0) - now; // subtract 5 hrs and 30 mins for indian Time
  //
  if (milliSecTill7 < 0) {
    milliSecTill7 += 86400000; // it's after 7am, try 7am tomorrow.
  }

  setTimeout(async () => {
    await sendScheduleUpdate();
    setInterval(async () => {
      await sendScheduleUpdate();
    }, 86400000);
  }, milliSecTill7);

  /*DEACTIVATE INSTITUTE CRON JOB*/

  cron.schedule('*/2 * * * * *', async () => {
    //console.log('cron');

    const date = new Date();
    console.log(date);
    const currentDate =
      date.getFullYear() + '-' + appendZero(date.getMonth() + 1) + '-' + appendZero(date.getDate());

    const deactivate = await Institute.updateMany(
      {
        $and: [
          { active: true },
          {
            expiryDate: {
              $lt: date,
            },
          },
        ],
      },
      { $set: { active: false } },
      {
        multi: true,
      }
    );
    console.log(deactivate);
  });

  /**ATTENDANCE REMAINDER CRON JOB DAILY 11 PM Night*/
  cron.schedule('0 23 * * *', async () => {
    const date = new Date();
    const currentDate =
      date.getFullYear() + '-' + appendZero(date.getMonth() + 1) + '-' + appendZero(date.getDate());

    const schdetails = await Schedule.aggregate([
      {
        $unwind: '$days',
      },
      {
        $match: {
          $expr: {
            $and: [
              {
                $eq: ['$days.date', currentDate],
              },
              {
                $eq: ['$days.attendanceMark', false],
              },
            ],
          },
        },
      },
      {
        $addFields: {
          instituteId: {
            $toObjectId: '$instituteId',
          },
        },
      },
      {
        $lookup: {
          from: 'institutes',
          localField: 'instituteId',
          foreignField: '_id',
          as: 'instituteCourse',
        },
      },
      {
        $unwind: '$instituteCourse',
      },
      {
        $addFields: {
          courseId: {
            $toObjectId: '$courseId',
          },
          batchId: {
            $toObjectId: '$batchId',
          },
        },
      },
      {
        $unwind: '$instituteCourse.course',
      },
      {
        $unwind: '$instituteCourse.batch',
      },
      {
        $match: {
          $expr: {
            $and: [
              {
                $eq: ['$instituteCourse.course._id', '$courseId'],
              },
              {
                $eq: ['$instituteCourse.batch._id', '$batchId'],
              },
            ],
          },
        },
      },
      {
        $addFields: {
          'days.teacher': {
            $toObjectId: '$days.teacher',
          },
        },
      },
      {
        $lookup: {
          from: 'employees',
          localField: 'days.teacher',
          foreignField: '_id',
          as: 'teacher',
        },
      },
      {
        $unwind: '$teacher',
      },
      {
        $project: {
          days: 1,
          eduatlasId: '$teacher.eduAtlasId',
          courseName: '$instituteCourse.course.name',
          batchCode: '$instituteCourse.batch.batchCode',
          teacherName: '$teacher.basicDetails.name',
          teacherEmail: '$teacher.basicDetails.employeeEmail',
        },
      },
    ]);
  });
  schdetails.forEach((schedule) => {
    const message = `
      <h3>Attendance Reminder</h3>
      <p>You had taken lecture on ${new Date(schedule.days.date)} of topic ${schedule.days.topic} 
      from ${schedule.days.startTime} to ${schedule.days.endTime} </p>
      <p>Please Mark the Attendance for the same.</p>
      <p>----<br>Eduatlas Team</p>
    `;

    const notification = {
      title: 'Attendance Reminder',
      message: `Please mark Attendance for lecture - ${new Date(schedule.days.date)} of topic ${
        schedule.days.topic
      } from ${schedule.days.startTime} to ${schedule.days.endTime}`,
    };

    const mail = {
      from: process.env.GMAIL_USER,
      to: teacher.basicDetails.employeeEmail,
      subject: `Schedule Reminder from Eduatlas`,
      text: '',
      html: message,
    };
    sendMail(mail);
    notification.receiverId = teacher.eduAtlasId;
    sendNotification(notification);
  });
};

module.exports = dailySchedule;
