let request = require("request");
const base_url = "http://localhost:3021/fun/";
const durham_url = base_url + "toys/all/durham";
const raleigh_url = base_url + "toys/all/raleigh";

describe("Testing Food Endpoint", () => {
  const toysraleigh = {"name":"Medical Kit","brand":"Fisher-Price","age_group":"3 to 9","price":21.94};
  const toysDurham = {"name":"Medical Kit","brand":"Fisher-Price","age_group":"3 to 9","price":22.04};

  describe("GET fun/toys", () => {
    it("returns 404 on missing location", (done) => {
      request.get(base_url + "toys/all/", (error, response, body) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    });

  });

  describe("Get fun/toys/all/durham", () => {
    it("returns all of the toys in durham", (done) => {
      request.get(durham_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
         expect(JSON.parse(body).length).toBe(4);
         expect(JSON.parse(body)).toContain(toysDurham);
        //  expect(body).toContain("Medical Kit");
        //  expect(body).toContain("Fisher-Price");
        //  expect(body).toContain("3 to 9");
        //  expect(body).toContain(20.41);
        done();
      });
    });
  });

  describe("Get fun/toys/all/raleigh", () => {
    it("returns all of the toys in raliegh", (done) => {
      request.get(raleigh_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body)).toContain(toysraleigh);
        // expect(body).toContain("Ferry Boat");
        // expect(body).toContain("Green Toys");
        // expect(body).toContain("3 to 6");
        // expect(body).toContain(13.26);
        done();
      });
    });
  });
})