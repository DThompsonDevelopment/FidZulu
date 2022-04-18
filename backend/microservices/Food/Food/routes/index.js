const fs = require("fs");
var express = require('express');
var router = express.Router();
const createError = require('http-errors');

const foodDataPath = "../../../../Foodjson.json";

/* GET home page. */
router.get('/', function(req, res, next) {
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
  res.json({team: "Food", membersNames: ["Jon Riley, Dillon Gorlesky, Dakota Thompson"]});
})

router.get('/food/all/:location', (req, res) => {
  let loc = req.params;
  let tax = 0;
  if(/\b[Dd][Uu][Rr][Hh][Aa][Mm]\b/g.test(loc.location)){//Durham location
    tax = 0.075; //7.5% Tax
  } else if(/\b[Rr][Aa][Ll][Ee][Ii][Gg][Hh]\b/g.test(loc.location)){//Raleigh location
    tax = 0.08; //8% Tax
  } else {
    //Throw error
    console.log("Caught exception.");

    res.status(404);
    res.json({
      "error": "No resources found",
      "message": "Cannot locate"
    })
  }

  let data = readFoodDataSync();
  for(let jsonObj of data){
    let price = jsonObj.price + (jsonObj.price * tax);
    jsonObj.price = price.toFixed(2);
  }
  res.json(data);  
})

//router.post();
router.post('/food/add', (req, res, next) => {

  let foodStruct = {
    name: req.query.name,
    brand: req.query.brand,
    weight: req.query.weight,
    calories: req.query.calories,
    price: req.query.price
  }

  // make sure struct is populated
  for (let query in foodStruct) {
    if (query) {
      res.statusCode = 400;
      res.write(`Error ${res.statusCode}: Bad query ${query}\n`);
    }
  }

  // modify foodjson to include new food item
  let data = readFoodDataSync();
  data.push(newFoodItem)
  fs.writeFileSync(foodDataPath, JSON.stringify(data));
  
  // respond with verified json 
  res.json(newFoodItem);

});

module.exports = router;
