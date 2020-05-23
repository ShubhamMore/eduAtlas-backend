const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { user_role } = require('../clientStore');

// User registration schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      set: parseRole,
      required: [true, 'Role is required'],
    },

    email: {
      type: String,
      sparse: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      },
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
      minlength: 7,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot contain "password"');
        }
      },
    },

    eduAtlasId: {
      type: String,
      unique: true,
    },

    verifyOTP: {
      type: String,
      default: '0',
    },

    verifyEmail: {
      type: String,
      default: '0',
    },

    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;
  delete userObject.__v;

  return userObject;
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), phone: user.phone.toString(), role: user.role.toString() },
    process.env.JWT_SECRET
  );
  console.log(token);

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

userSchema.statics.findByCredentials = async (phone, password) => {
  const user = await User.findOne({ phone });

  if (!user) {
    throw new Error('User does not found, Please Register');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Wrong Password, Please Try again');
  }

  return user;
};

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

function parseRole(value) {
  const roleCode = user_role[value];
  // console.log('====parseRole====>', value, roleCode);
  if (roleCode === undefined) {
    return value;
  }
  return roleCode;
}

const User = mongoose.model('User', userSchema);
module.exports = User;
