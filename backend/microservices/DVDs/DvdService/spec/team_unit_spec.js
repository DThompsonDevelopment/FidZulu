let request = require("request");
let dvdteam = require("../modules/team");

describe("Unit tests on dvd team module", () => {
    describe("load all contacts", () => {
        //positive test to load all contacts
        it("have two elements", () => {
            let results = dvdteam.list();
            expect(results.length).toBe(1);
        });
        it("has correct  elements property", () => {
            let results = dvdteam.list();
            expect(results[0].team).toBe("dvd");
            expect(results[0].members).toContain("Pawan Raj Adhikari");
            expect(results[0].members).toContain("Bigyan Adhikari");
           
            
        });
        
    });
});





    
    

