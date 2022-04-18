const request = require("request");
const base_url = 'http://localhost:3022/media/';
const usnc_url = base_url + 'dvds?location=US-NC';
const ie_url = base_url + 'dvds?location=IE';
const in_url = base_url + 'dvds?location=IN';




describe("Testing dvds Endpoints", () => {
    //negative testing
    //bad requests returns 400
    describe("GET media/dvds?location=<location>", () => {
        it("returns 400 on missing location", (done) => {
            request.get(base_url+'dvds', (error, response, body) => {
                expect(response.statusCode).toBe(400);
                done();
            });
        });
        it("returns 404 on unknown arguments", (done) => {
            request.get(base_url+'dvds?country=mexico', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    //happy path
    describe("GET media/dvds?location=US-NC", () => {
        it("returns a list of dvds", (done) => {
            request.get(usnc_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                //check contents of body to ensure a list of dvds
                expect(body).toBeTruthy();
                expect(body).toContain("");
                done();
            });
        });
    });

    describe("GET media/dvds?location=IE", () => {
        it("returns a list of dvds", (done) => {
            request.get(usnc_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                //check contents of body to ensure a list of dvds
                expect(JSON.parse(body).length).toBe(4);
                expect(body).toContain("Avengers - Infinity War");
                expect(body).toContain("Captain America");
                done();
            });
        });
    });

    describe("GET media/dvds?location=IN", () => {
        it("returns a list of dvds", (done) => {
            request.get(usnc_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                //check contents of body to ensure a list of dvds
                expect(JSON.parse(body).length).toBe(4);
                expect(body).toContain("Avengers - Infinity War");
                expect(body).toContain("Captain America");
                done();
            });
        });
    });
})