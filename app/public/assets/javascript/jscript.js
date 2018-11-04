 //When the submit button is clicked
 $(".submit").on("click", function (event) {
    event.preventDefault();
    //If all 10 questions have been answered
    if ($("input[name!=example]:checked").length == 10 && $("#nameInput").val() !== "" && $("#imageLink").val() !== "") {
        //Pushes all the values of the checked radio buttons to an array
        var answers = [];
        for (var i = 1; i < 11; i++) {
            answers.push(parseInt(document.querySelector('input[name="value' + i + '"]:checked').value));
        }
        //The answer array, the name, and the image link are included in the self object
        var self = {
            nameValue: $("#nameInput").val(),
            imageURL: $("#imageLink").val(),
            answerArray: answers
        };
        console.log(self);

        var worst = false;
        $(".modal-footer").show();

        //POST method connects to api/friends route and sends the self object, receiving back the data object
        $.post("/api/friends", self, function (data) {
            if (data) {
                console.log(data);


                //Loops through bestMatch array to append all results in the modal body
                for (var i = 0; i < data.bestMatch.length; i++) {
                    $(".modal-body").append(
                        `<p>Name: ${data.bestMatch[i].nameValue}</p>
                <img class="photo" src="${data.bestMatch[i].imageURL}" alt="Photo of ${data.bestMatch[i].nameValue}" width="200px" height="250px"><br><br>
                <span class="line"></span>
                <br><br>
                `);
                };

                //Changes the modal title to Friend/Friends depending on the number of results
                //Must come after the for loop because it modifies the span element with class="line", which is created in the loop
                if (data.bestMatch.length > 1) {
                    $(".modal-title").text("Your Best Friends To Be");
                    $(".line").text("_________________________");
                } else {
                    $(".modal-title").text("Your Best Friend To Be");
                };

                //When the worstMatch button is clicked, it toggles between the best and worst match
                $(".worstMatch").on("click", function () {
                    //If it's on the best match modal and will switch to the worst
                    if (!worst) {

                        //Empties modal body to avoid appending one result to another
                        $(".modal-body").empty();
                        //Loops through worstMatch array to append all results in the modal body
                        for (var j = 0; j < data.worstMatch.length; j++) {
                            $(".modal-body").append(
                                `<p>Name: ${data.worstMatch[j].nameValue}</p>
                <img class="photo" src="${data.worstMatch[j].imageURL}" alt="Photo of ${data.worstMatch[j].nameValue}" width="200px" height="250px"><br><br>
                <span class="line"></span>
                <br><br>
                
                `);
                        }

                        //Changes the modal title to Friend/Friends depending on the number of results
                        if (data.worstMatch.length > 1) {
                            $(".modal-title").text("Your Worst Friends To Be");
                            $(".line").text("_________________________");
                        } else {
                            $(".modal-title").text("Your Worst Friend To Be");
                        };
                        //Changes the button text
                        $(".worstMatch").text("Want to see your best match?");
                        worst = true;
                        //Else if it's one the worst match screen and will switch to the best
                    } else {

                        //Empties modal body to avoid appending one result to another
                        $(".modal-body").empty();
                        //Loops through bestMatch array to append all results in the modal body
                        for (var k = 0; k < data.bestMatch.length; k++) {
                            $(".modal-body").append(
                                `<p>Name: ${data.bestMatch[k].nameValue}</p>
                <img class="photo" src="${data.bestMatch[k].imageURL}" alt="Photo of ${data.bestMatch[k].nameValue}" width="200px" height="250px"><br><br>
                <span class="line"></span>
                <br><br>
                
                `);

                            //Changes the modal title to Friend/Friends depending on the number of results
                            if (data.bestMatch.length > 1) {
                                $(".modal-title").text("Your Best Friends To Be");
                                $(".line").text("_________________________");
                            } else {
                                $(".modal-title").text("Your Best Friend To Be");
                            };
                            //Changes the button text
                            $(".worstMatch").text("Want to see your worst match?");
                            worst = false;
                        };
                    };

                });
            }
        });
        //Else if all questions have not been answered
    } else {
        //The button is hidden, and the user is reminded to answer all questions
        $(".modal-footer").hide();
        $(".modal-title").text("How are we supposed to make a good match for you...");
        $(".modal-body").html(
            `<p>...if you don't answer every question?</p>
                <img class="photo" src="http://newthingcreations.com/wp-content/uploads/2015/07/woman-wagging-finger.jpg" alt="Wagging Finger" width="200px" height="250px">
                `);
    }
});

//When the X in the modal is clicked to close it, the modal's body is emptied and its title and button revert to the "Best Match" defaults
$(".close").on("click", function () {
    worst = false;
    $(".modal-title").text("Your Best Friend To Be");
    $(".worstMatch").text("Want to see your worst match?");
    $(".modal-body").empty();
});

//When the allFriends link is clicked, a GET operation generates a list of all potential friends from the API into the right column
$(".allFriends").on("click", function () {
    $.ajax({ url: "/api/friendList", method: "GET" })
        .then(function (data) {

            // Logs the data object received to the console
            console.log(data);
            console.log("------------------------------------");
            //Variable grabs the whole right column, replacing its HTML
            var friendColumn = $("#right");
            friendColumn.html("<h1 class='friendList'>Potential Friends</h1><br>");


            // Loops through and display each of the potential friends
            for (var i = 0; i < data.length; i++) {

                friendColumn.append(`
      ________________
      <br><br>
      <h2>${data[i].nameValue}</h2>
      <img class="photo" src="${data[i].imageURL}" alt="Friend Photo ${i + 1}" width="100px" height="100px">
        <br><br>
      
      `);
            };
            friendColumn.append("<br><br><button class='changeBack'>Close Friend List</button><br><br>");
        });
});

//When the changeBack button is clicked, it replaces the friend list in the right column with the original HTML, the form example
$(document).on("click", ".changeBack", function () {
    var valueColumn = $("#right");
    valueColumn.html(`
<div class="form-check fixed">
                <h2><u>Button Values</u></h2>
                <br><br>
               <input type="radio" name="example" value="1"><b>1 (Strongly Disagree)</b>
                <br><br>
                <input type="radio" name="example" value="2"><b>2 (Somewhat Disagree)</b>
                <br><br>
                <input type="radio" name="example" value="3"><b>3 (Neutral)</b>
                <br><br>
                <input type="radio" name="example" value="4"><b>4 (Somewhat Agree)</b>
                <br><br>
                <input type="radio" name="example" value="5"><b>5 (Strongly Agree)</b>
            </div>
`);
});