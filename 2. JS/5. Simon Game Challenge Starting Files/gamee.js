var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber]; //This line selects a random color based on the random number’s index in the buttonColours array.
    // console.log(randomChosenColour); // by running nextSequence() in console
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern)

    // Using jQuery to select the button with the same id as the randomChosenColour and to animate a flash to the button selected
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    // Using JS to play sound for selected button
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

}

// Using jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function () { // when the button is clicked, run the following code
    var userChosenColour = $(this).attr('id'); // to store the id of the button that got clicked.
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern)
})

