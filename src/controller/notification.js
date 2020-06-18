const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const Notification = require('../model/notification.model');

exports.getNotifications = async (req, res) => {
  try {
    const notification = await Notification.find({ eduatlasId: req.body.eduAtlasId });
    res.status(200).send(notification.notifications);
  } catch (error) {
    error.statusCode = 400;
    errorHandler(error, res);
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    const deleteNotification = await Notification.findOneAndUpdate(
      { eduatlasId: req.body.eduAtlasId },
      { $pull: { notifications: { _id: notificationId } } },
      { new: true }
    );

    res.status(200).send(deleteNotification);
  } catch (error) {
    res.status(400).send(error);
  }
};
