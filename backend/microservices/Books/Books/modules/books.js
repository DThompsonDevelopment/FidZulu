const fs = require('fs');
let read_json_file = () => {
    let file = './data/Booksjson.json';
    return fs.readFileSync(file);
}

exports.list = function() {
    return JSON.parse(read_json_file());
}

exports.get_raleigh = function() {
    let json_result = JSON.parse(read_json_file());
    for (let i = 0; i < json_result.length; i ++){
        let newPrice = json_result[i].price * .925;
        json_result[i].price = Math.round(newPrice * 100) / 100;
    }
    return json_result;
}

exports.get_durham = function() {
    let json_result = JSON.parse(read_json_file());
    for (let i = 0; i < json_result.length; i ++){
        let newPrice = json_result[i].price * .92;
        json_result[i].price = Math.round(newPrice * 100) / 100;
    }
    return json_result;
}

