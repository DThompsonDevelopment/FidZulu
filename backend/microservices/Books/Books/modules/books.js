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

exports.add_book = (Book) => {
    //let list = this.list();
    let list = JSON.parse(read_json_file());
    list.push(Book);
    list = JSON.stringify(list);
    fs.writeFileSync(file, list);
}

