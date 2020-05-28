const errorHandler = require('../service/errorHandler');
const User = require('../model/user.model');
const EduAtlasId = require('../model/eduatlasId.model');
const Institute = require('../model/institute.model')
const Student = require('../model/schedule.model');
const Fee = require('../model/fee.model')


exports.addFee = async (req,res)=>{
    try {
        const checkStudent = await Student.findOne({
            $and:[{
                studentId:req.body.studentId
            },{
                'instituteDetails.instituteId':req.body.instituteId
            },{
                'instituteDetails.courseId':req.body.courseId
            }]
        })

        if(!checkStudent){
            const error = new Error('Course for Student doesnt exists');
            //error.prototype.statusCode = 400;
            throw error;
        }

        const fee = new Fee(req.body)
        await fee.save()
    } catch (error) {
        response(res, 500, error.message);

    }
}

exports.getFeeOfStudent= async(req,res)=>{
    try {
        const studentFee = await Fee.find({
            studentId:req.body.studentId
        })

        if(studentFee.length == 0){
            const error = new Error('No Student Fee Available');
            error.statusCode = 400;
            throw error;
        }

        res.status(200).send(studentFee)
    } catch (error) {
        
    }
}
exports.getFeeOfStudentByCourse = async(req,res)=>{
    try {
        const studentCourseFee = await Fee.find({
            studentId:req.body.studentId,
            instituteId:req.body.instituteId,
            courseId:req.body.courseId
        })

        res.status(200).send(studentCourseFee)
    } catch (error) {
        res.status(400).send(error)
    }
}


exports.updateFeeOfStudent = async(req,res)=>{
    try {
        
        const updateFee = await Fee.updateOne({
            $and:[{
                _id:req.body.feeId
            },{
                'installments.installmentId':req.body.installment._id
            }]
        },{
            $set:{
                installments:req.body.installments
            }
        })

        res.status(200).send(updateFee)
    } catch (error) {
        
    }
}