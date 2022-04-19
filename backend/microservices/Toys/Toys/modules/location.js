const fs = require('fs');

let read_json_file = () => {
    let file = './data/toys.json';
    return fs.readFileSync(file);
}

exports.list = () => {
    return JSON.parse(read_json_file());
};

exports.tax = (toys, param) => {
    if (param == "raleigh") {
        for(let i = 0; i < toys.length; i++){
            toys[i].price = Math.round((toys[i].price * 1.075) * 100) / 100;
        }
        return toys;
    }
    else if(param == "durham") {
        for(let i = 0; i < toys.length; i++){
            toys[i].price = Math.round((toys[i].price * 1.08) * 100) / 100;
        }
       return toys;
    }
    else {
        toys = null;
        return toys;
    }
}
