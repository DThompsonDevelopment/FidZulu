let request = require("request");
const base_url = "http://localhost:3021/fun/";
const durham_url = base_url + "food/all/durham";
const raleigh_url = base_url + "food/all/raleigh";

describe("Testing Food Endpoint", () => {

  const expectedFoodsDurham = 
  {"name":"The Original Sandwich","brand":"Oreo","weight":"303g","calories":405,"price":"3.06"};
  // {"name":"Peanut Butter","brand":"KRAFT","weight":"2000g","calories":726,"price":"10.09"},
  // {"name":"Beef Ravioli","brand":"Chef Boyardee","weight":"425g","calories":250,"price":"2.63"},
  // {"name":"Medium Cheddar Cheese","brand":"MOON CHEESE","weight":"57g","calories":525,"price":"6.31"};

  const expectedFoodsRaleigh = 
  {"name":"The Original Sandwich","brand":"Oreo","weight":"303g","calories":405,"price":"3.08"};
  // {"name":"Peanut Butter","brand":"KRAFT","weight":"2000g","calories":726,"price":"10.14"},
  // {"name":"Beef Ravioli","brand":"Chef Boyardee","weight":"425g","calories":250,"price":"2.65"},
  // {"name":"Medium Cheddar Cheese","brand":"MOON CHEESE","weight":"57g","calories":525,"price":"6.34"}]
  
  describe("GET fun/food", () => {
    it("returns 400 on missing location", (done) => {
      request.get(base_url + "food/all/", (error, response, body) => {
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
        expect(JSON.parse(body)).toContain(expectedFoodsDurham);
        // expect(body).toContain("Peanut Butter");
        // expect(body).toContain("KRAFT");
        // expect(body).toContain("2000g");
        // expect(body).toContain(726);
        // expect(body).toContain(9.39);
        done();
      });
    });
  });

  describe("Get fun/food/all/raleigh", () => {
    it("returns all of the food in raliegh", (done) => {
      request.get(raleigh_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(body).length).toBe(4);
        expect(JSON.parse(body)).toContain(expectedFoodsRaleigh);
        // expect(body).toContain("Peanut Butter");
        // expect(body).toContain("KRAFT");
        // expect(body).toContain("2000g");
        // expect(body).toContain(726);
        // expect(body).toContain(9.39);
        done();
      });
    });
  });
})
