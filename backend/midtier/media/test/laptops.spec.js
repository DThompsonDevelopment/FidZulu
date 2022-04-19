const request = require("request");
const base_url = 'http://localhost:3022/media/';
const durham_url = base_url + 'laptops/all/durham';
const raleigh_url = base_url + 'laptops/all/raleigh';




describe("Testing laptops Endpoints", () => {
    //negative testing
    //bad requests returns 400
    describe("GET media/laptops", () => {
        it("returns 400 on missing location", (done) => {
            request.get(base_url+'laptops', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    //happy path
    describe("GET media/laptops/all/durham", () => {
        it("returns a list of laptops", (done) => {
            request.get(durham_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                //check contents of body to ensure a list of laptops
                expect(JSON.parse(body).length).toBe(4);
                expect(body).toContain("ThinkPad T430s");
                expect(body).toContain("MacBook Pro");
                done();
            });
        });
    });

    describe("GET media/laptops/all/raleigh", () => {
        it("returns a list of laptops", (done) => {
            request.get(raleigh_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                //check contents of body to ensure a list of laptops
                expect(JSON.parse(body).length).toBe(4);
                expect(body).toContain("ThinkPad T430s");
                expect(body).toContain("MacBook Pro");
                done();
            });
        });
    });
})