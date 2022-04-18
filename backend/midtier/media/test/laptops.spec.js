const request = require("request");
const base_url = 'http://localhost:3022/media/';
const usnc_url = base_url + 'laptops?location=US-NC';
const ie_url = base_url + 'laptops?location=IE';
const in_url = base_url + 'laptops?location=IN';




describe("Testing laptops Endpoints", () => {
    //negative testing
    //bad requests returns 400
    describe("GET media/laptops?location=<location>", () => {
        it("returns 400 on missing location", (done) => {
            request.get(base_url+'laptops', (error, response, body) => {
                expect(response.statusCode).toBe(400);
                done();
            });
        });
        it("returns 404 on unknown arguments", (done) => {
            request.get(base_url+'laptops?country=mexico', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    //happy path
    describe("GET media/laptops?location=US-NC", () => {
        it("returns a list of laptops", (done) => {
            request.get(usnc_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                //check contents of body to ensure a list of laptops
                expect(body).toBeTruthy();
                expect(body).toContain("");
                done();
            });
        });
    });

    describe("GET media/laptops?location=IE", () => {
        it("returns a list of laptops", (done) => {
            request.get(usnc_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                //check contents of body to ensure a list of laptops
                expect(JSON.parse(body).length).toBe(4);
                expect(body).toContain("ThinkPad T430s");
                expect(body).toContain("MacBook Pro");
                done();
            });
        });
    });

    describe("GET media/laptops?location=IN", () => {
        it("returns a list of laptops", (done) => {
            request.get(usnc_url, (error, response, body) => {
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