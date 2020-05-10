const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const announcementSchema = new Schema({
    instituteId: { type: Schema.Types.ObjectId, ref: 'Institute' },
    title: {type: String},
    selectAll: {type: Boolean, default: false},
    batchCodes: { type: [String], default: [] },
    categories: { type: [String], default: [] },
    text: {type: String}
});

module.exports = mongoose.model('Announcement', announcementSchema);