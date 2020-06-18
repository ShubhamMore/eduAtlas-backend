const mongoose = require('mongoose');

const ptmSchecma = new mongoose.Schema({
  topic: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  batchId: {
    type: String,
  },
  courseId: {
    type: String,
  },
  instituteId: {
    type: String,
  },
});

const Ptm = mongoose.model('ptm', ptmSchecma);
module.exports = Ptm;
