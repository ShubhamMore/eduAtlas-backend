const Forum = require('../model/forum.model')
const Institute = require('../model/institute.model')

const response = require('../service/response');
const errorHandler = require('../service/errorHandler');

exports.addForum = async(req,res)=>{
    try {
        const instituteCheck = await Institute.findOne({
            _id:req.body.instituteId
        })

        if(!instituteCheck){
            const error = new Error("Institute Not available")
            error.statusCode = 400
            throw error
        }

        const newForum = new Forum(req.body)
        await newForum.save()
        res.status(200).res(newForum)
    } catch (error) {
        errorHandler(error,res)
    }
}

exports.getForumsByInstitute = async(req,res)=>{
    try {
        let query = {}
        
        if(!req.body.courseId || !req.body.batchId){
            query = {
                instituteId:req.body.instituteId
            }
        } else {
            query = {
            
                instituteId:req.body.instituteId,
                courseId:req.body.courseId,
                batchId:req.body.batchId
            }
        }
        const listForum = await Forum.find(query)           
    } catch (error) {
        res.status(400).send(error)       
    }
}

exports.addComment = async(req,res)=>{
    try {
        const 
    } catch (error) {
        
    }
}

exports.getSingleForum = async(req,res)=>{
    
}