const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const books = require('../modules/books');
const url = require('url');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// can process any existing query parameters 
router.get('/books/all', (request, response, next) => { //this works
  let get_params = url.parse(request.url, true).query;
  console.log('got into books');
  response.setHeader('content-type', 'application/json');

  try {
    response.end(JSON.stringify(books.list()));
  } catch (err) {
    next(createError(500));
  }
  
  /*
  if (Object.keys(get_params).length == 0) {
    console.log('no params');
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(books.list()));
  } else {
    // get first parameter only
    let key = Object.keys(get_params)[0];
    console.log("First key is: " + key);
    let value = request.query[key];
    console.log('params ' + value);
    let result = books.query_by_arg(key, value);
    if (result) {
      response.setHeader('content-type', 'application/json');
      response.end(JSON.stringify(result));
    } else {
      next(createError(404));
    }
  }
  */

});

router.get('/books/all/Raleigh', (request, response, next) => {
  console.log('got into books');
  try {
    let result = books.get_raleigh();
    if (result) {
      response.setHeader('content-type', 'application/json');
      response.end(JSON.stringify(result));
    } else {
      next(createError(404));
    }
  } catch (err) {
    next(createError(500));
  }
  
});

router.get('/books/all/Durham', (request, response, next) => {
  console.log('got into books');
  try {
    let result = books.get_durham();
    if (result) {
      response.setHeader('content-type', 'application/json');
      response.end(JSON.stringify(result));
    } else {
      next(createError(404));
    }
  } catch (err) {
    nextends(createError(500));
  }
  
});


router.get('/books/book-team', function(req, res) { //this is working
  res.json({
    "team": "Book Team",
    "membersNames": ["Swapnil Kha", "Eric Vo"]
  });
});

router.post('/books/add', function(req, res) {

});

module.exports = router;
