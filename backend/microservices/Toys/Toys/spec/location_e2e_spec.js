const request = require("request");

const base_url = 'http://localhost:3033/';
const contacts_url = base_url + 'toys/all/raleigh';



describe("First Node Test Server", () => {
    describe("GET /toys/all/:location", () => {
        it("returns 21.94 for Fisher-Price Medical Kit", function (done) {
            request.get("http://localhost:3033/toys/all/raleigh",
                (error, response, body) => {
                    const obj = JSON.parse(body);
                    expect(obj[0].price).toBeTruthy();
                    //  console.log(obj[0].price);
                    expect(obj[0].price).toEqual(21.94);
                    done();
                });
        });
        it("returns 22.04 for Fisher-Price Medical Kit", function (done) {
            request.get("http://localhost:3033/toys/all/durham",
                (error, response, body) => {
                    const obj = JSON.parse(body);
                    expect(obj[0].price).toBeTruthy();
                    // console.log(obj[0].price);
                    expect(obj[0].price).toEqual(22.04);
                    done();
                });
        });
        it("returns 200 for valid location of durham", (done) => {
            request.get("http://localhost:3033/toys/all/durham",
                (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
        });
        it("returns 200 for valid location of raleigh", (done) => {
            request.get("http://localhost:3033/toys/all/raleigh",
                (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
        });
        it("returns 404 for invalid location", (done) => {
            request.get("http://localhost:3033/toys/all/adafsdfasd",
                (error, response, body) => {
                    expect(response.statusCode).toBe(404);
                    done();
                });
        });

    });
    describe("GET /toys/team", () => {
        it("returns returns the correct team members", function (done) {
            request.get("http://localhost:3033/toys/team",
                (error, response, body) => {
                    const obj = JSON.parse(body);
                    expect(obj[0].membersNames).toBeTruthy();
                    expect(obj[0].membersNames[0]).toEqual("Zach Schulman");
                    expect(obj[0].membersNames[1]).toEqual("Thaddeus Tutka");
                    done();
                });
        });
        it("returns 200 for team members get", (done) => {
            request.get("http://localhost:3033/toys/team",
                (error, response, body) => {
                    expect(response.statusCode).toBe(200);
                    done();
                });
        });
    });
});