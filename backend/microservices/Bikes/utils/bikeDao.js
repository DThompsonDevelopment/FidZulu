const fs = require("fs");
const createError = require("http-errors");

const salesTax = {
  raleigh: 0.075,
  durham: 0.08,
};

const parseJSONFile = (fileName) => {
  const file = fileName;
  let read = undefined;
  let parsed = undefined;
  try {
    read = fs.readFileSync(file);
  } catch (err) {
    throw new Error("file error");
  }

  try {
    parsed = JSON.parse(read);
  } catch (err) {
    throw new Error("json error");
  }
  return parsed;
};

const applyTax = (bikes, param) => {
  const alteredBikes = bikes.map((bike) => {
    let price = bike.price * (1 + salesTax[param]);
    bike.price = Math.round(price * 100) / 100;
    return bike;
  });

  return alteredBikes;
};

const getJSON = (param, next) => {
  if (!Object.keys(salesTax).includes(param.toLowerCase())) {
    console.log(`${param} not in`);
    next(createError(204));
  } else {
    console.log("got into /bikes/all/:location " + param);
    console.log(salesTax[param]);
    const bikes = parseJSONFile("./data/Bikejson.json");

    return bikes;
  }

  };

  const getJSONPost = () => {

    const bikes = parseJSONFile("./data/Bikejson.json");

    return bikes;
  };

  function addBike(body){
    var json = getJSONPost();
    json.push(body);
    console.log(json);

    fs.writeFileSync("./data/Bikejson.json",JSON.stringify(json));

    return json;
  };

module.exports = {
  parseJSONFile,
  applyTax,
  getJSON,
  addBike
};
