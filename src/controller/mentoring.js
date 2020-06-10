const Mentoring = require('../model/mentoring.model')
const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const Employee = require('../model/employee.model')

exports.addMentoring = async(req,res)=>{
    try {

        const addMentoring = new Mentoring(req.body)
        await addMentoring.save()
    } catch (error) {
        error.statusCode = 400
        errorHandler(error,res);
        
    }
}

exports.getMentoringByInstitute = async(req,res)=>{
    try {
        const mentoringDetails = await Mentoring.find({
                instituteId:req.body.instituteId 
        })

        if(mentoringDetails.length == 0){
            const error = new Error("Mentoring Details Found")
            error.statusCode = 400
            throw error
        }

        res.status(200).send(mentoringDetails)
    } catch (error) {
        errorHandler(error,res)
    }
}

exports.getMentoringOfStudentByInstitute = async(req,res)=>{
    try {
        const studMentoring = await Mentoring.find({
            $and:[{
                instituteId:req.body.instituteId
            },{
               studentId:req.body.studentId 
            }]
        })

        if(studMentoring.length == 0){
            const error = new Error("Mentoring Details Found")
            error.statusCode = 400
            throw error
        }

        for(var i =0;i<studMentoring.length;i++){
            const teacher = await Employee.findOne({
                _id:studMentoring[i].teacherId
            })

            if(!teacher){
                const error = new Error("Teacher Details Found")
                error.statusCode = 400
                throw error
            }

            studMentoring[i].teacherId = teacher.basicDetails.name
        }

        res.status(200).send(studMentoring)
    } catch (error) {
        errorHandler(error,res)
    }
}

exports.updateMentoring = async