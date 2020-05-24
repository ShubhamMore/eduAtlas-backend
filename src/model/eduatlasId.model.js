const mongoose = require('mongoose');

const eduAtlasIdschema = new mongoose.Schema({
  studentEduId: {
    type: String,
    required: true,
  },
  empEduId: {
    type: String,
    required: true,
  },
  instEduId: {
    type: String,
    required: true,
  },
});

const EduAtlasId = mongoose.model('EduAtlasId', eduAtlasIdschema);
module.exports = EduAtlasId;
