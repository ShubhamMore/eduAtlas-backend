const Institute = require('../model/institute.model');
const Student = require('../model/student.model');
const Zoomuser = require('../model/zoomCredentials.model');
const Employee = require('../model/employee.model');
const OnlineClass = require('../model/onlineClass.model');

const response = require('../service/response');
const errorHandler = require('../service/errorHandler');

const request = require('request');
const rp = require('request-promise');

exports.addCredentials = async (req, res) => {
  try {
    const addCrendentials = await Zoomuser.updateOne(
      {
        userId: req.user._id,
      },
      req.body,
      {
        upsert: true,
      }
    );

    res.status(200).send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getCredentials = async (req, res) => {
  try {
    const credentials = await Zoomuser.findOne({
      userId: req.user._id,
    });
    res.status(200).send(credentials);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createMeeting = async (req, res) => {
  try {
    const teacher = await Employee.findOne({
      _id: req.body.teacherId,
    });

    //"start_time": "2020-06-02T12:02:00Z"
    let createMeeting = {
      topic: req.body.topic,
      type: 2,
      start_time: req.body.startTime,
      duration: req.body.duration,
      schedule_for: null,
      timezone: 'Asia/Calcutta',
      password: req.body.password,
      agenda: req.body.agenda,
      settings: {
        host_video: false,
        participant_video: false,
        cn_meeting: false,
        in_meeting: true,
        join_before_host: true,
        mute_upon_entry: true,
        watermark: false,
        use_pmi: false,
        approval_type: 2,
        registration_type: 1,
        audio: 'both',
        alternative_hosts: teacher.basicDetails.employeeEmail,
        auto_recording: 'cloud',
        enforce_login: false,
        enforce_login_domains: null,
        alternative_hosts: null,
        global_dial_in_countries: [],
        registrants_email_notification: false,
      },
    };

    var options = {
      method: 'POST',
      url: 'https://api.zoom.us/v2/users/me/meetings',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + req.zoom.access_token,
      },
      body: createMeeting,
      json: true,
    };

    let meetingDetails = await rp(options);

    let newMeeting = {
      topic: req.body.topic,
      duration: req.body.duration,
      password: req.body.password,
      agenda: req.body.agenda,
      joinUrl: meetingDetails.join_url,
      meetingId: meetingDetails.id,
      startUrl: meetingDetails.start_url,
      startTime: req.body.startTime,
      batchId: req.body.batchId,
      courseId: req.body.courseId,
      instituteId: req.body.instituteId,
      hostId: req.body.teacherId,
      hostEmail: teacher.basicDetails.employeeEmail,
      hostName: teacher.basicDetails.name,
    };
    const newOnlineClass = new OnlineClass(newMeeting);
    await newOnlineClass.save();

    res.status(200).send(newOnlineClass);
  } catch (error) {}
};

exports.getMeetingsFromZoom = async (req, res) => {
  try {
    var options = {
      method: 'GET',
      url: 'https://api.zoom.us/v2/users/me/meetings',
      qs: {
        type: req.body.type,
      },
      headers: {
        authorization: 'Bearer ' + req.zoom.access_token,
      },
    };

    let listMeetings = await rp(options);
    listMeetings = JSON.parse(listMeetings);
    let getMeetings = new Array();
    for (var i = 0; i < listMeetings.meetings.length; i++) {
      const meetings = await OnlineClass.findOne({
        instituteId: req.body.instituteId,
        batchId: req.body.batchId,
        meetingId: listMeetings.meetings[i].id,
      });

      if (meetings) {
        getMeetings.push(meetings);
      }
    }
    res.status(200).send(getMeetings);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllMeetings = async (req, res) => {
  try {
    const meetings = await OnlineClass.find();

    res.status(200).send(meetings);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getMeetingByBatch = async (req, res) => {
  try {
    const meetings = await OnlineClass.find({
      $and: [
        {
          instituteId: req.body.instituteId,
        },
        {
          batchId: req.body.batchId,
        },
      ],
    });

    res.status(200).send(meetings);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.notifyMeeting = async (req, res) => {
  try {
    const meeting = await OnlineClass.findById(req.body.id);
    if (!meeting) {
      throw new Error('Meeting Not Found');
    }
    res.status(200).send(meeting);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getOneMeeting = async (req, res) => {
  try {
    const meeting = await OnlineClass.findById(req.body.id);
    if (!meeting) {
      throw new Error('Meeting Not Found');
    }
    res.status(200).send(meeting);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateMeeting = async (req, res) => {
  try {
    const teacher = await Employee.findOne({
      _id: req.body.teacherId,
    });

    let updateMeeting = {
      topic: req.body.topic,
      type: 2,
      start_time: req.body.startTime,
      duration: req.body.duration,
      timezone: 'Asia/Calcutta',
      password: req.body.password,
      agenda: req.body.agenda,
      settings: {
        host_video: false,
        participant_video: false,
        cn_meeting: false,
        in_meeting: true,
        join_before_host: true,
        mute_upon_entry: true,
        watermark: false,
        use_pmi: false,
        approval_type: 2,
        registration_type: 1,
        audio: 'both',
        alternative_hosts: teacher.basicDetails.employeeEmail,
        auto_recording: 'none',
        enforce_login: false,
        enforce_login_domains: null,
        alternative_hosts: null,
        global_dial_in_countries: [],
        registrants_email_notification: false,
      },
    };

    //

    // let tempOptions = {
    //     method: 'GET',
    //     url: 'https://api.zoom.us/v2/meetings/' + req.body.meetingId,
    //     headers: {
    //       'content-type': 'application/json',
    //       authorization: 'Bearer ' + req.zoom.access_token,
    //     }
    // }

    // let getMeeting = await rp(tempOptions)
    //
    let options = {
      method: 'PATCH',
      url: 'https://api.zoom.us/v2/meetings/' + req.body.meetingId,
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer ' + req.zoom.access_token,
      },
      body: updateMeeting,
      json: true,
    };
    //
    let meetingDetails = await rp(options);

    // let newMeeting = {
    //   topic: req.body.topic,
    //   duration: req.body.duration,
    //   password: req.body.password,
    //   agenda: req.body.agenda,
    //   startTime: req.body.startTime,
    //   batchId: req.body.batchId,
    //   courseId: req.body.courseId,
    //   instituteId: req.body.instituteId,
    //   hostId: req.body.teacherId,
    //   hostEmail: teacher.basicDetails.employeeEmail,
    //   hostName: teacher.basicDetails.name,
    // };

    const updatedMeeting = await OnlineClass.updateOne(
      {
        _id: req.body._id,
      },
      {
        $set: {
          topic: req.body.topic,
          duration: req.body.duration,
          password: req.body.password,
          agenda: req.body.agenda,
          startTime: req.body.startTime,
          batchId: req.body.batchId,
          courseId: req.body.courseId,
          instituteId: req.body.instituteId,
          hostId: req.body.teacherId,
          hostEmail: teacher.basicDetails.employeeEmail,
          hostName: teacher.basicDetails.name,
        },
      }
    );
    res.status(200).send(updatedMeeting);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteMeeting = async (req, res) => {
  try {
    const meeting = await OnlineClass.findOne({
      _id: req.body._id,
    });

    if (!meeting) {
      throw new Error('No Meeting Found');
    }

    let options = {
      method: 'DELETE',
      url: 'https://api.zoom.us/v2/meetings/' + meeting.meetingId,
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + req.zoom.access_token,
      },
    };
    const info = await rp(options);

    const deletedMeeting = await OnlineClass.deleteOne({
      _id: req.body._id,
    });
    res.status(200).send(deletedMeeting);
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.listAllRecordedMeetings = async (req, res) => {
  try {
    var options = {
      method: 'GET',
      url: 'https://api.zoom.us/v2/users/me/recordings',
      port: null,
      headers: {
        authorization: 'Bearer ' + req.zoom.access_token,
      },
    };

    let meetings = await rp(options);
    let recMeetings = [];

    if (meetings) {
      for (var i = 0; i < meetings.meetings.length; i++) {
        const meeting = await OnlineClass.findOne({
          $and: [{ instituteId: req.body.instituteId }, { meetingId: meetings.meetings[i].id }],
        });

        if (meeting) {
          recMeetings.push(meeting);
        }
      }
    }
    res.status(200).send(recMeetings);
  } catch (error) {
    errorHandler(error, res);
  }
};
exports.getRecordedMeeting = async (req, res) => {
  try {
    var options = {
      method: 'GET',
      url: 'https://api.zoom.us/v2/meetings/' + req.body.meetingId + '/recordings',
      port: null,
      headers: {
        authorization: 'Bearer ' + req.zoom.access_token,
      },
    };
    let recMeeting = await rp(options);
    res.status(200).send(recMeeting);
  } catch (error) {
    errorHandler(error, res);
  }
};
