const mongoose = require('mongoose');

const tech = mongoose.model('techs');

module.exports = (app) => {
  app.get(
    '/techs/getTech',
    (req, res) => tech.find()
      .exec()
      .then(techs => res.json(techs))
  );
};