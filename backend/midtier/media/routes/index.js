var express = require('express');
var router = express.Router();
const axios = require('axios');
const path = ''


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
console.log('Listening on port 3022');
module.exports = router;
