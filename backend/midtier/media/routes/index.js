var express = require('express');
var router = express.Router();
const axios = require('axios');
const url = require('url');
const path = ''

// team endpoint
router.get('/media/team', (req, res, next) => {
  const team = {
    'team': 'media',
    'membersNames': [
      'Ty Crawford',
      'Dev Patel',
      'Pranav Chaloori'
    ]
  };
  res.end(JSON.stringify(team));
})

// books endpoint
router.get('/media/books', function(req, res, next) {
  let params = url.parse(request.url, true).query;
});

//dvds endpoint
router.get('/media/dvds', function(req, res, next) {
  let params = url.parse(request.url, true).query;
});

//laptops endpoint
router.get('/media/laptops', function(req, res, next) {
  let params = url.parse(request.url, true).query;
});

console.log('Listening on port 3022');
module.exports = router;
