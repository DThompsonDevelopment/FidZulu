let request = require("request");
const fs = require('fs');

const base_url = "http://localhost:3032/";
const foodDataPath = "../../../../Foodjson.json";

console.log("Starting FoodService test");

describe("GET /food/all/Raleigh", () => {
    it("returns correct status code", (done) => {
        request.get(base_url, (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    it("returns updated prices", function (done) {
        request.get(base_url + "food/all/Raleigh",
            (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("3.08");
                expect(body).toContain("10.14");
                expect(body).toContain("2.65");
                expect(body).toContain("6.34");
                done();
            });
    });
});

describe("GET /food/all/Durham", () => {
    it("returns correct status code", (done) => {
        request.get(base_url + "food/all/Durham", (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    it("returns updated prices", function (done) {
        request.get(base_url + "food/all/Durham",
            (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain('3.06');
                expect(body).toContain("10.09");
                expect(body).toContain("2.63");
                expect(body).toContain("6.31");
                done();
            });
    });
});

describe("GET /food/all/NYC", () => {
    it("returns correct status code", (done) => {
        request.get(base_url + "food/all/NYC", (error, response, body) => {
            expect(response.statusCode).toBe(404);
            done();
        });
    });
});

describe("GET /food/team", () => {
    it("returns correct status code", (done) => {
        request.get(base_url + "food/team", (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it("returns full names of members of team Food", function (done) {
        request.get(base_url + "food/team",
            (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Jon Riley");
                expect(body).toContain("Dakota Thompson");
                expect(body).toContain("Dillon Gorlesky");
                expect(body).toContain("Food");
                done();
            });
    });
});

describe("POST /food/add", () => {
    let mockBodyData = {
        name: "Honey Nut Cheerios",
        brand: "Cheerios",
        weight: "300g",
        calories: 400,
        price: 5.99
    }
    const requestData = {
        url: base_url + "food/add",
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: mockBodyData,
        json: true
    }


    function readFoodDataSync() {
        let rawData = fs.readFileSync(foodDataPath);
        return JSON.parse(rawData);
    }

    function addFoodItemTeardown(fileData) {
        fs.writeFileSync(foodDataPath, JSON.stringify(fileData));
    }

    it('returns correct status code and length', (done) => {
        let dataFromFile_beforePost = readFoodDataSync();

        request.post(requestData, (error, response, body) => {
            let dataFromFile_afterPost = readFoodDataSync();
            expect(response.statusCode).toBe(200);
            expect(dataFromFile_afterPost.length).toBe(dataFromFile_beforePost.length + 1);

            // teardown
            addFoodItemTeardown(dataFromFile_beforePost);
            done();
        })
    });

    it('returns correct object from body', (done) => {
        let dataFromFile_beforePost = readFoodDataSync();

        request.post(requestData, (error, response, body) => {
            // body returned 
            expect(body).toBeTruthy()

            // verify props
            for (let key in mockBodyData) {
                expect(mockBodyData[key]).toBe(body[key]);
            }

            // teardown
            addFoodItemTeardown(dataFromFile_beforePost);
            done();

        });
    });

    it('returns error from invalid data', (done) => {
        requestData.body.calories = "wrong type";
        request.post(requestData, (error, response, body) => {
            // expect body to return error json
            expect(response.statusCode).toBe(400);
            expect(body.error).toBe("Incorrect data sent");
            expect(body.message).toBe("Error in setting props frrom body");

            done();
        })
    });

    it("returns error from no body", (done) => {
        requestData.body = {};
        request.post(requestData, (error, response, body) => {
         // expect body to return error json
         expect(response.statusCode).toBe(400);
         expect(body.error).toBe("Incorrect data sent");
         expect(body.message).toBe("Error in setting props frrom body");
            
        done();
        });
    })

});
