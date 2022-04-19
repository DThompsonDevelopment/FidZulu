let request = require("request");
const base_url = "http://localhost:3021/fun/";
const durham_url = base_url + "food/all/durham";
const raleigh_url = base_url + "food/all/raleigh";

describe("Testing Food Endpoint", () => {

  describe("GET fun/food", () => {
    it("returns 400 on missing location", (done) => {
      request.get(base_url + "food", (error, response, body) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    });

  });

  describe("Get fun/food/all/durham", () => {
    it("returns all of the food in durham", (done) => {
      request.get(durham_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body).length).toBe(4);
        expect(body).toContain("Peanut Butter");
        expect(body).toContain("KRAFT");
        expect(body).toContain("2000g");
        expect(body).toContain(726);
        expect(body).toContain(9.39);
        done();
      });
    });
  });

  describe("Get fun/food/all/raleigh", () => {
    it("returns all of the food in raliegh", (done) => {
      request.get(raleigh_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body).length).toBe(4);
        expect(body).toContain("Peanut Butter");
        expect(body).toContain("KRAFT");
        expect(body).toContain("2000g");
        expect(body).toContain(726);
        expect(body).toContain(9.39);
        done();
      });
    });
  });
})
