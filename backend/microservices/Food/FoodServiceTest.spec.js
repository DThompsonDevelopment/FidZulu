let request = require("request");

const base_url = "http://localhost:3032/fun/";

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
                expect(body).toContain("2.63");
                expect(body).toContain("6.31");
                done();
        });
    });
});

describe("GET /food/all/Durham", () => {
    it("returns correct status code", (done) => {
        request.get(base_url, (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    it("returns updated prices", function (done) {
        request.get(base_url + "food/all/Durham", 
            (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("3.06");
                expect(body).toContain("10.09");
                expect(body).toContain("2.65");
                expect(body).toContain("6.34");
                done();
        });
    });
});

describe("GET /food/all/NYC", () => {
    it("returns correct status code", (done) => {
        request.get(base_url, (error, response, body) => {
            expect(response.statusCode).toBe(404);
            done();
        });
    });
});

describe("GET /food/team", () => {
    it("returns correct status code", (done) => {
        request.get(base_url, (error, response, body) => {
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
