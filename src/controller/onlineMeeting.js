const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const Zoomuser = require('../model/zoomCredentials.model')
const Employee = require('../model/employee.model')
const OnlineClass = require('../model/onlineClass.model')

const response = require('../service/response');
const errorHandler = require('../service/errorHandler');

const request = require('request')
const rp = require('request-promise')


exports.addCredentials = async(req,res)=>{
    try {
        const addCrendentials = await Zoomuser.updateOne({
            userId: req.user._id
        },
            req.body,
        {
            upsert:true
        })

        res.status(200).send(req.body)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

exports.getCredentials = async(req,res)=>{
    try {
        const credentials = await Zoomuser.findOne({
            userId:req.user._id
        })
        res.status(200).send(credentials)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

exports.createMeeting = async(req,res)=>{
    try {
        
        const teacher = await Employee.findOne({
            _id:req.body.teacherId
        })
        console.log(req.body)
        //"start_time": "2020-06-02T12:02:00Z"
        let createMeeting = {
            "topic": req.body.topic,
            "type": 2,
            "start_time": req.body.startTime,
            "duration": req.body.duration,
            "schedule_for": null,
            "timezone": "Asia/Calcutta",
            "password": req.body.password,
            "agenda": req.body.agenda,
            "settings": {
                "host_video": false,
                "participant_video": false,
                "cn_meeting": false,
                "in_meeting": true,
                "join_before_host": true,
                "mute_upon_entry": true,
                "watermark": false,
                "use_pmi": false,
                "approval_type": 2,
                "registration_type": 1,
                "audio": "both",
                "alternative_hosts":teacher.basicDetails.employeeEmail,
                "auto_recording": "none",
                "enforce_login": false,
                "enforce_login_domains": null,
                "alternative_hosts": null,
                "global_dial_in_countries": [
                  
                ],
                "registrants_email_notification": false
              }
          }

        var options = {
            method: 'POST',
            url: 'https://api.zoom.us/v2/users/me/meetings',
            headers: {
                'Content-Type': 'application/json',
                authorization:"Bearer " + req.zoom.access_token
             },
             body:createMeeting,
             json:true,
                         
        };

        let meetingDetails = await rp(options)

        let newMeeting = {
            joinUrl:meetingDetails.join_url,
            meetingId: meetingDetails.id,
            startUrl:meetingDetails.start_url,
            startTime:req.body.startTime,
            batchId:req.body.batchId,
            courseId:req.body.courseId,
            instituteId:req.body.instituteId,
            hostId:req.body.teacherId,
            hostName:teacher.basicDetails.name
        }
        const newOnlineClass = new OnlineClass(newMeeting)
        await newOnlineClass.save() 

        res.status(200).send(newOnlineClass)

    } catch (error) {
        console.log(error)
    }
}

exports.getMeetingByBatch = async(req,res)=>{
    try {
        
        const meetings = await OnlineClass.find({
            $and:[
                {
                    instituteId:req.body.instituteId
                },{
                    batchId:req.body.batchId
                }
            ]
        })

        res.status(200).send(meetings)

    } catch (error) {
        res.status(400).send(error)
    }
}

exports.updateMeeting = async(req,res)=>{
    try {
        
        const teacher = await Employee.findOne({
            _id:req.body.teacherId
        })
        let updateMeeting = {
            "topic": req.body.topic,
            "type": 2,
            "start_time": req.body.startTime,
            "duration": req.body.duration,
            "timezone": "Asia/Calcutta",
            "password": req.body.password,
            "agenda": req.body.agenda,
            "settings": {
                "host_video": false,
                "participant_video": false,
                "cn_meeting": false,
                "in_meeting": true,
                "join_before_host": true,
                "mute_upon_entry": true,
                "watermark": false,
                "use_pmi": false,
                "approval_type": 2,
                "registration_type": 1,
                "audio": "both",
                "alternative_hosts":teacher.basicDetails.employeeEmail,
                "auto_recording": "none",
                "enforce_login": false,
                "enforce_login_domains": null,
                "alternative_hosts": null,
                "global_dial_in_countries": [
                  
                ],
                "registrants_email_notification": false
              }
          }
          let  options = {
            method: 'PATCH',
            url: 'https://api.zoom.us/v2/users/me/meetings/'+req.body.meetingId,
            headers: {
                'Content-Type': 'application/json',
                authorization:"Bearer " + req.zoom.access_token
             },
             body:updateMeeting,
             json:true,
                         
        };
        
        let meetingDetails = await rp(options)

        let newMeeting = {
            joinUrl:meetingDetails.join_url,
            meetingId: meetingDetails.id,
            startUrl:meetingDetails.start_url,
            startTime:req.body.startTime,
            batchId:req.body.batchId,
            courseId:req.body.courseId,
            instituteId:req.body.instituteId,
            hostId:req.body.teacherId,
            hostName:teacher.basicDetails.name
        }

        const updatedMeeting = await OnlineClass.updateOne({
            _id:req.body._id
        },newMeeting)
        res.status(200).send(updatedMeeting)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.deleteMeeting = async(req,res)=>{
    try {
        const meeting = await OnlineClass.findOne({
            _id:req.body._id
        })

        if(!meeting){
            throw new Error("No Meeting Found")
        }

        let  options = {
            method: 'DELETE',
            url: 'https://api.zoom.us/v2/users/me/meetings/'+req.body.meetingId,
            headers: {
                'Content-Type': 'application/json',
                authorization:"Bearer " + req.zoom.access_token
             },
                         
        };
        const info = await rp(options)
        res.status(200).send(info)
    } catch (error) {
        res.status(400).send(error)
    }
}