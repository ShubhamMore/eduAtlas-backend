const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feeSchema = new Schema({
  studentId: {
    type: String,
  },
  eduAtlasId: {
    type: String,
  },
  instituteId: {
    type: String,
  },
  courseId: {
    type: String,
  },
  installmentType: {
    type: String,
  },
  date: {
    type: String,
  },
  noOfInstallments: {
    type: String,
  },
  amountCollected: {
    type: String,
  },
  totalAmount: {
    type: String,
  },
  pendingAmount: {
    type: String,
  },
  installments: [
    {
      paidStatus: {
        type: String,
        default: 'false',
      },
      installmentNo: {
        type: String,
      },
      paidOn: {
        type: String,
      },
      amount: {
        type: String,
      },
      paymentMode: {
        type: String,
      },
      amountPending: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model('Fee', feeSchema);
