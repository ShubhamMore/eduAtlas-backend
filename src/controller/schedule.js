const Schedule = require('../model/schedule.model');
const errorHandler = require('../service/errorHandler');
const schema = require('../service/joi');
const response = require('../service/response');
const Institute = require('../model/institute.model')

exports.addSchedule = async (req, res, next) => {
  try {
    const checkBatch = await Institute.find({
      $and:[{
        _id:req.body.instituteId
      },{
        "course._id":req.body.courseId
      },{
        "batch._id":req.body.batchId
      }]
    })
    if(checkBatch.length == 0){
      const error = new Error("Batch not Found")
      error.statusCode = 400
      throw error;
    }
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
exports.getScheduleByBatch =async (req,res)=>{
  try {
    const batchSchedule = await Schedule.find({
      $and:[
        {
          instituteId:req.body.instituteId
        },
        {
          courseId:req.body.courseId
        },
        {
          batchId:req.body.batchId
        }
      ]
    })

    res.status(200).send(batchSchedule)
  } catch (error) {
    errorHandler(error, res);
  }
}

exports.getSchedule = async (req, res, next) => {
  try {
    const singleSchedule = await Schedule.find({
      _id:req.body.scheduleId
    })
    res.status(200).send(singleSchedule)
  } catch (error) {
    errorHandler(error, res);
  }
};

// exports.deleteSchedule = async (req, res, next) => {
//   try {
//     const scheduleInfo = req.query;

//     if (!scheduleInfo.instituteId || !scheduleInfo.batchCode) {
//       const err = new Error('schedule information not provided');
//       err.statusCode = 400;
//       throw err;
//     }

//     await Schedule.deleteOne({
//       _id:req.body._id
//     });

//     response(res, 200, 'Schedule deleted successfully');
//   } catch (error) {
//     errorHandler(error, res);
//   }
// };
