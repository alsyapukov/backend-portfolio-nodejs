const mongoose = require('mongoose');

const tech = mongoose.model('techs');

module.exports = (app) => {
  app.post(
    '/techs/postTech',
    (req, res) => tech.create(req.body)
      .then(techs => res.json(techs))
  );
};