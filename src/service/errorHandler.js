const response = require('./response');
function errorHandler(error, res) {
  const statusCode = error.statusCode || 500;
  if (statusCode === 500) {
  }
  response(res, statusCode, error.message);
}

module.exports = errorHandler;
