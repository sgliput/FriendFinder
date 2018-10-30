var express = require("express");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app'));






//Start the server
app.listen(port, function () {
    console.log("App listening on port " + port);
});