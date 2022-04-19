let request = require("request");
const base_url = "http://localhost:3021/fun/";
const teamtoys = {
    "name" : "toys",
    "memeberNames" : ["Thaddeus","Zack"]
}
const teamfood = {
    "name" : "food",
    "memeberNames" : ["Dillon","Jon"]
}
const teambikes = {
    "name" : "bikes",
    "memeberNames" : ["Joey","Jimmy"]
}


describe("GET /toys/team", () => {
it("returns JSON of team names", (done) => {
    request.get(base_url + "toys/team", (error, response, body) => {
      expect(body).toBe(JSON.stringify(teamtoys));
      done();
    });
});


describe("GET /food/team", () => {
    it("returns JSON of team names", (done) => {
        request.get(base_url + "food/team", (error, response, body) => {
          expect(body).toBe(JSON.stringify(teamfood));
          done();
        });
    });
});


describe("GET /bikes/team", () => {
    it("returns JSON of team names", (done) => {
        request.get(base_url + "bikes/team", (error, response, body) => {
          expect(body).toBe(JSON.stringify(teambikes));
          done();
        });
    });
});
});