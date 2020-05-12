const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// student schema
const studentSchema = new Schema(
  {
    instituteId: {
      type: Schema.Types.ObjectId,
      require: 'Institude Id not provided',
      ref: 'Institute',
    },

    // basic details of student
    basicDetails: new Schema(
      {
        name: {
          type: String,
          required: 'Name is required',
        },
        rollNumber: {
          type: String,
          required: 'Roll number is required',
        },
        studentEmail: {
          type: String,
          required: 'email is required',
          unique: true,
        },
        studentContact: {
          type: String,
          required: [true, 'student contact required'],
        },
      },
      { _id: false, toJSON: { getters: true }, toObject: { getters: true } }
    ),

    // student parent details
    parentDetails: new Schema(
      {
        name: {
          type: String,
          lowercase: true,
          default: '',
        },
        parentContact: {
          type: String,
          required: false,
        },
        parentEmail: {
          type: String,
          default: '',
        },
        address: {
          type: String,
          default: '',
        },
      },
      { _id: false, toJSON: { getters: true }, toObject: { getters: true } }
    ),

    // student course details
    courseDetails: new Schema(
      {
        course: {
          type: String,
          default: '',
        },
        batch: {
          type: String,
          default: '',
        },
        discount: {
          type: String,
          required: false,
        },
        additionalDiscount: {
          type: String,
          required: false,
        },
        nextPayble: {
          type: String,
          default: '',
        },
      },
      { _id: false, toJSON: { getters: true }, toObject: { getters: true } }
    ),

    // student fees
    fee: new Schema(
      {
        installmentNumber: {
          type: String,
          required: false,
        },
        nextInstallment: {
          type: String,
          required: false,
        },
        amountCollected: {
          type: String,
          required: false,
        },
        mode: {
          type: String,
          required: false,
        },
      },
      { _id: false, toJSON: { getters: true }, toObject: { getters: true } }
    ),

    active: {
      type: Boolean,
      default: false,
    },

    materialRecord: {
      type: String,
      default: null,
    },
  },
  { toJSON: { getters: true }, toObject: { getters: true } }
);

// function parseNumber(value) {
//     if(value == '') {
//       return null
//     }
//     return parseInt(value);
//   }

//   function parseString(value) {
//     if(value == null) {
//         return '';
//     }
//     return value.toString();
// }

module.exports = mongoose.model('Student', studentSchema);
