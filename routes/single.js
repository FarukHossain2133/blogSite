var express = require('express');
var router = express.Router();
const postModel = require('../models/Post')

/* GET home page. */
router.get('/:id', async function(req, res, next) {
    const id =  req.params.id;
  const posts = await postModel.findById(id);

  res.render('single', {
    title: 'Faruk Blog',
    posts
  })
}); 

module.exports = router;
