
var path = require("path");

module.exports = function (app) {

    //Connects to survey page
    app.get('/survey', function (request, response) {
        response.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //Connects to home page if anything but "survey" follows the base URL
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};

