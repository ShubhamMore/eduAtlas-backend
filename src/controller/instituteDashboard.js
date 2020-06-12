const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const Fee = require('../model/fee.model');
const Lead = require('../model/leads.model')
const mongoose = require('mongoose');
const OnlineClass = require('../model/onlineClass.model');
exports.getDashboardInfo = async (req,res)=>{
    try {
        let query = {}
        query.instituteId = req.body.instituteId 
        if(req.body.task == "upcomingClass") {
            const currentTime = new Date().getTime() / 1000;
            const year = new Date().getFullYear() + "" ;
            const month = new Date().getMonth() + "";
            const day = new Date().getDate() + ""
            const date = new RegExp('.*' + year + '-' + month + '.*' +day+ '.*');
            query.date = date 
            const upcomingClasses = await OnlineClass.find(query)
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