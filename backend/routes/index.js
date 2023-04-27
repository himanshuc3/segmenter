var express = require('express');
var sharp = require('sharp')
var multer = require('multer')
var { uuid } = require('uuidv4')
var path = require('path')
var router = express.Router();

const DIR = './public'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const filename = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, uuid() + '-' + filename)
  }
})
const upload = multer({
  limits: {
    fileSize: 1000000 // 1mb
  },
  storage,
  fileFilter(req, file, cb) {
    if (file.mimetype == 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png format allowed!'));
    }

  }
})

router.post('/image', upload.single('segment'), async (req, res, next) => {
  try {
    const { filename } = req.file
    await sharp(req.file.path).resize({ width: 1920, height: 1080 })
      .png()
      .toFile(path.resolve(req.file.destination, 'resized', filename))

    res.status(201).send('Image uploaded successfully')
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
});

module.exports = router;
