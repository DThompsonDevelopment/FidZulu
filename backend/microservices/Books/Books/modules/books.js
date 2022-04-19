const fs = require('fs');
let read_json_file = () => {
    let file = './data/Booksjson.json';
    let read = undefined;
    try {
        read = fs.readFileSync(file);
    } catch (err) {
        throw new Error("Error reading JSON file");
    }

    return read;
}

exports.list = function() {
    let parsed = undefined;
    try {
        parsed = JSON.parse(read_json_file());
    } catch (err) {
        throw new Error("Error parsing JSON");
    }

    return parsed;
}

exports.get_raleigh = function() {
    let json_result = JSON.parse(read_json_file());
    for (let i = 0; i < json_result.length; i ++){
        let newPrice = json_result[i].price * 1.075;
        json_result[i].price = Math.round(newPrice * 100) / 100;
    }
    return json_result;
}

exports.get_durham = function() {
    let json_result = JSON.parse(read_json_file());
    for (let i = 0; i < json_result.length; i ++){
        let newPrice = json_result[i].price * 1.08;
        json_result[i].price = Math.round(newPrice * 100) / 100;
    }
    return json_result;
}

exports.add_book = (body) => {
    let list = this.list();
    list.push(body);
    list = JSON.stringify(list);
    fs.writeFileSync(file, list);
}

