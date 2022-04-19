var express = require('express');
var router = express.Router();
const axios = require('axios');
const url = require('url');

/* GET home page. */
router.get('/fun/team', function(req, res, next) {
  const team = {
    'team': 'Fun',
    'membersnames': ['Vahe', 'Peter', 'Mike']
};
res.end(JSON.stringify(team));
});

// bikes endpoint
//const path = "https://12d3ba80-8db1-4d1c-95f1-0c8dfccaba3a.mock.pstmn.io//fun/";
const bikesPath = "http://localhost:3031"
router.get('/fun/bikes/all/:location', async function(req, res, next) {
  const location = req.params.location
  let endpoint_res = await axios.get(bikesPath + '/bikes/all/' + location);
  res.end(JSON.stringify(endpoint_res.data));
});

//food endpoint
const foodPath = "http://localhost:3032"
router.get('/fun/food/all/:location', async function(req, res, next) {
  const location = req.params.location
  let endpoint_res = await axios.get(foodPath + '/food/all/' + location);
  res.end(JSON.stringify(endpoint_res.data));
});

//toys endpoint
const toysPath = "http://localhost:3033"
router.get('/fun/toys/all/:location', async function(req, res, next) {
  const location = req.params.location
  let endpoint_res = await axios.get(toysPath + '/toys/all/' + location);
  res.end(JSON.stringify(endpoint_res.data));
});

router.get('/fun/toys/team', async function(req, res, next) {
  let endpoint_res = await axios.get(toysPath + '/toys/team');
  res.end(JSON.stringify(endpoint_res.data));
});

router.get('/fun/food/team', async function(req, res, next) {
  let endpoint_res = await axios.get(foodPath + '/food/team');
  res.end(JSON.stringify(endpoint_res.data));
});

router.get('/fun/bikes/team', async function(req, res, next) {
  let endpoint_res = await axios.get(bikesPath + '/bikes/team');
  res.end(JSON.stringify(endpoint_res.data));
});

console.log('Listening on port 3021');
module.exports = router;