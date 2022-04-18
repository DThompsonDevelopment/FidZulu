let request = require("request");
const base_url = "http://localhost:3034/books/all";
console.log("Starting test");

describe("Testing Get /", () => {
    describe("GET /", () => {

        it("returns status code 200", (done) => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        }); 

        it("Testing Length", (done) => {
            request.get(base_url, (error, response, body) => {
                parsed_body = JSON.parse(body);
                expect(parsed_body.length).toBe(4);
                done();
            });
        });

        it("Testing First Book Exists", (done) => {
            request.get(base_url, (error, response, body) => {
                parsed_body = JSON.parse(body)[0];
                expect(parsed_body["Title"]).toBe('Lord of the Rings');
                expect(parsed_body["Author"]).toBe('J.R.R Tolkien');
                expect(parsed_body["price"]).toBe(25.99);
                expect(parsed_body["ISBN"]).toBe('9780261102385');
                expect(parsed_body["publisher"]).toBe('HarperCollins');
                done();
            });
        });

        it("Testing Second Book Exists", (done) => {
            request.get(base_url, (error, response, body) => {
                parsed_body = JSON.parse(body)[1];
                expect(parsed_body["Title"]).toBe('The Hobbit');
                expect(parsed_body["Author"]).toBe('J.R.R Tolkien');
                expect(parsed_body["price"]).toBe(9.88);
                expect(parsed_body["ISBN"]).toBe('0261102214');
                expect(parsed_body["publisher"]).toBe('HarperCollins');
                done();
            });
        });

        it("Testing Third Book Exists", (done) => {
            request.get(base_url, (error, response, body) => {
                parsed_body = JSON.parse(body)[2];
                expect(parsed_body["Title"]).toBe("Lord of Souls");
                expect(parsed_body["Author"]).toBe("Greg Keyes");
                expect(parsed_body["price"]).toBe(12.98);
                expect(parsed_body["ISBN"]).toBe("0345508025");
                expect(parsed_body["publisher"]).toBe("Del Rey");
                done();
            });
        });

    });

    describe("GET /raleigh", () => {
        it("returns status code 200", (done) => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        }); 

        it("Testing Length", (done) => {
            request.get(base_url, (error, response, body) => {
                parsed_body = JSON.parse(body);
                expect(parsed_body.length).toBe(4);
                done();
            });
        });

        it("Testing First Book Exists", (done) => {
            request.get(base_url, (error, response, body) => {
                parsed_body = JSON.parse(body)[0];
                expect(parsed_body["Title"]).toBe('Lord of the Rings');
                expect(parsed_body["Author"]).toBe('J.R.R Tolkien');
                expect(parsed_body["price"]).toBe(25.99);
                expect(parsed_body["ISBN"]).toBe('9780261102385');
                expect(parsed_body["publisher"]).toBe('HarperCollins');
                done();
            });
        });

        
        

    });



    describe("GET /Durham", () => {

        it("returns status code 200", (done) => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                done();
            });
        }); 

        it("Testing First Book", (done) => {
            request.get(base_url, (error, response, body) => {
                parsed_body = JSON.parse(body)[0];
                expect(parsed_body["Title"]).toBe('Lord of the Rings');
                expect(parsed_body["Author"]).toBe('J.R.R Tolkien');
                expect(parsed_body["price"]).toBe(23.91);
                expect(parsed_body["ISBN"]).toBe('9780261102385');
                expect(parsed_body["publisher"]).toBe('HarperCollins');
                done();
            });
        });

        it("Testing Second Book", (done) => {
            request.get(base_url, (error, response, body) => {
                parsed_body = JSON.parse(body)[1];
                expect(parsed_body["Title"]).toBe('The Hobbit');
                expect(parsed_body["Author"]).toBe('J.R.R Tolkien');
                expect(parsed_body["price"]).toBe(9.09);
                expect(parsed_body["ISBN"]).toBe('0261102214');
                expect(parsed_body["publisher"]).toBe('HarperCollins');
                done();
            });
        });


    });








});
