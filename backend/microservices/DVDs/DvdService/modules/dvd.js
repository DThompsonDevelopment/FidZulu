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
    let json_result = JSON.parse(read_json_file());
    console.log("query with salesTax: ");
    if(!LocationsalesTax.hasOwnProperty(param)){
      console.log("Entered city not  found");
      throw new Error('City Tax Value not defined');
    }
    json_result.forEach((dvd) => {
        let price = dvd.price * (1 + LocationsalesTax[param]);
        dvd.price = Math.round(price * 100) / 100;
      });
    return json_result;
};
