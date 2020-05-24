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
    },
    discription: {
      type: String,
      default: '',
    },
    gst: {
      type: String,
      enum: ['inclusive', 'exclusive'],
      default: 'exclusive',
    },
    gstValue: {
      type: String,
    },
    totalFee: {
      type: String,
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
  },
});

// discount schema
const discountSchema = new Schema(
  {
    discountCode: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    amount: {
      type: String,
    },
  },
  { toJSON: { getters: true }, toObject: { getters: true } }
);

// Attendence schema
const attendenceSchema = new Schema({
  batchId: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  allPresent: {
    type: Boolean,
    default: true,
  },

  absentStudents: {
    type: [Schema.Types.ObjectId],
  },
});

// Reciept schema
const recieptConfigSchema = new Schema(
  {
    businessName: {
      type: String,
    },

    address: {
      type: String,
      required: false,
    },

    gstNumber: {
      type: String,
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

// institute schema
const instituteSchemsa = new Schema(
  {
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
      type: recieptConfigSchema,
      default: null,
    },

    attendence: {
      type: [attendenceSchema],
      default: [],
    },
  },
  { toJSON: { getters: true }, toObject: { getters: true } }
);

function parseNumber(value) {
  if (value == '') {
    return null;
  }
  return parseInt(value);
}

function parseString(value) {
  if (value == null) {
    return '';
  }
  return value.toString();
}

module.exports = mongoose.model('Institute', instituteSchemsa);
