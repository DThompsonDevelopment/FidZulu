const {applyTax, getJSON } = require("../utils/bikeDao");

var express = require("express");
var router = express.Router();

router.get("/bikes/all/:location", function (req, res, next) {
  const param = req.params.location;

  const bikes = getJSON(param, next);
  res.send(applyTax(bikes, param));
});

router.get("/bikes/team", function (req, res, next) {
  let returnJson = {
    team: "bikes",
    memberNames: ["Joseph Buono", "Jimmy Lin"],
  };

  console.log("got into /bikes/team");

  res.send(returnJson);
});

router.get("/bikes/add", function (req, res, next) {
 
  console.log("got into /bikes/add");

  res.send(returnJson);
});

module.exports = router;
