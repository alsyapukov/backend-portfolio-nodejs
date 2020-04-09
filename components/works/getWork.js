const mongoose = require('mongoose');
const work = mongoose.model('works');

module.exports = (app) => {
  app.get(
    '/works/getWork',
    (req, res) => work.aggregate(
      [
        {
          $project: {
            title: 1,
            miniDescription: 1,
            image: { $arrayElemAt: ["$images", 0] }
          }
        }
      ]
    )
      .exec()
      .then(works => res.json(works))
  );
};