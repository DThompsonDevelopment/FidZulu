const fs = require("fs");
var express = require('express');
var router = express.Router();
const createError = require('http-errors');

const foodDataPath = "../../../../Foodjson.json";

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * Get food data synchronously from Foodjson.json 
 * @returns foodjson as json
 */
function readFoodDataSync() {
  let rawData = fs.readFileSync(foodDataPath);
  return JSON.parse(rawData);
}

router.get('/food/team', (req, res, next) => {
  res.json({ team: "Food", memberNames: ["Jon Riley, Dillon Gorlesky, Dakota Thompson"] });
})

function calculateTaxAndSendJSON(tax, res) {
  let data = readFoodDataSync();
  for (let jsonObj of data) {
    let price = jsonObj.price + (jsonObj.price * tax);
    jsonObj.price = price.toFixed(2);
  }
  res.json(data);
}

router.get('/food/all/:location', (req, res) => {
  let location = req.params['location'].toLowerCase();
  let tax = 0;

  if (location === 'durham') {
    tax = 0.075;
    calculateTaxAndSendJSON(tax, res);
  }
  else if (location === 'raleigh') {
    tax = 0.08;
    calculateTaxAndSendJSON(tax, res);
  } 
  else {
    res.status(404);
    res.json(
      {
        "error": "No resource found",
        "message": "Cannot locate " + location,
      }
    )
  }

})


router.post('/food/add', (req, res, next) => {

  let foodStruct = {
    name: req.body.name,
    brand: req.body.brand,
    weight: req.body.weight,
    calories: Number(req.body.calories),
    price: Number(req.body.price)
  }

  // verify proper data type
  if (!foodStruct.calories || !foodStruct.price) {
    res.statusCode = 400;
    res.json(
      {
        "error": "Incorrect data sent",
        "message": "Error in setting props frrom body",
      }
    );
  } else {
    // modify foodjson to include new food item
    let data = readFoodDataSync();
    data.push(foodStruct)
    fs.writeFileSync(foodDataPath, JSON.stringify(data));

    // respond with verified json 
    res.json(foodStruct);
  }

});

module.exports = router;
