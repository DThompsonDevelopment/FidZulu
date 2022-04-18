var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/food/team', (req, res, next) => {
  res.json({team: "Food", membersNames: ["Jon, Dillon, Dakota"]});
})

router.post();

module.exports = router;
