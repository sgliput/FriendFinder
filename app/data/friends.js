var express = require("express");
var path = require("path");
var app = express();

var friendsArray = [

    {
        nameValue: "Jenny Liang",
        imageURL: "http://runwayriot.com/wp-content/uploads/2016/08/GettyImages-532017884.jpg",
        answerArray: [5, 3, 5, 5, 3, 4, 5, 3, 5, 3]
    },
    {
        nameValue: "David Sweck",
        imageURL: "http://hollywoodneuz.us/wp-content/uploads/2013/08/Tom-Hardy-1-787x1024.jpg",
        answerArray: [2, 3, 5, 5, 2, 3, 3, 3, 4, 4]
    },
    {
        nameValue: "Cezar Carvalhaes",
        imageURL: "http://www4.pictures.zimbio.com/gi/Power+Season+Two+Series+Premiere+Arrivals+oBonI8j7LVTx.jpg",
        answerArray: [4, 1, 2, 1, 2, 3, 1, 1, 3, 2]
    },
    {
        nameValue: "Steve Mustanski",
        imageURL: "http://images.mid-day.com/images/2017/feb/23Tom-Hanks-1.jpg",
        answerArray: [4, 2, 5, 4, 4, 5, 3, 2, 2, 4]
    },
    {
        nameValue: "Ryan Weston",
        imageURL: "http://az801229.vo.msecnd.net/wetpaint/2015/11/chris-pine-mustache.jpg",
        answerArray: [5, 5, 5, 3, 4, 2, 1, 3, 5, 2]
    }
];

module.exports = friendsArray;

app.get("../public/survey.html", function (request, response) {
    console.log("This is your object: " + request.body);
    response.json("Received");
});