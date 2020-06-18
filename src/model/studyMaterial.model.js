const mongoose = require('mongoose');

const studyMaterialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  file: {
    file_name: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
  },
  batches: {
    type: [String],
    default: [],
  },
  instituteId: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
});

const StudyMaterial = mongoose.model('studyMaterial', studyMaterialSchema);

module.exports = StudyMaterial;
