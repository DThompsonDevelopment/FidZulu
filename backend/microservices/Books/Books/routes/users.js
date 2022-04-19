var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/books/add', function(req, res) {
  try {
    res.send({
      'Title': req.body.Title,
      'Author': req.body.Author,
      'price': req.body.price,
      "ISBN": req.body.ISBN
    });
  } catch (err) {
    nextends(createError(500));
  }
    
});

module.exports = router;
