const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

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
    req.token = token;
    req.user = user;
    console.log(token);
    next();
<<<<<<< HEAD
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Token is not valid or not provided' });
    return;
=======
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate.' });
>>>>>>> 96fa889761c5abefe1fbb626c3f0add6dcfb7e8e
  }
};

module.exports = auth;
