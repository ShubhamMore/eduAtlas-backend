const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const OnlineClassLink = require('../model/onlineClassLink.model');
const Student = require('../model/student.model');
const Institute = require('../model/institute.model');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');
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

    const studentlist = await Student.aggregate([
      {
        $unwind: '$instituteDetails',
      },
      {
        $match: {
          $expr: {
            $and: [
              {
                $eq: ['$instituteDetails.instituteId', req.body.instituteId],
              },
              {
                $eq: ['$instituteDetails.courseId', req.body.courseId],
              },
              {
                $eq: ['$instituteDetails.batchId', req.body.batchId],
              },
            ],
          },
        },
      },
      {
        $project: {
          eduAtlasId: '$eduAtlasId',
        },
      },
    ]);

    const instituteDetails = await Institute.aggregate([
      {
        $unwind: '$course',
      },
      {
        $unwind: '$batch',
      },
      {
        $match: {
          $expr: {
            $and: [
              {
                $eq: ['$_id', mongoose.Types.ObjectId(req.body.instituteId)],
              },
              {
                $eq: ['$course._id', mongoose.Types.ObjectId(req.body.courseId)],
              },
              {
                $eq: ['$batch._id', mongoose.Types.ObjectId(req.body.batchId)],
              },
            ],
          },
        },
      },
      {
        $project: {
          courseName: '$course.name',
          batchCode: '$batch.batchCode',
        },
      },
    ]);

    studentlist.forEach((student) => {
      const notification = {
        title: 'New Online Lecture Scheduled',
        message: `Online Lecture has been scheduled on ${new Date(req.body.date)} for course ${
          instituteDetails.courseName
        } from ${req.body.fromTime} on TOPIC ${req.body.topic}`,
      };
      notification.receiverId = student.eduAtlasId;
      sendNotification(notification);
    });
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
    const institute = await Institute.findById(req.body.instituteId);
    let storageUsed = +institute.storageUsed;

    // upload file code here

    const file = req.file;

    if (!file) {
      throw new Error('File Not Available');
    }

    let filePath = file.path;
    let fileName = file.filename;
    let fileSize = file.size;

    const cloudDirectory = req.body.instituteId + '/recordings';
    const uploadResponce = await awsUploadFile(filePath, fileName, cloudDirectory);

    const upload_res = uploadResponce.upload_res;

    const recording = {
      _id: new ObjectId(),
      fileName: upload_res.key
        .split('/')[2]
        .substring(0, upload_res.key.split('/')[2].lastIndexOf('-'))
        .split('-')
        .join(' ')
        .toUpperCase(),
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
      storageUsed = storageUsed + recording.fileSize;

      await Institute.findByIdAndUpdate(institute._id, { storageUsed });

      return res.status(200).send(recording);
    } else {
      await awsRemoveFile(recording.publicId);
      throw Error('Recording Uploading Failed');
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.deleteRecording = async (req, res) => {
  try {
    console.log(req.body);

    const institute = await Institute.findById(req.body.instituteId);
    let storageUsed = +institute.storageUsed;

    const onlineClassLink = await OnlineClassLink.findById(req.body._id);

    if (!onlineClassLink) {
      throw new Error('Online Meeting Not Found');
    }

    const index = onlineClassLink.recordings.findIndex(
      (recording) => recording._id == req.body.recordingId
    );
    console.log(index);

    if (index < 0) {
      throw new Error('Recording Not Found');
    }

    const recording = onlineClassLink.recordings[index];

    await awsRemoveFile(recording.publicId);

    onlineClassLink.recordings.splice(index, 1);

    await onlineClassLink.save();

    storageUsed = storageUsed - +recording.fileSize;

    await Institute.findByIdAndUpdate(institute._id, { storageUsed });

    res.status(200).send({ success: true });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
