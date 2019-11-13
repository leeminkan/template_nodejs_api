const multer = require("multer");
const _ = require('lodash');
const imagestorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const imageFilter = (req, file, cb) => {
  let allowedMimes = ['image/jpeg', 'image/jpeg', 'image/png'];
  if (_.includes(allowedMimes, file.mimetype))
  return cb(null, true);
  req.validationFile = "error.AVATAR_FORMAT";
  cb(null, false);
};
const uploadImage = multer({
  storage: imagestorage,
  limits: {
    files: 1, // allow only 1 file per request
    fileSize: 1024 * 1024, // 1 MB (max file size)
  },
  fileFilter: imageFilter
});

module.exports = {
  uploadImage: uploadImage
};
