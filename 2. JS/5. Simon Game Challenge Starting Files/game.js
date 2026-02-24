var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];
var started = false; 
var level = 0;

// Start the game
$(document).keydown(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }

});

// create a new pattern
function nextSequence () {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber]; 
    gamePattern.push(randomChosenColour);
    // Show sequence to user with animations and sounds
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}

// Check when button is pressed
$(".btn").click(function () { 
    var userChosenColour = $(this).attr('id'); 
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern)
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})

// Add sounds to button clicks
function playSound (name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Add animations to User Clicks
function animatePress (currentColour) {
    $("#" + currentColour).addClass("pressed")

    setTimeout (function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}


// Check the User's Answer Against the Game Sequence
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
        
    } else {
        console.log("wrong");

        // Game Over
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key To Restart");

        startOver();
    }
}

function startOver () {
    level = 0 ;
    gamePattern = [];
    started = false;
}
