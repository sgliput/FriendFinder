var express = require("express");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Home page
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, "home.html"));
});

//Reservations page
app.get('/survey', function (request, response) {
    response.sendFile(path.join(__dirname, "survey.html"));
});