
var path = require("path");
var fs = require("fs");


module.exports = function(app){

//Home page
app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
});

//Survey page
app.get('/survey', function (request, response) {
    response.sendFile(path.join(__dirname, "../public/survey.html"));
    
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

// app.post("../survey"), function (request, response){
//     fs.writeFile("log.txt", response.body, function(err){
//         if (err) throw err;
//         console.log(response.body);
//     });
// };
};
