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

        const addAtt = new Attendance(req.body)
        await addAtt.save()
    } catch (error) {
        errorHandler(error, res);
    }
}

exports.getAttendanceByDate = async(req,res)=>{
    try {
        
        console.log(req.body)
        const attendanceRecord = await Attendance.find({
            $and:[{
                date:req
            }]
        })

    } catch (error) {
        
    }
}

module.exports