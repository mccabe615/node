var express = require('express');
var request = require('request');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.render('login', { title: req.body });
});

module.exports = router;
