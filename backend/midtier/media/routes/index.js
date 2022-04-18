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
  if(Object.keys(req.params).length === 0) {
    console.log("No params");
  }
  else if(Object.keys(req.params).length > 1) {
    console.log("Too many params");
  }
  else if(location === undefined) {
    console.log("Undefined location");
  }

  let endpoint_res = axios.get('https://localhost:3034/books/all/' + location).then(r => r.data);
  res.end(endpoint_res);
});

//dvds endpoint
router.get('/media/dvds/all/:location', async function(req, res, next) {
  const location = req.params.location
  let endpoint_res = await axios.get('https://localhost:3034/dvds/all/' + location);
  res.end(endpoint_res.data);
  // let params = url.parse(request.url, true).query;
});

//laptops endpoint
router.get('/media/laptops/all/:location', async function(req, res, next) {
  const location = req.params.location
  let endpoint_res = await axios.get('https://localhost:3034/laptops/all/' + location);
  res.end(endpoint_res.data);
  // let params = url.parse(request.url, true).query;
});

console.log('Listening on port 3022');
module.exports = router;
