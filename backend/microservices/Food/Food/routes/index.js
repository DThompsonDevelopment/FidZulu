const fs = require("fs");
var express = require('express');
var router = express.Router();

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
