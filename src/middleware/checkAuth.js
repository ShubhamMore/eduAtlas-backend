const jwt = require('jsonwebtoken');
const User = require('../model/user.model');
const Student = require('../model/student.model');
const Employee = require('../model/employee.model');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token,
    });
    if (!user) {
      throw new Error();
    }

    if (user.role == 'employee') {
      const employee = await Employee.findOne({
        eduAtlasId: user.eduAtlasId,
      });
      user._id = employee._id;
    } else if (user.role == 'student') {
      const student = await Student.findOne({
        eduAtlasId: user.eduAtlasId,
      });
      user._id = student._id;
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = auth;
