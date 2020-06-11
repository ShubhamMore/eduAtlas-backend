const Leads = require('../model/leads.model')
const Institute = require('../model/institute.model')
const response = require('../service/response');
const errorHandler = require('../service/errorHandler');

exports.addLead = async (req,res)=>{
    try {
        const checkInsstitute = await Institute.find({})
        const newLead = new Leads(req.body)
        await newLead.save()
        res.status(200).send(newLead)
    } catch (error) {
        res.status(400).send(error)   
    }
}

exports.getLeadsByOfInstitute = async(req,res)=>{
    try {
        let query= {}

        if(!req.body.status && !req.body.courseId) {
            query = {
                instituteId:req.body.instituteId
            }
        } else if(!req.body.status) {
            
            query = {
                instituteId:req.body.instituteId,
                courseId:req.body.courseId
            }
        } else if(!req.body.courseId){
            query = {
                instituteId:req.body.instituteId,
                status:req.body.status
            }
        } else {
            query = {
                instituteId:req.body.instituteId,
                courseId:req.body.courseId,
                status:req.body.status
            } 
        }

        const leads = await Leads.find(query)
        res.status(200).send(leads)
    } catch (error) {
        errorHandler(error,res)   
    }
}

exports.getSingleLead = async(req,res)=>{
    try {
        const lead = await Leads.findOne({
            _id:req.body._id
        })
        res.status(200).send(lead)
    } catch (error) {
        errorHandler(error,res)
    }
}

exports.updateLead = async(req,res)=>{
    try {
        const updateLead = await Leads.updateOne({
            _id:req.body._id
        },req.body)
        res.status(200).send(updateLead)
    } catch (error) {
        
    }
}

exports.deleteLead = async (req,res)=>{
    try {
        const deleteLead = await Leads.deleteOne({
            _id:req.body._id
        })

        res.status(200).send(deleteLead)
    } catch (error) {
        errorHandler(error,res)
    }
}
