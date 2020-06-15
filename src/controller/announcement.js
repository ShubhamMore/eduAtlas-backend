const Announcement = require('../model/announcement.model');
const errorHandler = require('../service/errorHandler');

exports.makeAnnouncement = async (req, res) => {
  console.log(req.file);
  try {
    let attachment = null;
    if (req.file !== undefined) {
      console.log('sssss');
      const fileURL = {
        filePath: req.file.path,
        fileName: `${req.file.filename.substring(
          0,
          req.file.filename.lastIndexOf('-')
        )}.${req.file.filename.substring(req.file.filename.lastIndexOf('.') + 1)}`,
      };
      attachment = {
        file_name: fileURL.fileName,
        secure_url: process.env.SERVER + fileURL.filePath,
        public_id: fileURL.filePath,
        created_at: Date.now(),
      };
    }

    const announcementData = {
      attachment: attachment,
      instituteId: req.body.instituteId,
      title: req.body.title,
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

exports.getAnnouncement = async (req, res, next) => {
  try {
    const instituteId = req.body.instituteId;
    const announcements = await Announcement.find({ instituteId });
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
    await Announcement.deleteOne({
      _id: req.body._id,
    });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (error) {
    errorHandler(error, res);
  }
};
