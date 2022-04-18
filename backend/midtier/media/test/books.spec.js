const request = require("request");
const base_url = 'http://localhost:3022/media/';
const usnc_url = base_url + 'books?location=US-NC';
const ie_url = base_url + 'books?location=IE';
const in_url = base_url + 'books?location=IN';




describe("Testing Books Endpoints", () => {
    //negative testing
    //bad requests returns 400
    describe("GET media/books?location=<location>", () => {
        it("returns 400 on missing location", (done) => {
            request.get(base_url+'books', (error, response, body) => {
                expect(response.statusCode).toBe(400);
                done();
            });
        });
        it("returns 404 on unknown arguments", (done) => {
            request.get(base_url+'books?country=mexico', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    //happy path
    describe("GET media/books?location=US-NC", () => {
        it("returns a list of books", (done) => {
            request.get(usnc_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                //check contents of body to ensure a list of books
                expect(body).toBeTruthy();
                expect(body).toContain("");
                done();
            });
        });
    });

    describe("GET media/books?location=IE", () => {
        it("returns a list of books", (done) => {
            request.get(usnc_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                //check contents of body to ensure a list of books
                expect(body).toContain("");
                done();
            });
        });
    });

    describe("GET media/books?location=IN", () => {
        it("returns a list of books", (done) => {
            request.get(usnc_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                //check contents of body to ensure a list of books
                expect(body).toContain("");
                done();
            });
        });
    });
})