var express = require('express');
var router = express.Router();
const location = require('../modules/location');
const createError = require('http-errors');
const url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/toys/all/:location', (req, res, next) => {
  const param = req.params.location;
  console.log('got into toys/all/:location ' + param);

  const result = location.query_by_arg(
    "location", param);

  console.log("location: " + param);
  if (param == "raleigh") {
    for(let i = 0; i < result.length; i++){
      result[i].prize = Math.round((result[i].prize * 1.075) * 100) / 100;
    }
    console.log(result);
    res.send(result);
  }
  else if(param == "durham") {
    for(let i = 0; i < result.length; i++){
      result[i].prize = Math.round((result[i].prize * 1.08) * 100) / 100;
    }
    console.log(result);
    res.send(result);
  } else {
    //next(createError(404));
    next(createError(404));
    console.log("fail");
  }
});

router.get('/toys/team', function(req, res) {
  let team = '[{"team" : "Toys", "membersNames":["Zach Schulman", "Thaddeus Tutka"]}]';
  const obj = JSON.parse(team);
  res.send(obj);
});

module.exports = router;
