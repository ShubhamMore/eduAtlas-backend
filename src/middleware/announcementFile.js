const multer = require('multer');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(error, './announcements');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  },
});

module.exports = multer({ storage }).single('announcement');
