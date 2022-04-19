var express = require('express');
var router = express.Router();
const axios = require('axios');
const url = require('url');

/* GET home page. */
router.get('/fun/team', function(req, res, next) {
  const team = {
    'team': 'Fun Team',
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
router.get('/fun/food/all/:location', async function(req, res, next) {
  const location = req.params.location
  let endpoint_res = await axios.get(path + '/food/all/' + location);
  res.end(JSON.stringify(endpoint_res.data));
});

//toys endpoint
router.get('/fun/toys/all/:location', async function(req, res, next) {
  const location = req.params.location
  let endpoint_res = await axios.get(path + '/toys/all/' + location);
  res.end(JSON.stringify(endpoint_res.data));
});

router.get('/fun/toys/team', async function(req, res, next) {
  let endpoint_res = await axios.get(path + '/toys/team');
  res.end(JSON.stringify(endpoint_res.data));
});

router.get('/fun/food/team', async function(req, res, next) {
  let endpoint_res = await axios.get(path + '/food/team');
  res.end(JSON.stringify(endpoint_res.data));
});

router.get('/fun/bikes/team', async function(req, res, next) {
  let endpoint_res = await axios.get(bikesPath + '/bikes/team');
  res.end(JSON.stringify(endpoint_res.data));
});

console.log('Listening on port 3021');
module.exports = router;