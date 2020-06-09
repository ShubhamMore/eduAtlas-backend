const Test = require('../model/test.model')

const response = require('../service/response');
const errorHandler = require('../service/errorHandler');

const request = require('request');
const rp = require('request-promise');

exports.addTest = async(req,res)=>{
    try {
        const addTest = new Test(req.body)
        await addTest.save()
        res.status(200).send(addTest)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.getTestByBatch = async(req,res)=>{
    try {
        const batchTest = await Test.find({
            courseId:req.body.courseId,
            batchId:req.body.batchId
        })

        if(batchTest.length == 0){
            throw new Error('No Test Found')
        }

        res.status(200).send(batchTest)
    } catch (error) {
        res.status(400).send(error)
    }
}
