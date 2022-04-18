const fs = require('fs');

let read_json_file = () => {
    console.log("json file reader")
    let file = './data/toys.json';
    return fs.readFileSync(file);
}

exports.list = () => {
    return JSON.parse(read_json_file());
};

exports.query_by_arg = (arg, value) => {
    console.log("query methond");
    let json_result = JSON.parse(read_json_file());
    // all addresses are stored in a "result" object
    let result = json_result.result;
    console.log("query by arg: " + arg + " " + value);
    // for (let i = 0; i < result.length; i++) {
    //     let city = result[i];
    //     if (city[arg] === value) {
    //         return city;
    //     }
    // }
    return result;
};
