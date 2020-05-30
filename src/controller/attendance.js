const Attendance = require('../model/attendance.model')
const Institute = require('../model/institute.model')
const errorHandler = require('../service/errorHandler')
const Student = require('../model/student.model')

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
        const attendanceRecord = await Attendance.findOne({
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
        let response = {}
        if(!attendanceRecord){
            const students = await Student.aggregate([
                {
                  $unwind: '$instituteDetails',
                },
                {
                  $match: {
                    'instituteDetails.instituteId': req.body.instituteId,
                    'instituteDetails.courseId': req.body.courseId,
                    'instituteDetails.batchId': req.body.batchId    ,
                  },
                },
              ]);
              response = { students }

        } else {
            let studentDetails = new Array()

            for (var i = 0; i<attendanceRecord.attendance.length;i++){
            
                const search = await Student.aggregate([{
                $unwind:'$instituteDetails'
                },{
                    $match:{
                    "_id":attendanceRecord.days[i].studentId,
                    "instituteDetails.instituteId":attendanceRecord.instituteId,
                    "instituteDetails.courseId":attendanceRecord.courseId,
                    "instituteDetails.batchId":attendanceRecord.batchId
                    }
                }])
                var details = {
                    studentName: search[0].basicDetails.name,
                    rollNo:search[0].instituteDetails.rollNo
                }

                studentDetails.push(details)
            
            }
            response = { attendanceRecord, studentDetails}
        }

        
        res.status(200).send(response)

    } catch (error) {
        errorHandler(error,res)
    }
}



