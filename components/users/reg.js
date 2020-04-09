const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('jsonwebtoken');

const User = mongoose.model('users');

module.exports = (app) => {
  app.post(
    '/users/register',
    (req, res) => {
      const { email, password } = req.body;

      const salt = bcrypt.genSaltSync(10);

      User.create({ email, password: bcrypt.hashSync(password, salt) })
        .then(user => res.json(user))
        .catch(err => console.log(err));
    }
  )
}