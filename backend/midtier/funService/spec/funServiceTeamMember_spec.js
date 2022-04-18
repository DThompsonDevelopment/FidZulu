let request = require("request");
const base_url = "http://localhost:3021/fun";
let team = require("../modules/team_names");
console.log("Starting test");
describe("First Node Test Server", () => {
  describe("GET /", () => {
    it("returns status code 200", (done) => {
      request.get(base_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it("returns JSON of team names", (done) => {
      request.get(base_url + "team", (error, response, body) => {
        expect(body).toBe(team);
        done();
      });
    });
  });
});
