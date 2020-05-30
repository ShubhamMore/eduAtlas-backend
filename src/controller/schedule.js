const Schedule = require('../model/schedule.model');
const errorHandler = require('../service/errorHandler');
const schema = require('../service/joi');
const response = require('../service/response');
const Institute = require('../model/institute.model');
const Employee = require('../model/employee.model');

exports.addSchedule = async (req, res, next) => {
  try {
    const checkBatch = await Institute.find({
      $and: [
        {
          _id: req.body.instituteId,
        },
        {
          'course._id': req.body.courseId,
        },
        {
          'batch._id': req.body.batchId,
        },
      ],
    });
    if (checkBatch.length == 0) {
      const error = new Error('Batch not Found');
      error.statusCode = 400;
      throw error;
    }
    const batchSchedule = new Schedule(req.body);

    await batchSchedule.save();

    response(res, 201, 'Schedule added successfully');
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.updateSchedule = async (req, res, next) => {
  try {
    const updatedSchedule = await Schedule.findOneAndUpdate(
      {
        _id: req.body._id,
      },
      { $set: req.body },
      { upsert: true }
    );

    res.status(200).json(updatedSchedule);
  } catch (error) {
    errorHandler(error, res);
  }
};
exports.getScheduleByBatch = async (req, res) => {
  try {
    const batchSchedule = await Schedule.find({
      $and: [
        {
          instituteId: req.body.instituteId,
        },
        {
          courseId: req.body.courseId,
        },
        {
          batchId: req.body.batchId,
        },
      ],
    });

    res.status(200).send(batchSchedule);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getSchedule = async (req, res, next) => {
  try {
    console.log(req.body);
    const singleSchedule = await Schedule.findOne({
      _id: req.body.scheduleId,
    });

    res.status(200).send(singleSchedule);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getScheduleDetails = async (req, res) => {
  try {
    console.log(req.body);
    let singleSchedule = await Schedule.findOne({
      _id: req.body.scheduleId,
    });
    let schdeduleDetails = req.body;

    const courseDetails = await Institute.findOne(
      {
        $and: [
          {
            _id: singleSchedule.instituteId,
          },
          {
            'course._id': singleSchedule.courseId,
          },
          {
            'batch._id': singleSchedule.batchId,
          },
        ],
      },
      {
        course: 1,
        batch: 1,
      }
    );
    console.log(courseDetails);
    if (courseDetails.length == 0) {
      const error = new Error('Batch not found');
      error.statusCode = 400;
      throw error;
    }
    singleSchedule.courseId = courseDetails.course[0].name;
    singleSchedule.batchId = courseDetails.batch[0].batchCode;

    for (var i = 0; i < singleSchedule.days.length; i++) {
      const teacherInfo = await Employee.findOne({
        _id: singleSchedule.days[i].teacher,
      });
      singleSchedule.days[i].teacher = teacherInfo.basicDetails.name;
    }
    res.status(200).send(singleSchedule);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.deleteSchedule = async (req, res, next) => {
  try {
    await Schedule.deleteOne({
      _id: req.body.scheduleId,
    });

    res.status(200).send({ msg: 'Schedule Deleted Successfully' });
  } catch (error) {
    errorHandler(error, res);
  }
};
