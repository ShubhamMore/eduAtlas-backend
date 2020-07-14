const errorHandler = require('../service/errorHandler');
const mailRouter = require('express').Router();
const send = require('../service/mail');

mailRouter.post('/sendmail', async (req, res) => {
  try {
    let mail = {};

    mail.to = 'akashkulkarni796@gmail.com';
    mail.from = 'admin@eduatlas.in';
    mail.subject = 'test Mail to chech Zoho';
    mail.html =
      '<!DOCTYPE html>' +
      '<html><head><title>Check ZOHO</title>' +
      '</head><body><div>' +
      '<img src="http://evokebeautysalon1.herokuapp.com/main/img/logo.png" alt="" width="160">' +
      '<p>Thank you for your appointment.</p>' +
      '<p>Here is summery:</p>' +
      '<p>Name: James Falcon</p>' +
      '<p>Date: Feb 2, 2017</p>' +
      '<p>Package: Hair Cut </p>' +
      '<p>Arrival time: 4:30 PM</p>' +
      '</div></body></html>';

    await send(mail);
    res.status(200).send({ data: 'success' });
  } catch (error) {
    errorHandler(error, res);
  }
});

module.exports = mailRouter;
