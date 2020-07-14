const errorHandler = require('../service/errorHandler');
const request = require('request');
const rp = require('request-promise');
const Employee = require('../model/employee.model');
const Institute = require('../model/institute.model');
const User = require('../model/user.model');
const mongoose = require('mongoose');
const ZoomUser = require('../model/zoomCredentials.model');
const checkTokenAuth = async (req, res, next) => {
  try {
    let userId = '';
    if (req.user.role == 'institute') {
      userId = req.user._id;
    } else if (req.user.role == 'employee' || req.user.role == 'student') {
      const inst = await Institute.findOne({
        _id: req.body.instituteId,
      });

      userId = inst.parentUser;
    }

    const user = await ZoomUser.findOne({
      userId,
    });

    const currentTimeStamp = new Date().getTime() / 1000;

    if (currentTimeStamp > user.expires_in) {
      //
      var options = {
        method: 'POST',
        url: 'https://zoom.us/oauth/token',
        qs: {
          grant_type: 'refresh_token',
          refresh_token: user.refresh_token,
        },
        headers: {
          /**The credential below is a sample base64 encoded credential. Replace it with "Authorization: 'Basic ' + Buffer.from(your_app_client_id + ':' + your_app_client_secret).toString('base64')"
           **/
          Authorization:
            'Basic ' + Buffer.from(user.client_id + ':' + user.client_secret_id).toString('base64'),
        },
      };

      let body = await rp(options);
      //
      body = JSON.parse(body);

      const currentTime = new Date().getTime() / 1000;

      const expires_in = body.expires_in + currentTime;
      const update = await ZoomUser.updateOne(
        {
          userId: userId,
        },
        {
          $set: {
            access_token: body.access_token,
            refresh_token: body.refresh_token,
            expires_in: expires_in,
          },
        },
        {
          multi: true,
        }
      );
      user.access_token = body.access_token;
      user.refresh_token = body.refresh_token;
      user.expires_in = body.expires_in;
    }
    req.zoom = user;
    next();
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = checkTokenAuth;
