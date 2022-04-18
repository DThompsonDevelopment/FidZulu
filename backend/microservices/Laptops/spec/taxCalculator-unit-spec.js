let request = require("request");
let taxCalculator = require("../modules/taxCalculator");

describe("Unit Tests on Tax Calculation of Laptops", () => {
    describe("Load All Laptops", () => {
        it("has four laptops", () => {
            let res = taxCalculator.list();
            expect(res.length).toBe(4);
        });
    });

    describe("load correct prices for Durham", () => {
        let res = taxCalculator.calculateTax("Durham");
        // res = JSON.stringify(res);
        expect(res[0].price).toBe(351.0972);
        expect(res[1].price).toBe(671.5224000000001);
        expect(res[2].price).toBe(496.77840000000003);
        expect(res[3].price).toBe(3239.9892);
        
    });

    describe("load correct prices for Raleigh", () => {
        let res = taxCalculator.calculateTax("Raleigh");
        // res = JSON.stringify(res);
        expect(res[0].price).toBe(349.47175);
        expect(res[1].price).toBe(668.4135);
        expect(res[2].price).toBe(494.4785);
        expect(res[3].price).toBe(3224.9892499999996);
        
    });

    describe("Load NULL reponse for invalid location", () =>{
        let res = taxCalculator.calculateTax("test");

        expect(res).toBe(null);
    })
});
