const fs = require('fs');

let read_json_file = () => {
    let file = './data/funServiceTeamNames.json';
    return fs.readFileSync(file);
};

exports.list = () => {
    return JSON.parse(read_json_file());
};

exports.query_team = (arg, value) => {
    let json_result = JSON.parse(read_json_file());
    // all addresses are stored in a "result" object
    let result = json_result.team;
    return result;
};