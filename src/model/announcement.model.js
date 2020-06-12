const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
  instituteId: {
    type: Schema.Types.ObjectId,
    ref: 'Institute',
  },
  title: {
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
    image_name: {
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
});

module.exports = mongoose.model('Announcement', announcementSchema);
