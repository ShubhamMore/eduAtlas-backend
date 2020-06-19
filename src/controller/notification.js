const response = require('../service/response');
const errorHandler = require('../service/errorHandler');
const Notification = require('../model/notification.model');

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findOne(
      { eduatlasId: req.user.eduAtlasId },
      { _id: 0, notifications: 1 }
    );

    if (!notifications) {
      notifications.sort((msg1, msg2) => {
        const msg1Id = msg1._id;
        const msg2Id = msg2._id;
        if (msg1Id > msg2Id) {
          return -1;
        } else {
          return 1;
        }
      });
    } else {
      notifications = [];
    }

    res.status(200).send(notifications);
  } catch (error) {
    error.statusCode = 400;
    errorHandler(error, res);
  }
};

exports.deleteNotification = async (req, res) => {
  try {
    const deleteNotification = await Notification.findOneAndUpdate(
      { eduatlasId: req.user.eduAtlasId },
      { $pull: { notifications: { _id: notificationId } } },
      { new: true }
    );

    res.status(200).send(deleteNotification);
  } catch (error) {
    res.status(400).send(error);
  }
};
