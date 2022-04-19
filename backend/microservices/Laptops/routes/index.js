var express = require('express');
var router = express.Router();
const laptopDao = require('../modules/laptopDao');
const createError = require('http-errors');
const url = require('url');

router.get('/laptops/all/:location', function(request, response, next) {
  const param = request.params.location;
  console.log('got into /laptops/all/:location with location ' + param);

  const result = laptopDao.calculateTax(param);
  if (result) {
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(result));
  } else {
    next(createError(404));
  }
});

router.get('/laptops/team', function(request, response, next) {
  const team = JSON.parse('{"team": "string", "membersNames":["Nayaab Chogle", "Barry Ng"]}');
  response.setHeader('content-type', 'application/json');
  response.end(JSON.stringify(team));
});

router.post('/laptops/add', function(request, response, next){
  let laptop = request.body;
  if(laptop.product == undefined || laptop.brand == undefined || laptop.CPU == undefined || laptop.memory == undefined || laptop.price == undefined){
    next(createError(404));
  }
  else {
    laptopDao.addLaptop(laptop);
    response.status(201).send();
  }
})

module.exports = router;
