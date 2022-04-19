const request = require("request");
const base_url = 'http://localhost:3022/media/';
const durham_url = base_url + 'dvds/all/durham';
const raleigh_url = base_url + 'dvds/all/raleigh';




describe("Testing dvds Endpoints", () => {
    //negative testing
    //bad requests returns 400
    describe("GET media/dvds", () => {
        it("returns 400 on missing location", (done) => {
            request.get(base_url+'dvds', (error, response, body) => {
                expect(response.statusCode).toBe(400);
                done();
            });
        });
        it("returns 404 on unknown arguments", (done) => {
            request.get(base_url+'dvds/all/rhodeisland', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    //happy path
    describe("GET media/dvds/all/durham", () => {
        it("returns a list of dvds", (done) => {
            request.get(durham_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
                //check contents of body to ensure a list of dvds
                expect(JSON.parse(body).length).toBe(4);
                expect(body).toContain("Avengers - Infinity War");
                expect(body).toContain("Captain America");
                done();
            });
        });
    });

    describe("GET media/dvds/all/raleigh", () => {
        it("returns a list of dvds", (done) => {
            request.get(raleigh_url, (error, response, body) => {
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