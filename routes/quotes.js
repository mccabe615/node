var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/quotes', function (req, res, next) {
  request({
    url: 'http://127.0.0.1:3001/api/random-quote', //URL to hit
    method: 'GET', //Specify the method
  }, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
    res.send(body);
  });
});

module.exports = router;

/*
request({
  url: 'http://127.0.0.1:3001', //URL to hit
  method: 'GET', //Specify the method
}, function(error, response, body){
  if(error) {
      console.log(error);
  } else {
      console.log(response.statusCode, body);
  }
});
*/
