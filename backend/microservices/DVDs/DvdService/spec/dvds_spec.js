const request = require("request");
const base_url = 'http://localhost:3035/';
const dvdslocation_url = base_url + 'dvds/all/';

describe("First Node Test Server", function () {
    describe("GET /dvds/all/:location(durham)", () => {
        it("returns status code 200",  (done) => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });
        it("contains all dvds with sales tax price for durham", (done) => {
            const location  = 'durham';
            let testdvd1 = {
                "title": "Spider-Man Homecoming",
                "mpaa_rating": "14 and over",
                "studio": "Sony Pictures Home Entertainment",
                "time": 133,
                "price": 7.81
            };
            let testdvd2 =  {
                "title": "Ant-Man",
                "mpaa_rating": "PG-13",
                "studio": "Walt Disney Video",
                "time": 117,
                "price": 21.58
            };
            request.get(dvdslocation_url+location, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(JSON.parse(body)).toContain(testdvd1);
                expect(JSON.parse(body)).toContain(testdvd2);
                done();
            });
        });

        it("contains all dvds with sales tax price for durham", (done) => {
            const location  = 'raleigh';
            let testdvd1 = {
                "title": "Avengers - Infinity War",
                "mpaa_rating": "PG-13",
                "studio": "MARVEL",
                "time": 149,
                "price": 19.94
            };
            let testdvd2 = {
                "title": "Spider-Man Homecoming",
                "mpaa_rating": "14 and over",
                "studio": "Sony Pictures Home Entertainment",
                "time": 133,
                "price": 7.77
            };
            request.get(dvdslocation_url+location, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(JSON.parse(body)).toContain(testdvd1);
                expect(JSON.parse(body)).toContain(testdvd2);
                done();
            });
        });
    });
    // test for wrong path and expect 404
   describe("GET /dvds", () => {
        // accessing wrong path
        it("returns status code 404",  (done) => {
            request.get(base_url + "dvds", (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });

        it("returns status code 500 if city with tax not defined entered",  (done) => {
            request.get(dvdslocation_url+'dallas' + "dvds", (error, response, body) => {
                expect(response.statusCode).toBe(500);
                done();
            });
        });
    });


});