var express = require('express');
var router = express.Router();

/* GET Contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
