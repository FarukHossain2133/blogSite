var express = require('express');
var router = express.Router();
const postModel = require('../models/Post')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const posts = await postModel.find({}).sort({_id: -1});

  res.render('index', {
    title: 'Faruk Blog',
    posts
  })
}); 

module.exports = router;
