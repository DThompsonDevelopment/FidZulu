var express = require('express');
var router = express.Router();
const fs = require('fs');
const location = require('../modules/location');
const createError = require('http-errors');
const url = require('url');
let db = require('../data/toys.json');


/* GET home page. */
router.get('/toys', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all/:location', (req, res, next) => {
  const param = req.params.location;
  console.log('got into toys/all/:location ' + param);

  const result = location.list();

  console.log("location: " + param);
  let toys = location.tax(result, param);
  if (toys == null) {
    next(createError(404));
  } else {
    res.status(200).send(toys);
  }
});

router.get('/team', function(req, res) {
  let team = '{"team" : "Toys", "memberNames":["Zach Schulman", "Thaddeus Tutka"]}';
  const obj = JSON.parse(team);
  res.send(obj);
});

router.post('/add', function(req, res) {
  let toys = location.addToy('./data/toys.json', req.body);
  res.status(201).send(toys);
});

module.exports = router;