const mongoose = require('mongoose');
const work = mongoose.model('works');

const imageConfig = require('../config/image');
const maxMedia = 10;
const uploadConfig = imageConfig.array('media', maxMedia);

module.exports = (app) => {
  app.post(
    '/works/postWork',
    uploadConfig,
    ((req, res) => {
      let sendData = {
        images: []
      }

      req.files.map(img => {
        sendData.images.push({
          id: img.filename.split('.')[0],
          url: `${img.filename}`,
          urlSmall: `${img.filename}`.replace('source', 'small'),
          name: img.filename
        })
      })

      sendData = { ...sendData, ...req.body }

      work.create(sendData).then(works => res.json(works))
    })
      // .then(works => res.json(works))
  );
};