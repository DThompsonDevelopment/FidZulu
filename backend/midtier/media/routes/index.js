var express = require('express');
var router = express.Router();
const axios = require('axios');
const path = 'https://a868ef5c-e9f3-417d-9441-1acca240b247.mock.pstmn.io/media'



function renameKey (obj, oldKey, newKey ) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}

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
  let data_str = JSON.stringify(endpoint_res.data);
  let endpoint = JSON.parse(data_str);

  endpoint.forEach(element => renameKey(element, 'ISBN', 'isbn'));
  endpoint.forEach(element => renameKey(element, 'Title', 'title'));
  endpoint.forEach(element => renameKey(element, 'Author', 'author'));
  console.log(endpoint);

  res.status(endpoint_res.status).end(JSON.stringify(endpoint));
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
  let data_str = JSON.stringify(endpoint_res.data);
  let endpoint = JSON.parse(data_str);
  endpoint.forEach(element => renameKey(element, 'CPU', 'cpu'));
  res.status(endpoint_res.status).end(JSON.stringify(endpoint));
});

console.log('Listening on port 3022');
module.exports = router;
