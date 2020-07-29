const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
  instituteId: {
    type: Schema.Types.ObjectId,
    ref: 'Institute',
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  selectAll: {
    type: Boolean,
    default: false,
  },
  batchCodes: {
    type: [String],
    default: [],
  },
  categories: {
    type: [String],
    default: [],
  },
  text: {
    type: String,
  },
  attachment: {
    file_name: {
      type: String,
    },
    file_size: {
      type: String,
    },
    secure_url: {
      type: String,
    },
    public_id: {
      type: String,
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
  },
});

module.exports = mongoose.model('Announcement', announcementSchema);
