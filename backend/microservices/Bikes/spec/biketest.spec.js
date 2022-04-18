let request = require("request");
const base_url = "http://localhost:3031/";
console.log("Starting test");
describe("Testing HTTP Endpoints", () => {
  describe("Testing /bikes/all/:location", () => {
    /* it("returns status code 200", (done) => {
    request.get(base_url, (error, response, body) => {
    expect(response.statusCode).toBe(200);
    done();
    });
    }); */

    it("testing Durham location", (done) => {
        let bike = {
            "name": "Mamba Sport 12\" Balance Bike",
            "brand": "Mamba Bikes",
            "color": "black",
            "price": 81.95
        };

        const durham_url = base_url + 'bikes/all/durham';
        request.get(durham_url, (error, response, body) => {
            expect(body).toBeTruthy();
            expect(JSON.parse(body)).toContain(bike);
            done();
      });
    
    });

    it("testing Raleigh location", (done) => {
        let bike = {
            "name": "Mamba Sport 12\" Balance Bike",
            "brand": "Mamba Bikes",
            "color": "black",
            "price": 81.57
        };

        const raleigh_url = base_url + 'bikes/all/raleigh';
        request.get(raleigh_url, (error, response, body) => {
            expect(body).toBeTruthy();
            expect(JSON.parse(body)).toContain(bike);
            done();
      });
  });

  it("returns 204 when searching for location that does not exist", (done) => {
    request.get(base_url + 'bikes/all/smithfield', 
        (error, response, body) => {
            expect(response.statusCode).toBe(204);
            done();
    });
});
});
    describe("Testing /bikes/team", () => {
        it("testing returns correct data", (done) => {
            let team = {
                team: "bikes",
                 memberNames: ["Joseph Buono", "Jimmy Lin"]
              };
    
            const team_url = base_url + 'bikes/team';
            request.get(team_url, (error, response, body) => {
                expect(body).toBeTruthy();
                expect(JSON.parse(body)).toEqual(team);
                done();
          });
        
        });
    });
});
