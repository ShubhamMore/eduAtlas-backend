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
      paymentDate: {
        type: String,
        default: '',
      },
      bankDetails: {
        type: String,
        default: '',
      },
      transDetails: {
        type: String,
        default: '',
      },
      paymentMode: {
        type: String,
        default: '',
      },
      amountPending: {
        type: String,
        default: '',
      },
      receipt: {
        fileName: {
          type: String,
          default: null,
        },
        fileSize: {
          type: Number,
          default: null,
        },
        secureUrl: {
          type: String,
          default: null,
        },
        publicId: {
          type: String,
          default: null,
        },
        createdAt: {
          type: String,
          default: null,
        },
      },
    },
  ],
});

module.exports = mongoose.model('Fee', feeSchema);
