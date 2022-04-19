let request = require("request");
const base_url = "http://localhost:3021/fun/";
const team = {
  'team': 'Fun Team',
  'membersnames': ['Vahe', 'Peter', 'Mike']
};
console.log("Starting test");
xdescribe("First Node Test Server", () => {
  describe("GET /", () => {
    it("returns status code 200", (done) => {
      request.get(base_url + "team", (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it("returns JSON of team names", (done) => {
      request.get(base_url + "team", (error, response, body) => {
        expect(body).toBe(JSON.stringify(team));
        done();
      });

    });
    it("returns 404 error with wrong uri", (done) =>{
      request.get(base_url + "tieams", (error,response,body) =>{
        expect(response.statusCode).toBe(404);
        done();
      });
    });
  });
});
