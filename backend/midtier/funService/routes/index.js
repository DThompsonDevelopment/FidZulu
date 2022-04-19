var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/fun/team', function(req, res, next) {
  const team = {
    'team': 'Fun Team',
    'membersnames': ['Vahe', 'Peter', 'Mike']
};
res.end(JSON.stringify(team));
});

router.get('/fun/bikes/all:location', async function(req, res, next) {
  const location = req.params.location; 
  if(location === 'durham'){
    res.end("This is for durham");
  }
res.end("");
});

module.exports = router;
console.log("listnening on port 3021");
