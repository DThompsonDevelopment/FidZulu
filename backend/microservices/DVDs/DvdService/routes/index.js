
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const contacts = require('../modules/dvd');
const url = require('url');

router.get('/ping', (request, response, next) => {
 response.send('Hello From Service');
});


module.exports = router;
