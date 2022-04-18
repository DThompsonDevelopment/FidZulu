const fs = require('fs');
let read_json_file = () => {
    let file = './data/Booksjson.json';
    return fs.readFileSync(file);
}

exports.list = function() {
    return JSON.parse(read_json_file());
}

exports.get_all_with_tax = (arg, value) => {
    let json_result = JSON.parse(read_json_file());
    let result = json_result.result
    
    for (let i = 0; i < result.length; i ++){
        
    }
}

exports.get_team_details = (arg, value) => {
    
}