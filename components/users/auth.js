const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/app');

const User = mongoose.model('users');

module.exports = (app) => {
  app.post(
    '/users/signIn',
    (req, res) => {
      const { email, password } = req.body;
      User.findOne({ email })
        .exec()
        .then(user => {
          if(!user) {
            res.status(401).json({ message: 'User does not exist' });
          }

          const isValid = bcrypt.compareSync(password, user.password);
          if(isValid) {
            const token = jwt.sign(user._id.toString(), jwtSecret);
            res.json({ token });
          } else {
            res.status(500).json({ message: 'Invalid' });
          }
        })
        .catch(err => res.status(500).json({ message: err.message }));
    }
  )
}