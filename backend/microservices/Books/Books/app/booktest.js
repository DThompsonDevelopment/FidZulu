var express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3034, () => {
    console.log("Server listening to port 3034");
});
