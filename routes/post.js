var express = require('express');
var router = express.Router();

/* GET Post page. */
router.get('/', function(req, res, next) {
  res.render('post', { title: 'Express' });
});

module.exports = router;
