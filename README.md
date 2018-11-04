# FriendFinder

## Deployed Project

https://mysterious-anchorage-55055.herokuapp.com/ 

## Use

This FriendFinder app using an Express server is similar to a dating app in that it accepts user input (name, image link, and answers to ten questions) and returns the closest match from an API of other people. On the survey page, if the user does not fill all fields and button groups before submitting, a modal reminds them to do so.

When all is filled out and the submit button is pressed, the user's answers are sent to be compared and pushed to the API. A modal then displays the person whose answers most closely match the user's (a list of the closest matches if there is a tie), and a button allows the user to toggle between their best match and their worst match (the person or persons whose answers were most different).

Clicking the first link at the bottom displays a listing of all the names and images from the API in a column on the right. Clicking the second link shows the API as JSON data.

## Behind the Scenes

The app requires the express and path NPM packages. The API array of friend objects is located in the friends.js file. The GET request routes for displaying the HTML pages and the routes for connecting to the API are also in separate files (htmlRoutes.js and apiRoutes.js) that are exported to the server.js file. The GET request for displaying the API as JSON data uses the "/api/friends" route, while the GET request for generating the API names and images in a column uses the "/api/friendList" route.

The code and logic for comparing the user's answers to everyone else's are found in the POST method function for the "/api/friends" route. The absolute value of the differences between each question value are added up to determine the closest and worst matches. If statements also ensure that the same names and images are not repeatedly added to the API and that the user is not returned their own information if they submit more than once.

The front-end javascript uses the responses from its get and post requests to change the HTML content of the pop-up modal, looping through the arrays of best and worst matches, and the right column, looping through the whole API.
