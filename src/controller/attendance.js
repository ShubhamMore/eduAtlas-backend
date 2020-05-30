const Attendance = require('../model/attendance.model')
const Institute = require('../model/institute.model')
const errorHandler = require('../service/errorHandler')

exports.addAttendance = async(req,res)=>{
    try {
        console.log(req.body)
        const check = await Institute.find({
            $and:[{
                _id:req.body.instituteId
            },{
                "course._id":req.body.courseId
            },{
                "batch._id":req.body.batchId
            }]        
        })

        if(check.length == 0){
            const error = new Error('Batch not Found');
            error.statusCode = 400;
            throw error;
        }

        const addAtt = await Attendance.updateOne({
            $and:[{
                date:req.body.date
            },{
                instituteId:req.body.instituteId    
            },{
                courseId:courseId,
            },{
                batchId:req.body.batchId
            }]
        },
          req.body    
        ,{
            upsert:true
        })
    } catch (error) {
        errorHandler(error, res);
    }
}

exports.getAttendanceByDate = async(req,res)=>{
    try {
        
        console.log(req.body)
        const attendanceRecord = await Attendance.find({
            $and:[{
                date:req.body.date
            },{
                instituteId:req.body.instituteId    
            },{
                courseId:courseId,
            },{
                batchId:req.body.batchId
            }]
        })
        if(attendanceRecord.length == 0){
            const error = new Error('Attendance Record Not Found')
            error.statusCode = 400
            throw error
        }

        res.status(200).send(attendanceRecord)

    } catch (error) {
        errorHandler(error,res)
    }
}



module.exports