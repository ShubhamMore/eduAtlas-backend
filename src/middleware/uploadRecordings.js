const multer = require('multer');

const MIME_TYPE_MAP = {
  // Video
  'video/x-flv': 'flv',
  'video/mp4': 'mp4',
  'application/x-mpegURL': 'm3u8',
  'video/MP2T': 'ts',
  'video/3gpp': '3gp',
  'video/quicktime': 'mov',
  'video/x-msvideo': 'avi',
  'video/x-ms-wmv': 'wmv',
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './recording');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  },
});

module.exports = multer({ storage }).single('recording');
