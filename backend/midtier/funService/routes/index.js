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

module.exports = router;
