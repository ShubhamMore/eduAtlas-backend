const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const Zoomuser = require('../model/zoomCredentials.model')
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

exports.createMeeting = async(req,res)=>{
    try {

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
              "host_video": true,
              "participant_video": true,
              "cn_meeting": false,
              "in_meeting": true,
              "join_before_host": true,
              "mute_upon_entry": true,
              "watermark": false,
              "use_pmi": false,
              "approval_type": 2,
              "registration_type": 1,
              "audio": "both",
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
                authorization:"Bearer " + user.access_token
             },
             body:createMeeting,
             json:true,
             
            
          };

          let meetingDetails = await rp(options)

          let newMeeting = {
            joinUrl:meetingDetails.join_url,
            meetingId: meetingDetails.id,
            startUrl:meetingDetails.startUrl

          }
    } catch (error) {
        console.log(error)
    }
}