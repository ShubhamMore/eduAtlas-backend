class OneTimePassword {
  static otp = {};

  constructor(phone, ot) {
    OneTimePassword.otp[phone] = ot;
  }

  static setOTP(phone, ot) {
    OneTimePassword.otp[phone] = ot;
  }

  static getOTP(phone) {
    return OneTimePassword.otp[phone];
  }

  static deleteOTP(phone) {
    OneTimePassword[phone] = -1;
    setTimeout(() => {
      delete OneTimePassword.otp[phone];
    }, 60000);
  }
}

const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] == value);
};

module.exports = { OneTimePassword, getKeyByValue };
