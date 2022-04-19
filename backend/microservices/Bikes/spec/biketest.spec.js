let request = require("request");
var fs = require("fs");
const {
  parseJSONFile,
  getJSON,
  applyTax,
  getJSONPost,
} = require("../utils/bikeDao");
var _ = require("lodash");
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

let beforeJson;
let afterJson;

beforeEach(() => {
  beforeJson = parseJSONFile("./data/Bikejson.json");
});
afterEach(() => {
  afterJson = parseJSONFile("./data/Bikejson.json");
  if (!_.isEqual(beforeJson, afterJson)) {
    console.log("overwrite");
    fs.writeFileSync("./data/Bikejson.json", JSON.stringify(beforeJson));
  }
});

describe("Testing HTTP Endpoints", () => {
  describe("Testing /bikes/all/:location", () => {
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

    it("should parse JSON file", () => { //util
      expect(getJSON("raleigh", null)).toEqual(bikes);
    });

    it("should tax each bike", () => { //util
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

    describe("Testing /bikes/add", () => {
      it("testing bike gets added", (done) => {
        let test = {
          name: "bike",
          brand: "brand",
          color: "color",
          price: 100.36,
        };

        const oldSize = getJSONPost().length;

        const url = base_url + "bikes/add";
        request(
          {
            url: url,
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: test,
            json: true,
          },
          () => {
            const bikes = getJSONPost();
            const newSize = bikes.length;

            expect(newSize).toBe(oldSize + 1);
            expect(bikes).toContain(test);
            done();
          }
        );
      });

      it("testing error handling", (done) => {
        let test = {
          nameo: "bike",
          brand: "brand",
          color: "color",
          price: 100.36,
        };

        const oldSize = getJSONPost().length;

        const url = base_url + "bikes/add";
        request(
          {
            url: url,
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: test,
            json: true,
          },
          (error, response, body) => {
            const bikes = getJSONPost();
            const newSize = bikes.length;

            expect(response.statusCode).toBe(500);
            expect(newSize).toBe(oldSize);
            done();
          }
        );
      });

      it("testing error handling", (done) => {
        let test = {
          name: "bike",
          brand: "brand",
          color: "color",
          price: 100.36,
          gender: "",
        };

        const oldSize = getJSONPost().length;

        const url = base_url + "bikes/add";
        request(
          {
            url: url,
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: test,
            json: true,
          },
          (error, response, body) => {
            const bikes = getJSONPost();
            const newSize = bikes.length;

            expect(response.statusCode).toBe(500);
            expect(newSize).toBe(oldSize);
            done();
          }
        );
      });
    });
  });
});
