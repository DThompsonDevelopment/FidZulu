const request = require("request");
const base_url = 'http://localhost:3035/';

describe("GET /dvd/team", () => {
    it("returns correct status code", (done) => {
        request.get(base_url, (error, response, body) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

// test for wrong path and expect 404
describe("GET /dvdss", () => {

    it("returns status code 404", (done) => {
        request.get(base_url + "dvdss", (error, response, body) => {
            expect(response.statusCode).toBe(404);
            done();
        });
    });
});