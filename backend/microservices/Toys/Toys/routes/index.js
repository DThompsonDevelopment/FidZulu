var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/toys/all/:location', (request, response, next) => {
  const param = request.params.location;
  console.log('got into toys/all/:location ' + param);

  const result = location.query_by_arg(
    "location", param);
  if (result) {
    console.log(result);
    //response.setHeader('content-type', 'application/json');
   // response.end(JSON.stringify(result));
  } else {
    // next(createError(404));
    next(createError(204));
  }
});

router.get('/toys/all/')

router.get('/toys/team', function(req, res) {
  let team = '{"team" : "Toys", "membersNames":["Zach Schulman", "Thaddeus Tutka"]}';
  const obj = JSON.parse(team);
  res.send(obj);
  console.log(obj);
});

module.exports = router;
