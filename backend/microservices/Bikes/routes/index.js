const createError = require("http-errors");
var express = require("express");
var router = express.Router();

const fs = require("fs");

const salesTax = {
  raleigh: 0.075,
  durham: 0.08,
};

let read_json_file = () => {
  let file = "./data/Bikejson.json";
  return fs.readFileSync(file);
};

/* GET home page. */
router.get("/bikes/all/:location", function (req, res, next) {
  const param = req.params.location;

  if (!Object.keys(salesTax).includes(param)) {
    console.log(`${param} not in`);
    next(createError(204));
  } else {
    console.log("got into /bikes/all/:location " + param);

    const bikes = JSON.parse(read_json_file());
    res.send(bikes);
  }
});

module.exports = router;
