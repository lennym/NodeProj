var express = require('express');
var router = express.Router();
var sqtest = require('./sqlite');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'Express' , tit : 'RANDOMNAME MARRAFAKA'});
});

module.exports = router;
