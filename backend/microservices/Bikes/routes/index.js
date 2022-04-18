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
    console.log(salesTax[param]);
    const bikes = JSON.parse(read_json_file());

    bikes.forEach((bike) => {
      let price = bike.price * (1 + salesTax[param]);
      bike.price = Math.round(price * 100) / 100;
    });

    res.send(bikes);
  }
});

module.exports = router;
