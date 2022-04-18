let request = require("request");
const { parseJSONFile, getJSON, applyTax } = require("../utils/bikeDao");
const base_url = "http://localhost:3031/";
console.log("Starting test");

const bikes = [
  {
    name: 'Mamba Sport 12" Balance Bike',
    brand: "Mamba Bikes",
    color: "black",
    price: 75.88,
  },
  {
    name: "DJ Fat Bike 500W",
    brand: "DJ Bikes",
    color: "grey",
    price: 1599.86,
  },
  {
    name: "Kobe Aluminum Balance",
    brand: "Kobe",
    color: "blue",
    price: 88.56,
  },
  {
    name: "Pomona Men's Cruiser Bike",
    brand: "Northwoods",
    color: "silver",
    price: 221.36,
  },
];

const alteredBikes = [
  {
    name: 'Mamba Sport 12" Balance Bike',
    brand: "Mamba Bikes",
    color: "black",
    price: 81.57,
  },
  {
    name: "DJ Fat Bike 500W",
    brand: "DJ Bikes",
    color: "grey",
    price: 1719.85,
  },
  {
    name: "Kobe Aluminum Balance",
    brand: "Kobe",
    color: "blue",
    price: 95.2,
  },
  {
    name: "Pomona Men's Cruiser Bike",
    brand: "Northwoods",
    color: "silver",
    price: 237.96,
  },
];

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
        name: 'Mamba Sport 12" Balance Bike',
        brand: "Mamba Bikes",
        color: "black",
        price: 81.95,
      };

      const durham_url = base_url + "bikes/all/durham";
      request.get(durham_url, (error, response, body) => {
        expect(body).toBeTruthy();
        expect(JSON.parse(body)).toContain(bike);
        done();
      });
    });

    it("testing Raleigh location", (done) => {
      let bike = {
        name: 'Mamba Sport 12" Balance Bike',
        brand: "Mamba Bikes",
        color: "black",
        price: 81.57,
      };

      const raleigh_url = base_url + "bikes/all/raleigh";
      request.get(raleigh_url, (error, response, body) => {
        expect(body).toBeTruthy();
        expect(JSON.parse(body)).toContain(bike);
        done();
      });
    });

    it("returns 204 when searching for location that does not exist", (done) => {
      request.get(
        base_url + "bikes/all/smithfield",
        (error, response, body) => {
          expect(response.statusCode).toBe(204);
          done();
        }
      );
    });

    it("returns 500 when using wrong file type", (done) => {
      expect(() => parseJSONFile("../data/sda.j")).toThrow(
        new Error("file error")
      );
      done();
    });

    it("returns 500 when using wrong file type", (done) => {
      expect(() => parseJSONFile("../data/blah.txt")).toThrow(
        new Error("file error")
      );
      done();
    });

    it("returns 404 with bad path", (done) => {
      request.get(base_url + "bikes/all", (error, response, body) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    });

    it("returns 404 with bad path", (done) => {
      request.get(base_url + "bikes", (error, response, body) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    });

    it("should parse JSON file", () => {
      expect(getJSON("raleigh", null)).toEqual(bikes);
    });

    it("should tax each bike", () => {
      expect(applyTax(bikes, "raleigh")).toEqual(alteredBikes);
    });
  });
  describe("Testing /bikes/team", () => {
    it("testing returns correct data", (done) => {
      let team = {
        team: "bikes",
        memberNames: ["Joseph Buono", "Jimmy Lin"],
      };

      const team_url = base_url + "bikes/team";
      request.get(team_url, (error, response, body) => {
        expect(body).toBeTruthy();
        expect(JSON.parse(body)).toEqual(team);
        done();
      });
    });
  });
});
