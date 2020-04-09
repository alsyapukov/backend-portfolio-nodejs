const multer = require('multer')
const gm = require('gm');

const imageSize = require('./size');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/img/source')
  },
  filename: async function (req, file, cb) {
    const hash = Date.now();
    let mime;
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/jpg") {
      mime = "jpg"
    } else if (file.mimetype == "image/png") {
      mime = "png"
    }
    cb(null, `${hash}.${mime}`);

    const nameImg = `${hash}.${mime}`
    const direcImg = `upload/img/`;
    const sourceImg = `${direcImg}source/${nameImg}`;

    imageSize.map(async img => {
      console.log(gm(sourceImg));
      gm(sourceImg)
        .resize(img.width, img.height)
        .write(`${direcImg}${img.name}/${nameImg}`, function (err) {
          err
            ? console.log(err) : null
            // : console.log(`${img.name} - ${direcImg}${img.name}/${nameImg}`);
        });
    })
  }
});
const fileFilter = (req, file, cb) => {

  if (file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg") {
    cb(null, true);
  }
  else {
    cb(null, false);
  }
}

module.exports = multer({ storage: storage, fileFilter: fileFilter });