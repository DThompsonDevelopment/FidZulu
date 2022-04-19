const fs = require('fs');

let read_json_file = () => {
    let file = './data/Laptopsjson.json';
    return fs.readFileSync(file);
};

exports.list = () => {
    return JSON.parse(read_json_file());
};

exports.addLaptop = (laptop) => {
    let list = this.list();
    list.push(laptop);
    list = JSON.stringify(list);
    fs.writeFileSync('./data/Laptopsjson.json', list);
};

exports.calculateTax = (location) => {
    let result = JSON.parse(read_json_file());


    for (let i = 0; i < result.length; i++){
        if(location.toLowerCase() === "raleigh"){
            result[i].price *= 1.075;
        }
        else if(location.toLowerCase() === "durham"){
            result[i].price *= 1.08;
        }
        else {
           // throw new Error("Unknown location " + location);
           return null;
        }
    }
    return result;
};
