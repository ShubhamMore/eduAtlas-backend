const Announcement = require('../model/announcement.model');
const errorHandler = require('../service/errorHandler');

const awsUploadFile = require('../functions/awsUploadFile');
const awsRemoveFile = require('../functions/awsRemoveFile');

exports.makeAnnouncement = async (req, res) => {
  try {
    let attachment = null;
    if (req.file !== undefined) {
      let filePath = req.file.path;
      let fileName = req.file.filename;
      let fileSize = req.file.size;

      const cloudDirectory = req.body.instituteId + '/announcements';
      const uploadResponce = await awsUploadFile(filePath, fileName, cloudDirectory);

      const upload_res = uploadResponce.upload_res;

      attachment = {
        file_name: upload_res.key
          .split('/')[2]
          .substring(0, upload_res.key.split('/')[2].lastIndexOf('-'))
          .split('-')
          .join(' ')
          .toUpperCase(),

        file_size: fileSize,
        secure_url: upload_res.Location,
        public_id: upload_res.key,
        created_at: Date.now(),
      };
    }

    const announcementData = {
      attachment: attachment,
      instituteId: req.body.instituteId,
      title: req.body.title,
      date: req.body.date,
      text: req.body.text,
      batchCodes: JSON.parse(req.body.batchCodes),
      categories: JSON.parse(req.body.categories),
    };

    const announcement = new Announcement(announcementData);
    await announcement.save();
    res.status(201).json(announcement);
  } catch (error) {
    console.log(error);
    errorHandler(error, res);
  }
};

exports.editAnnouncement = async (req, res) => {
  try {
    let oldAnnouncement = await Announcement.findById(req.body._id);

    let attachment = oldAnnouncement.attachment;
    if (req.file !== undefined) {
      let filePath = req.file.path;
      let fileName = req.file.filename;
      let fileSize = req.file.size;

      const cloudDirectory = req.body.instituteId + '/announcements';
      const uploadResponce = await awsUploadFile(filePath, fileName, cloudDirectory);

      const upload_res = uploadResponce.upload_res;

      if (attachment.public_id) {
        await awsRemoveFile(attachment.public_id);
      }

      attachment = {
        file_name: upload_res.key
          .split('/')[2]
          .substring(0, upload_res.key.split('/')[2].lastIndexOf('-'))
          .split('-')
          .join(' ')
          .toUpperCase(),
        file_size: fileSize,
        secure_url: upload_res.Location,
        public_id: upload_res.key,
        created_at: Date.now(),
      };
    }

    const announcementData = {
      attachment: attachment,
      instituteId: req.body.instituteId,
      title: req.body.title,
      date: req.body.date,
      text: req.body.text,
      batchCodes: JSON.parse(req.body.batchCodes),
      categories: JSON.parse(req.body.categories),
    };

    const updatedInstitute = await Announcement.findByIdAndUpdate(req.body._id, announcementData);

    res.status(201).json(updatedInstitute);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getAnnouncement = async (req, res, next) => {
  try {
    const instituteId = req.body.instituteId;
    const announcements = await Announcement.find({ instituteId });
    res.status(200).json(announcements);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getStudentAnnouncements = async (req, res, next) => {
  try {
    const instituteId = req.body.instituteId;
    const batch = req.body.batch;

    const announcements = await Announcement.find({ instituteId, batchCodes: { $in: [batch] } });
    res.status(200).json(announcements);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.getSingleAnnouncement = async (req, res, next) => {
  try {
    const _id = req.body.id;

    const announcement = await Announcement.findById(_id);
    if (!announcement) {
      throw new Error('Announcement Not Found');
    }
    res.status(200).json(announcement);
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.deleteAnnouncement = async (req, res, next) => {
  try {
    const announcement = await Announcement.findByIdAndDelete(req.body._id);
    if (announcement.attachment.public_id) {
      await awsRemoveFile(announcement.attachment.public_id);
    }

    res.status(200).json({ message: 'Announcement Deleted successfully' });
  } catch (error) {
    errorHandler(error, res);
  }
};
