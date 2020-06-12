const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const Fee = require('../model/fee.model');
const Lead = require('../model/leads.model')
const mongoose = require('mongoose');
const OnlineClass = require('../model/onlineClass.model');
const Leads = require('../model/leads.model');
const errorHandler = require('../service/errorHandler');
exports.getDashboardInfo = async (req,res)=>{
    try {
        
        query.instituteId = req.body.instituteId 
        if(req.body.task == "upcomingClass") {
            const currentTime = new Date().getTime() / 1000;
            const year = new Date().getFullYear() + "" ;
            const month = new Date().getMonth() + "";
            const day = new Date().getDate() + ""
            const date = new RegExp('.*' + year + '-' + month + '.*' +day+ '.*');
            query.date = date 
            data = await OnlineClass.find(query)
        }else if(req.body.task == "pendingFees"){
            
            const pendingFees = await Fee.find({
                instituteId:req.body.instituteId,
                pendingAmount:{
                    $ne:"0"
                  }
            })

            if(pendingFees.length == 0){
                const error = new Error("No Pending Fees")
                error.statusCode = 202
                throw error
            }
                for(var i = 0 ; i < pendingFees.length ; i++ ){
                    const student = await Student.findOne({
                        _id:pendingFees[i].studentId    
                    })
                
                    pendingFees[i].studentName = student.basicDetails.name
                
                    const course = await Institute.aggregate([{
                            $unwind:"$course"
                        },{
                            $match:{
                                _id:pendingFees[i].instituteId,
                                "course._id":pendingFees[i].courseId
                            }
                        }
                    ])
                    pendingFees[i].courseName = course[0].course.name
            }
            data = pendingFees
        }else if(req.body.task == "follow-up") {
            const leads = await Leads.find({
                status: {
                    $in:["Contacted","Pending"]
                }
            })
            data = leads
        }

        res.status(200).send(data)
    } catch (error) {
        errorHandler(error,res)
    }
}