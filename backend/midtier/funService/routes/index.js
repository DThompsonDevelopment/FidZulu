var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/fun/team', function(req, res, next) {
  const team = {
    'team': 'Fun Team',
    'membersnames': ['Vahe', 'Peter', 'Mike']
};
res.end(JSON.stringify(team));
});

// bikes endpoint
const bikesPath = "https://12d3ba80-8db1-4d1c-95f1-0c8dfccaba3a.mock.pstmn.io//fun/";
router.get('/fun/bikes/all/:location', async function(req, res, next) {
  const location = req.params.location
  let endpoint_res = await axios.get(path + '/bikes/all/' + location);
  res.end(JSON.stringify(endpoint_res.data));
});

//dvds endpoint
router.get('/media/dvds/all/:location', async function(req, res, next) {
  const location = req.params.location
  let endpoint_res = await axios.get(path + '/dvds/all/' + location);
  res.end(JSON.stringify(endpoint_res.data));
});

//laptops endpoint
router.get('/media/laptops/all/:location', async function(req, res, next) {
  const location = req.params.location
  let endpoint_res = await axios.get(path + '/laptops/all/' + location);
  res.end(JSON.stringify(endpoint_res.data));
});

console.log('Listening on port 3022');
module.exports = router;