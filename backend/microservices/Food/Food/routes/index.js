var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/food/team', (req, res, next) => {
  res.json({team: "Food", membersNames: ["Jon, Dillon, Dakota"]});
})

router.get('/food/all/:location', (req, res) => {
  let loc = req.params;
  let tax = 0;
  if(/\b[Dd][Uu][Rr][Hh][Aa][Mm]\b/g.test(loc.location)){//Durham location
    tax = 0.075; //7.5% Tax
    console.log("durham inside")
  } else if(/\b[Rr][Aa][Ll][Ee][Ii][Gg][Hh]\b/g.test(loc.location)){//Raleigh location
    tax = 0.08; //8% Tax
    console.log("raleigh inside")
  } else {
    //Throw error
    console.log("else")
  }
  
})

//router.post();

module.exports = router;
