const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = process.env.AWS_SECRET_ACCESS_ID;
const SECRET = process.env.AWS_SECRET_ACCESS_KEY;
const REGION = process.env.AWS_REGION;
// The name of the bucket that you have created

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
  region: REGION,
});

module.exports = s3;
