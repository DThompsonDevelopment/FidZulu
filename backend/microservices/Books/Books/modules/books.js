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
        json_result[i].price = json_result[i].price * .925; //this doesn't work
        return json_result[i];
    }
    return null;
}

// exports.get_durham = function() {
//     let json_result = JSON.parse(read_json_file());
//     let result = json_result.result;
//     for (let i = 0; i < result.length; i ++){
//         let currBook = result[i]
//         currBook.price = currBook.price * .92; //this doesn't work
//         return currBook;
//     }
//     return null;
// }

