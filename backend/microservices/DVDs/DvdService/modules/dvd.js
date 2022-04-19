const fs = require('fs');

const LocationsalesTax = {
  raleigh: 0.075,
  durham: 0.08,
};
let read_json_file = () => {
  let file = './data/DVDsjson.json';
  return fs.readFileSync(file);
};



exports.list = () => {
  return JSON.parse(read_json_file());
};

exports.query_with_salesTax = (param) => {
  param = param.toLowerCase();
  let json_result = JSON.parse(read_json_file());
  console.log("query with salesTax: ");
  if (!LocationsalesTax.hasOwnProperty(param)) {
    console.log("Entered city not  found");
    throw new Error('City Tax Value not defined');
  }
  json_result.forEach((dvd) => {
    if (LocationsalesTax[param] < 0) {
      console.log('Tax defined is negative');
      throw new Error('Internal Server Error while getting prices');
    }
    let price = dvd.price * (1 + LocationsalesTax[param]);
    dvd.price = Math.round(price * 100) / 100;
  });
  return json_result;
};

exports.addDvd = (body) => {
  if (
    !body.hasOwnProperty("title") ||
    !body.hasOwnProperty("mpaa_rating") ||
    !body.hasOwnProperty("studio") ||
    !body.hasOwnProperty("time") ||
    !body.hasOwnProperty("price") ||
    Object.keys(body).length !== 5
  ) {
    throw new Error("Bad Dvd");
  }

  var json = JSON.parse(read_json_file());
  json.push(body);
  fs.writeFileSync('./data/DVDsjson.json', JSON.stringify(json));
  return json;

}
