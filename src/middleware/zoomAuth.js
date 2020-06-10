const Zoomuser = require('../model/zoomCredentials.model');

const zoomAuth = async (req, res, next) => {
  try {
    const user = await Zoomuser.findOne({
      userId: req.body.userId,
    });
    const redirectURL =
      process.env.ZOOM_REDIRECT_URL + '/institute/zoom/generateZoomAuthToken?userId=' + user.userId;
    const authLink =
      'https://zoom.us/oauth/authorize?response_type=code&client_id=' +
      user.client_id +
      '&redirect_uri=' +
      redirectURL;

    res.send({ authLink });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = zoomAuth;
