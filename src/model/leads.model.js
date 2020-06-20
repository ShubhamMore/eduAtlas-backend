const mongoose = require('mongoose');

const leadsSchema = new mongoose.Schema({
  leadName: {
    type: String,
  },
  leadContact: {
    type: String,
  },
  leadEmail: {
    type: String,
  },
  courseId: {
    type: String,
  },
  instituteId: {
    type: String,
  },
  address: {
    type: String,
  },
  date: {
    type: String,
  },
  followUpDate: {
    type: String,
  },
  status: {
    type: String,
  },
  strength: {
    type: String,
  },
  mode: {
    type: String,
  },
  source: {
    type: String,
  },
  comment: {
    type: String,
  },
});

const Leads = mongoose.model('lead', leadsSchema);
module.exports = Leads;
