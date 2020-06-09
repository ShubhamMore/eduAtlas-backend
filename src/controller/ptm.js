const Ptm = require('../model/ptm.model')
const Institute = require('../model/institute.model')
const errorHandler = require('../service/errorHandler');
const response = require('../service/response');
const mongoose = require('mongoose');


exports.addPtm = async(req,res)=>{
    try {
        const batch = await Institute.findOne({
            $and:[{
                _id:req.body.instituteId
            },{
                "batch._id":req.body.batchId
            },{
                "batch.course":req.body.courseId
            }]
        })

        if(!batch){
            const error = new Error('Batch not Found');
            error.statusCode = 400;
            throw error;
        }
        const newPtm = new Ptm(req.body)
        await newPtm.save()
        res.status(200).send(newPtm)
    } catch (error) {
        errorHandler(error, res);

    }
}
exports.getPtmOfInstitutes = async(req,res)=>{
    try {
        const ptm = await Ptm.find({
            instituteId:req.body.instituteId
        })

        for(var i =0 ; i <ptm.length ; i++){
            const institute = await Institute.aggregate([
                {
                    $unwind:"$batch"
                },{
                    $unwind:"$course"
                },{
                    $match:{
                        _id:mongoose.Types.ObjectId(ptm[i].instituteId) ,
                        "batch._id":mongoose.Types.ObjectId(ptm[i].batchId),
                        "course._id":mongoose.Types.ObjectId(ptm[i].courseId),
                        "batch.course":ptm[i].courseId
                    }                
            }])
            ptm[i].batchId = institute[0].batch.batchCode,
            ptm[i].courseId = institute[0].course.name

        }
        res.status(200).send(ptm)
    } catch (error) {
        res.status(400).send(error)
    }
}
exports.getPtmByInstitute = async(req,res)=>{
    try {
        const ptm = await Ptm.find({
            instituteId:req.body.instituteId
        })
        res.status(200).send(ptm)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.getPtmByBatch = async(req,res)=>{
    try {
        const ptm = await Ptm.find({
            $and:[{
                instituteId:req.body.instituteId
            },{
                courseId:req.body.courseId
            },{
                batchId:req.body.batchId
            }]
        })

        res.status(200).send(ptm)
    } catch (error) {
       res.status(400).send(error) 
    }
}

exports.getSinglePtm = async(req,res)=>{
    try {
        const singlePtm = await Ptm.findOne({
            _id:req.body._id
        })
        res.status(200).send(singlePtm)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.updatePtm = async(req,res)=>{
    try {
        const updatePtm = await Ptm.updateOne({
            _id:req.body._id
        },req.body)

        res.status(200).send(updatePtm)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.deletePtm = async(req,res)=>{
    try {
        const deletePtm = await Ptm.deleteOne({
            _id:req.body._id
        })

        res.status(200).send(deletePtm)
    } catch (error) {
        res.status(400).send(error)
    }
}