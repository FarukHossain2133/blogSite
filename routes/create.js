var express = require('express');
var router = express.Router();
const postModel = require('../models/Post');
const fileUpload = require('express-fileupload')
const path =  require('path')
router.use(fileUpload());
/* GET Create page. */
router.get('/', function(req, res, next) {
  res.render('create', { title: 'Express' });
});

/* Post Create page. */
router.post('/new', function(req, res, next) {
  
      const {image} = req.files;
      console.log(path.resolve(__dirname, 'public/images'))
      
      image.mv(path.resolve(__dirname, 'public/images', image.name), (error) => {
          postModel.create(req.body, (err, post) => {
             res.redirect('/');
      });
    })
  });
module.exports = router;
