const axios = require('axios').default;
const sms = require('../config').sms;

exports.sendSms = async (phone, msg) => {
  const url = baseUrl(sms.profileId, sms.password, 'Eduatlas', phone, msg);
  console.log(url);
  return axios.get(url);
};

function baseUrl(user, pwd, senderid, mobileno, msgtext) {
  return `http://ms6.in/sendurlcomma.aspx?user=${user}&pwd=${pwd}&senderid=${senderid}&mobileno=${mobileno}&msgtext=${msgtext}&smstype=0/4/3`;
}
