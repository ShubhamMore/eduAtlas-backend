const Schedule = require('../model/schedule.model');
const errorHandler = require('../service/errorHandler');
const schema = require('../service/joi');
const response = require('../service/response');

exports.addSchedule = async (req, res, next) => {
  try {
    
    // if(check.length != 0){
    // }
    const batchSchedule = new Schedule(req.body);

    await batchSchedule.save()

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

exports.getSchedule = async (req, res, next) => {
  try {
    const instituteId = req.query.instituteId;
    const many = req.query.many;
    if (!many || !instituteId) {
      const err = new Error('"many" and(or) "instituteId" query parameter not provided');
      err.statusCode = 400;
      throw err;
    }

    if (many == true) {
      const schedules = await Schedule.aggregate([
        {
          $lookup: {
            from: 'institutes',
            localField: 'batchCode',
            foreignField: 'batch.batchCode',
            as: 'institute',
          },
        },
        {
          $project: {
            _id: 1,
            recurrence: 1,
            letter: 1,
            instituteId: 1,
            scheduleStart: 1,
            scheduleEnd: 1,
            batchCode: 1,
            topic: 1,
            teacher: 1,
            'institute.batch': 1,
          },
        },
      ]);

      res.status(200).json(schedules);
    } else {
      const batchCode = req.query.batchCode;
      if (!batchCode) {
        const err = new Error('"batchCode" query parameter not provided');
        err.statusCode = 400;
        throw err;
      }

      const schedule = await Schedule.aggregate([
        { $match: { batchCode: batchCode } },
        {
          $lookup: {
            from: 'institutes',
            localField: 'batchCode',
            foreignField: 'batch.batchCode',
            as: 'institute',
          },
        },
        {
          $project: {
            _id: 1,
            recurrence: 1,
            letter: 1,
            instituteId: 1,
            scheduleStart: 1,
            scheduleEnd: 1,
            batchCode: 1,
            topic: 1,
            teacher: 1,
            'institute.batch': 1,
          },
        },
      ]);

      res.status(200).json(schedule);
    }
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.deleteSchedule = async (req, res, next) => {
  try {
    const scheduleInfo = req.query;

    if (!scheduleInfo.instituteId || !scheduleInfo.batchCode) {
      const err = new Error('schedule information not provided');
      err.statusCode = 400;
      throw err;
    }

    await Schedule.deleteOne({
      _id:req.body._id
    });

    response(res, 200, 'Schedule deleted successfully');
  } catch (error) {
    errorHandler(error, res);
  }
};
