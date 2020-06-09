const multer = require('multer');

const MIME_TYPE_MAP = {
  'application/vnd.ms-excel': 'xlsx',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':'xls',
  'text/csv':'csv'
  
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid mime type');
    if (isValid) {
      error = null;
    }
    cb(error, './scoreFiles');
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  },
});

module.exports = multer({ storage }).single('uploadfile');
