const mongoose = require('mongoose');

const { user_role } = require('../clientStore');

// User registration schema
const userSchema = mongoose.Schema(
  {
    role: {
      type: String,
      set: parseRole,
      required: [true, 'Role is required'],
    },

    instituteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Institute',
    },

    name: {
      type: String,
    },

    email: {
      type: String,
      sparse: true,
      unique: true,
    },

    phone: {
      type: String,
      unique: true,
      required: [true, 'Phone is required'],
      minlength: 10,
      maxlength: 10,
    },

    password: {
      type: String,
      required: [true, 'Password is required'],
    },

    login: {
      type: Boolean,
      default: false,
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

function parseRole(value) {
  const roleCode = user_role[value];
  console.log('====parseRole====>', value, roleCode);
  if (roleCode === undefined) {
    return value;
  }
  return roleCode;
}

module.exports = mongoose.model('User', userSchema);
