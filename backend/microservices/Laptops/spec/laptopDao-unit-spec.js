let request = require("request");
const fs = require('fs');
let laptopDao = require("../modules/laptopDao");

describe("Unit Tests on Tax Calculation of Laptops", () => {
    describe("Load All Laptops", () => {
        it("has four laptops", () => {
            let res = laptopDao.list();
            expect(res.length).toBe(4);
        });
    });

    describe("load correct prices for Durham", () => {
        let res = laptopDao.calculateTax("Durham");
        // res = JSON.stringify(res);
        expect(res[0].price).toBe(351.0972);
        expect(res[1].price).toBe(671.5224000000001);
        expect(res[2].price).toBe(496.77840000000003);
        expect(res[3].price).toBe(3239.9892);
        
    });

    describe("load correct prices for Raleigh", () => {
        let res = laptopDao.calculateTax("Raleigh");
        // res = JSON.stringify(res);
        expect(res[0].price).toBe(349.47175);
        expect(res[1].price).toBe(668.4135);
        expect(res[2].price).toBe(494.4785);
        expect(res[3].price).toBe(3224.9892499999996);
        
    });

    describe("Load NULL reponse for invalid location", () =>{
        let res = laptopDao.calculateTax("test");

        expect(res).toBe(null);
    });
});
describe("Tests for adding", () => {
    describe("adding laptop", () => {
        it("it should add to .json file", () => {
            let before = fs.readFileSync('./data/Laptopsjson.json');
            let list = JSON.parse(before);
            expect(list.length).toBe(4);
            let laptop = {product:'test T430s', brand:'test', CPU:'test i5-3320',memory:'test',price:1111};
            laptopDao.addLaptop(laptop);
            let after = fs.readFileSync('./data/Laptopsjson.json');
            let newlist = JSON.parse(after);
            expect(newlist.length).toBe(5);

            fs.writeFileSync('./data/Laptopsjson.json', before);
        });
    });
});
