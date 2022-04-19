const request = require("request");
const base_url = 'http://localhost:3022/media/';
const durham_url = base_url + 'books/all/durham';
const raleigh_url = base_url + 'books/all/raleigh';




describe("Testing Books Endpoints", () => {
    //negative testing
    //bad requests returns 400
    describe("GET media/books", () => {
        it("returns 404 on missing location", (done) => {
            request.get(base_url+'books', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    //happy path
    describe("GET media/books/all/durham", () => {
        it("returns a list of books", (done) => {
            request.get(durham_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                //check contents of body to ensure a list of books
                expect(JSON.parse(body).length).toBe(4);
                expect(body).toContain("9780261102385");
                expect(body).toContain("0064471195");
                done();
            });
        });
    });

    describe("GET media/books/all/raleigh", () => {
        it("returns a list of books", (done) => {
            request.get(raleigh_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                //check contents of body to ensure a list of books
                expect(JSON.parse(body).length).toBe(4);
                expect(body).toContain("9780261102385");
                expect(body).toContain("0064471195");
                done();
            });
        });
    });
})