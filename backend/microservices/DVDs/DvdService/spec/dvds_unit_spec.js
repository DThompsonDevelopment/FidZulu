let request = require("request");
let dvds = require("../modules/dvd");


describe("Unit tests on Dvds module", () => {
    describe("load all dvds", () => {
        //positive test to load all dvds
        it("have four elements", () => {
            let results = dvds.list();
            expect(results.length).toBe(4);
        });
        
        it("has correct  elements property", () => {
            let results = dvds.list();
            expect(results[0].title).toBe("Avengers - Infinity War");
            expect(results[0].mpaa_rating).toBe("PG-13");
            expect(results[0].studio).toBe("MARVEL");
            expect(results[0].time).toBe(149);
            expect(results[0].price).toBe(18.55);
            
        });
    });

    
    
});