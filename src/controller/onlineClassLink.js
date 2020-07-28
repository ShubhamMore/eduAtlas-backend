const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const OnlineClassLink = require('../model/onlineClassLink.model');
const mongoose = require('mongoose');

const awsUploadFile = require('../functions/awsUploadFile');
const awsRemoveFile = require('../functions/awsRemoveFile');

exports.getAllMeetingLinks = async (req, res) => {
  try {
    const onlineMeetingLinks = await OnlineClassLink.find({ instituteId: req.body.instituteId });

    res.status(200).send(onlineMeetingLinks);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteMeetingLink = async (req, res) => {
  try {
    const onlineMeetingLink = await OnlineClassLink.findByIdAndDelete(req.body._id);

    if (!onlineMeetingLink) {
      throw new Error('Meeting Not Found');
    }

    onlineMeetingLink.recordings.forEach(async (recording) => {
      // Delete S3 Bucket Recording here
      await awsRemoveFile(recording.publicId);
    });

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateMeetingLink = async (req, res) => {
  try {
    const onlineMeetingLink = await OnlineClassLink.findByIdAndUpdate(req.body._id, req.body);

    if (!onlineMeetingLink) {
      throw new Error('Meeting Not Found');
    }

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createMeetingLink = async (req, res) => {
  try {
    const onlineMeetingLink = new OnlineClassLink(req.body);

    await onlineMeetingLink.save();

    res.status(200).send(onlineMeetingLink);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.getOneMeetingLink = async (req, res) => {
  try {
    const onlineMeetingLink = await OnlineClassLink.findById(req.body._id);

    if (!onlineMeetingLink) {
      throw new Error('Meeting Not Found');
    }

    res.status(200).send(onlineMeetingLink);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getMeetingLinks = async (req, res) => {
  try {
    const date = new Date();
    const currentDate =
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      date.getDate().toString().padStart(2, '0');

    const query = {
      instituteId: req.body.instituteId,
    };

    if (req.body.courseId) {
      query.courseId = req.body.courseId;
    }

    if (req.body.batchId) {
      query.batchId = req.body.batchId;
    }

    const upcomingMeetings = await OnlineClassLink.find({
      ...query,
      date: { $gte: currentDate },
    });

    const previousMeetings = await OnlineClassLink.find({
      ...query,
      date: { $lt: currentDate },
    });

    res.status(200).send({ upcomingMeetings, previousMeetings });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.addRecording = async (req, res) => {
  try {
    // upload file code here

    const file = req.file;

    if (!file) {
      throw new Error('File Not Available');
    }

    let filePath = file.path;
    let fileName = file.filename;
    let fileSize = file.size;

    const cloudDirectory = req.body.InstituteId + '/recordings';
    const uploadResponce = await awsUploadFile(filePath, fileName, cloudDirectory);

    const upload_res = uploadResponce.upload_res;

    const recording = {
      fileName: upload_res.key.split('/')[1],
      fileSize,
      secureUrl: upload_res.Location,
      publicId: upload_res.key,
      createdAt: Date.now(),
    };

    const updateOnlineClassLink = await OnlineClassLink.updateOne(
      {
        _id: req.body._id,
      },
      { $push: { recordings: recording } }
    );

    if (updateOnlineClassLink.nModified > 0) {
      return res.status(200).send(recording);
    } else {
      throw Error('');
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.deleteRecording = async (req, res) => {
  try {
    const onlineClassLink = await OnlineClassLink.findById(req.body._id);

    if (!onlineClassLink) {
      throw new Error('Online Meeting Not Found');
    }

    const index = onlineClassLink.recordings.findIndex(
      (recording) => recording._id === recordingId
    );

    if (index < 0) {
      throw new Error('Recording Not Found');
    }

    await awsRemoveFile(onlineClassLink.recordings[index].publicId);

    onlineClassLink.recordings.splice(index, 1);

    await onlineClassLink.save();

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).send(error);
  }
};
