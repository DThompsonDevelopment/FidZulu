const {applyTax, getJSON, addBike } = require("../utils/bikeDao");
var fs = require('fs');
var express = require("express");
var router = express.Router();

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/bikes/all/:location", function (req, res, next) {
  const param = req.params.location;

  const bikes = getJSON(param, next);
  res.send(applyTax(bikes, param.toLowerCase()));
});

router.get("/bikes/team", function (req, res, next) {
  let returnJson = {
    team: "bikes",
    memberNames: ["Joseph Buono", "Jimmy Lin"],
  };

  console.log("got into /bikes/team");

  res.send(returnJson);
});

router.post("/bikes/add", function (req, res, next) {
 
  console.log("got into /bikes/add");
  json = addBike(req.body);

  res.send(json);
});

module.exports = router;
