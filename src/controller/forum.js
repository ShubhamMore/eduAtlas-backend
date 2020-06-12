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
        res.status(200).send(newForum)
    } catch (error) {
        errorHandler(error,res)
    }
}

exports.getForumsByInstitute = async(req,res)=>{
    try {
        let query = {}
        
        if(!req.body.courseId){
            query = {
                instituteId:req.body.instituteId
            }
        } else {
            query = {    
                instituteId:req.body.instituteId,
                courseId:req.body.courseId,
            }
        }
        const listForum = await Forum.find(query)           
    } catch (error) {
        res.status(400).send(error)       
    }
}
exports.getMyForum = async(req,res)=>{
    try {
        const myForums = await Forum.find({
            createdBy: req.body.createdBy
        })

        res.status(200).send(myForums)
    } catch (error) {
        errorHandler(error,res)
    }
}

exports.getSingleForum = async(req,res)=>{
    try {
        const singleForum = await Forum.findOne({
            _id:req.body._id
        })

        res.status(200).send(singleForum)
    } catch (error) {
        errorHandler(error,res)
    }
}

exports.addComment = async(req,res)=>{
    try {
        const comment = await Forum.updateOne({
            _id:req.body._id
        },{
            $push:{
                comments: req.body.comment
            }
        })
        if(comment.ok == 0){
            const error = new Error("Comment was not added")
            error.statusCode = 202
            throw error
        }

        res.status(200).send(comment)

    } catch (error) {
        errorHandler(error,res)
    }
}

exports.updateForum = async(req,res)=>{
    try {
        const updateForum = await Forum.updateOne({
            _id:req.body._id
        },req.body)

        if(updateForum.ok == 0){
            const error = new Error("Forum was not added")
            error.statusCode = 202
            throw error
        }

        res.status(200).send(updateForum)

    } catch (error) {
        errorHandler(error,res)

    }
}

exports.deleteForum = async(req,res)=>{
    try {
        const deleteForum = await Forum.deleteOne({
            _id:req.body._id
        })
        res.status(200).send(deleteForum)
    } catch (error) {
        errorHandler(error,res)
    }
    
}

exports.deleteComment = async(req,res)=>{
    try {
        let query={}
        if(!req.body.comment_id){
           query = {
                _id:req.body._id
            } 
        } else{
            query = [{
                    id:req.body._id
                },{
                    $pull:{
                        comments:{
                            _id:req.body.commentId
                        }
                        
                    }
                }
            ]
        }

        const deleteQuery = await Forum.updateOne(query)
    } catch (error) {
        errorHandler(error,res)   
    }
}