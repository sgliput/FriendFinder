var friends = require("../data/friends.js");


module.exports = function (app) {


    app.get('/api/friends', function (request, response) {
        response.json(friends);
    });

    app.get('/api/friendList', function (request, response) {
        response.json(friends);
    });

    app.post("/api/friends", function (request, response) {
        var newFriend = request.body;
        var totalDifference = 0;
        var scores = [];
        for (var i = 0; i < friends.length; i++) {
            for (var j = 0; j < newFriend.answerArray.length; j++) {
                var num1 = parseInt(newFriend.answerArray[j]);
                var num2 = parseInt(friends[i].answerArray[j]);
                
                    totalDifference += Math.abs(num1 - num2);
                console.log(totalDifference);
                
            }
            scores.push(totalDifference);
            friends[i].difference = totalDifference;
            totalDifference = 0;
        };


               var matchScore = Math.min(...scores);
               var badMatchScore = Math.max(...scores);

               var match = [];
               var badMatch = [];
               for(var k = 0; k < friends.length; k++){
                   if(friends[k].difference === matchScore){
                    match.push(friends[k]);
                   }
                   if(friends[k].difference === badMatchScore){
                    badMatch.push(friends[k]);
                   }
               }
                    
        
        console.log(match);
        console.log(badMatch);
        var matches = {
            bestMatch: match,
            worstMatch: badMatch
        };


        response.json(matches);
    });

};


// var matchScore = Math.min(...scores);
//                var badMatchScore = Math.max(...scores);

               
//                for(var k = 0; k < friends.length; k++){
//                    if(friends[k].difference === matchScore){
//                     var match = friends[k];
//                    }
//                    if(friends[k].difference === badMatchScore){
//                     var badMatch = friends[k];
//                    }
//                }