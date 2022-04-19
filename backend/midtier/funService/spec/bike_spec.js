let request = require("request");
const base_url = "http://localhost:3021/fun/";
const durham_url = base_url + "bikes/all/durham";
const raleigh_url = base_url + "bikes/all/raleigh";

describe("Testing Bikes Endpoint", () => {

  describe("GET fun/bikes", () => {
    it("returns 404 on missing location", (done) => {
      request.get(base_url + "bikes/all/", (error, response, body) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    });


  });

  describe("Get fun/bikes/all/durham", () => {
    it("returns all of the bikes in durham", (done) => {
      request.get(durham_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body).length).toBe(4);
        expect(body).toContain("DJ Bikes");
        expect(body).toContain("Kobe");
        done();
      });
    });
  });

  describe("Get fun/bikes/all/raleigh", () => {
    it("returns all of the bikes in raliegh", (done) => {
      request.get(raleigh_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body).length).toBe(4);
        expect(body).toContain("DJ Bikes");
        expect(body).toContain("Kobe");
        done();
      });
    });
  });
});
