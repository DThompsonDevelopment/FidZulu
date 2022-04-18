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
router.get('/media/books/all/:location', async function(req, res, next) {
  const location = req.params.location
  let endpoint_res = await axios.get('', {
    'params': {
      'location': location
    }
  });
  res.end(endpoint_res);
});

//dvds endpoint
router.get('/media/dvds/all/:location', function(req, res, next) {
  const location = req.params.location
  let params = url.parse(request.url, true).query;
});

//laptops endpoint
router.get('/media/laptops/all/:location', function(req, res, next) {
  const location = req.params.location
  let params = url.parse(request.url, true).query;
});

console.log('Listening on port 3022');
module.exports = router;
