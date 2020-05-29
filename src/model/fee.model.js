const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feeSchema = new Schema({
  instituteDetailsId: {
    type: String,
  },
  instituteId: {
    type: String,
  },
  studentId: {
    type: String,
  },
  courseId: {
    type: String,
  },
  date: {
    type: String,
  },
  totalAmount: {
    type: String,
  },
  amountCollected: {
    type: String,
  },
  installmentType: {
    type: String,
  },
  pendingAmount: {
    type: String,
  },
  noOfInstallments: {
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
