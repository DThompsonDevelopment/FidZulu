let request = require("request");
let location = require("../modules/location");

describe("Unit tests on locations module", () => {
    describe("load all toys", () => {
        //positive test to load all contacts
        it("have four elements", () => {
            let results = location.list();
            console.log(results);
            expect(results.length).toBe(4);
            expect(results[0].name).toBe("Medical Kit");
            expect(results[0].brand).toBe("Fisher-Price");
            expect(results[0].age_group).toBe("3 to 9");
            expect(results[0].price).toBe(20.41);
            expect(results[1].name).toBe("Ferry Boat");
            expect(results[2].name).toBe("Rock-a-Stack");
            expect(results[3].name).toBe("Stack Up Cups");
        });
    });
/*
[{"name":"Medical Kit","brand":"Fisher-Price","age-group":"3 to 9","price":22.04}
*/


    // describe("load specific toy", () => {
    //     //positive test to load contact by last name
    //     it("with last name Smith", () => {
    //         let results = contacts.query_by_arg("lastname", "Smith");  // ACT

    //         expect(results.firstname).toBe("Joe"); // ASSERT
    //     });
    //     //positive test to load contact by first name
    //     it("with first name John", () => {
    //         let results = contacts.query_by_arg("firstname", "John");
    //         expect(results.lastname).toBe("Douglas");
    //     });
    //     //exception test to load contact by cell phone (argument does not exists)
    //     it("with cell phone number +00000", () => {
    //         expect( () => {
    //             contacts.query_by_arg("cellphone", "+000000");
    //         }).toThrow("Unknown parameter cellphone");
    //     });
    //     //negative test to load contact by cell phone (value does not exists)
    //     it("with first name Max", () => {
    //         let results = contacts.query_by_arg("firstname", "Max");
    //         expect(results).toBeNull();
    //     });
       
    // });

});
