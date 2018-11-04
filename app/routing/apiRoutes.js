var friends = require("../data/friends.js");


module.exports = function (app) {

    //Route for returning API information as JSON
    app.get('/api/friends', function (request, response) {
        response.json(friends);
    });

    //Route for returning API information to display in right column
    app.get('/api/friendList', function (request, response) {
        response.json(friends);
    });

    //Route for posting new friends and returning matches
    app.post("/api/friends", function (request, response) {
        var newFriend = request.body;

        var totalDifference = 0;
        var scores = [];
        //Loops through friends array
        for (var i = 0; i < friends.length; i++) {
            //If the current survey taker's name or image are not already in the API
            if (newFriend.nameValue !== friends[i].nameValue || newFriend.imageURL !== friends[i].imageURL) {
                //Loops through the answerArray of the current survey taker, subtracting each answer value from the corresponding answer value in each potential friend's answerArray
                for (var j = 0; j < newFriend.answerArray.length; j++) {
                    var num1 = parseInt(newFriend.answerArray[j]);
                    var num2 = parseInt(friends[i].answerArray[j]);
                    //Adds up the absolute value of the difference as totalDifference
                    totalDifference += Math.abs(num1 - num2);
                    console.log(totalDifference);

                }
            //Pushes each totalDifference to the scores array
            scores.push(totalDifference);
            //Adds the difference key to each friends object, with its value as totalDifference
            friends[i].difference = totalDifference;
            }
            //Resets totalDifference for the next loop
            totalDifference = 0;
        };

        //Finds the minimum and maximum value in the scores array
        var matchScore = Math.min(...scores);
        var badMatchScore = Math.max(...scores);

        var match = [];
        var badMatch = [];
        //Loops through the friends array
        for (var k = 0; k < friends.length; k++) {
            //If the difference key value matches the minimum in the scores array, it is pushed to the match array
            if (friends[k].difference === matchScore) {
                match.push(friends[k]);
            }
            //If the difference key value matches the maximum in the scores array, it is pushed to the badMatch array
            if (friends[k].difference === badMatchScore) {
                badMatch.push(friends[k]);
            }
        }


        console.log(match);
        console.log(badMatch);
        //Contains the match and badMatch in an object for return to the front end
        var matches = {
            bestMatch: match,
            worstMatch: badMatch
        };

        var notThere = true;
        //Loops through the friends array to see if the current survey taker's name or image are already present
        for (var l = 0; l < friends.length; l++) {
            if (newFriend.nameValue == friends[l].nameValue || newFriend.imageURL == friends[l].imageURL) {
                notThere = false;
            }
        };
        //If the current survey taker is not already in the API, his/her information is added to the friends array
        if (notThere) {
            friends.push(newFriend);
        }
        //The matches object is returned to the front end for display
        response.json(matches);
    });

};
