const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// course schema
const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Branch name is requires',
      lowercase: true,
    },
    courseCode: {
      type: String,
      required: true,
    },
    fees: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      default: '',
    },
    duration: {
      type: String,
      required: true,
    },
    gst: {
      type: String,
      enum: ['inclusive', 'exclusive'],
      default: 'exclusive',
    },
    gstValue: {
      type: String,
      default: null,
    },
    totalFee: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      default: null,
    },
  },
  { toJSON: { getters: true }, toObject: { getters: true } }
);

// batch schema
const batchSchema = new Schema({
  course: {
    type: String,
    required: true,
  },
  batchCode: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
});

// discount schema
const discountSchema = new Schema(
  {
    discountCode: {
      type: String,
      required: true,
    },
    discountType: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
  },
  { toJSON: { getters: true }, toObject: { getters: true } }
);

// Receipt schema
const receiptConfigSchema = new Schema(
  {
    businessName: {
      type: String,
      required: false,
    },

    address: {
      type: String,
      required: false,
    },

    gstNumber: {
      type: String,
      required: false,
    },

    invoiceNo: {
      type: String,
      default: '0',
    },

    termsAndCondition: {
      type: String,
      required: false,
    },

    fee: {
      type: String,
      enum: ['Collection Basis', 'Course Fee Basis'],
    },
  },
  { _id: false, toJSON: { getters: true }, toObject: { getters: true } }
);

// Payment Details
const paymentDetailsSchema = new Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    receiptId: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    planType: {
      type: String,
      required: true,
    },
    activationDate: {
      type: String,
      required: true,
    },
    expiryDate: {
      type: String,
      required: true,
    },
  },
  { toJSON: { getters: true }, toObject: { getters: true } }
);

// institute schema
const instituteSchema = new Schema(
  {
    parentUser: {
      type: String,
      required: true,
    },
    basicInfo: new Schema(
      {
        logo: {
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
        name: {
          type: String,
          required: [true, 'Institute name is required'],
        },
        instituteContact: {
          type: Number,
          required: [true, 'Phone is required'],
        },
      },
      { _id: false }
    ),

    address: new Schema(
      {
        addressLine: {
          type: String,
        },
        locality: {
          type: String,
        },
        state: {
          type: String,
        },
        city: {
          type: String,
        },
        pincode: {
          type: String,
        },
      },
      { _id: false }
    ),

    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number],
        default: [0, 0],
      },
    },

    category: [String],

    metaTag: [String],

    userPhone: {
      type: String,
      required: [true, 'User phone is require for aggregation'],
    },

    course: {
      type: [courseSchema],
      default: [],
    },

    batch: {
      type: [batchSchema],
      default: [],
    },

    discount: {
      type: [discountSchema],
      default: [],
    },

    reciept: {
      type: receiptConfigSchema,
      default: null,
    },

    paymentDetails: {
      type: [paymentDetailsSchema],
      default: [],
    },

    currentPlan: {
      type: String,
      default: null,
    },

    startDate: {
      type: Date,
      default: null,
    },

    expiryDate: {
      type: Date,
      default: null,
    },

    active: {
      type: Boolean,
      default: false,
    },
  },
  { toJSON: { getters: true }, toObject: { getters: true } }
);

module.exports = mongoose.model('Institute', instituteSchema);
