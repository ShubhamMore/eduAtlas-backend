const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const Fee = require('../model/fee.model');
const Lead = require('../model/leads.model')
const mongoose = require('mongoose')
exports.getDashboardInfo = async (req,res)=>{
    try {
        if(req.body.task == "upcomingClass"){
            const currentTime = new Date().getTime() / 1000;
            const date = new RegExp('.*' + req.body.year + '-' + req.body.month + '.*' +day+ '.*');
        }else if(req.body.task == "pendingFees"){

        }else if(req.body.task == "follow-up") {

        }
        const dashboardInfo = await Institute.aggregate([
            {
                $match:{
                    _id:mongoose.Types.ObjectId(req.body.instituteId)
                }
            }
        ])
    } catch (error) {
        
    }
}