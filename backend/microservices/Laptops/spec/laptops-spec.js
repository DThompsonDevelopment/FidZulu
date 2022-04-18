const request = require("request");

const base_url = 'http://localhost:3035/';
const laptop_url = base_url + 'laptops';

describe("Laptops Test Server", function () {
    describe("GET /laptops/all/Durham", () => {
        it("return status code 200", (done) => {
            request.get(laptop_url + '/all/Durham', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("contains Laptops with Durham Pricing", (done) => {
            request.get(laptop_url + '/all/Durham', (error, response, body) => {
                expect(body).toBeTruthy();
                
                //brand check
                expect(body).toContain("Lenovo");

                //product check
                expect(body).toContain("MacBook Air");

                //Price Return Check
                let obj = JSON.parse(body);
                expect(obj[2].product).toBe("Ideapad 330");
                expect(obj[2].price).toBe(496.77840000000003);

                done();
            });
        });
    });

    describe("GET /laptops/all/Raleigh", () => {
        it("return status code 200", (done) => {
            request.get(laptop_url + '/all/Raleigh', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("contains Laptops with Raleigh Pricing", (done) => {
            request.get(laptop_url + '/all/Raleigh', (error, response, body) => {
                expect(body).toBeTruthy();
                
                //brand check
                expect(body).toContain("Lenovo");

                //product check
                expect(body).toContain("MacBook Air");

                //Price Return check
                let obj = JSON.parse(body);
                expect(obj[2].product).toBe("Ideapad 330");
                expect(obj[2].price).toBe(494.4785);

                done();
            });
        });
    });

    describe('NEGATIVE TESTS', () => {
        it("should return 404 Due to Bad URL", (done) => {
            request.get(laptop_url, (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });

        it("should return 404 Due to Bad location", (done) => {
            request.get(laptop_url + '/all/Durhen', (error, response, body) => {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });

    describe("GET /laptops/team", () => {
        it("should return 200", (done) => {
            request.get(laptop_url + '/team', (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

        it("should contain team member names", (done) => {
            request.get(laptop_url + '/team', (error, response, body) => {
                expect(body).toBeTruthy();
                expect(body).toContain("Nayaab Chogle");
                expect(body).toContain("Barry Ng");
                done();
            });
        });
    });


});