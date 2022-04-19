var express = require('express');
var router = express.Router();
const axios = require('axios');
const url = require('url');
const path = 'https://a868ef5c-e9f3-417d-9441-1acca240b247.mock.pstmn.io/media'

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
  let endpoint_res = await axios.get(path + '/books/all/' + location);
  res.status(endpoint_res.status).end(JSON.stringify(endpoint_res.data));
});

//dvds endpoint
router.get('/media/dvds/all/:location', async function(req, res, next) {
  const location = req.params.location
  let endpoint_res = await axios.get(path + '/dvds/all/' + location);
  res.status(endpoint_res.status).end(JSON.stringify(endpoint_res.data));
});

//laptops endpoint
router.get('/media/laptops/all/:location', async function(req, res, next) {
  const location = req.params.location
  let endpoint_res = await axios.get(path + '/laptops/all/' + location);
  res.status(endpoint_res.status).end(JSON.stringify(endpoint_res.data));
});

console.log('Listening on port 3022');
module.exports = router;
