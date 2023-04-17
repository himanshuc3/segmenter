var express = require('express');
var sharp = require('sharp')
var router = express.Router();


const upload = multer({
  limits: {
    fileSize: 1000000 // 1mb
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png)$/)) {
      return cb(new Error('Please upload a png image of correct resolution.!!!'))
    }
    cb(undefined, true)
  }
})

/* GET home page. */
router.post('/image', upoad.single('upload'), async (req, res, next) => {
  try {
    await sharp(req.file.buffer).resize({ width: 1920, height: 1080 })
      .png()
      .toFile(__dirname + `/images/${req.file.originalname}`)

    res.status(201).send('Image uploaded successfully')
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
});

module.exports = router;
