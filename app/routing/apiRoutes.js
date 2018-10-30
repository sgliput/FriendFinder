var express = require("express");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/friends', function (request, response) {
    response.sendFile(path.join(__dirname, "survey.html"));
});

app.post("/api/friends", function (request, response) {
        var newFriend = request.body;
        friends.push(newFriend);
        response.json(newFriend);
});