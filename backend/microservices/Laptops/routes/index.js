var express = require('express');
var router = express.Router();
const taxCalculator = require('../modules/taxCalculator');
const createError = require('http-errors');
const url = require('url');

router.get('/laptops/all/:location', function(request, response, next) {
  const param = request.params.location;
  console.log('got into /laptops/all/:location with location ' + param);

  const result = taxCalculator.calculateTax(param);
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

module.exports = router;
