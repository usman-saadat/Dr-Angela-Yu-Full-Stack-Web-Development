
// Detecting Button Clicks/Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML); //we are sending that CLICKED button to this function to play relevant sound
        buttonAnimation (buttonInnerHTML);
    });
}

// Detecting Keyboard Press

document.addEventListener ("keydown", function (event) { //and if key PRESSED is detected instead of click, pass that key's 'event object' to callback function
    makeSound (event.key) // then send 'key property' (whatever key was pressed) of the event to that makeSound function
    buttonAnimation(event.key);
})


function makeSound(key) { // here we switch them based on the parameter
    switch (key) {
        case "w": // then we play relevant sound depending on which key was passed in
            var tom1 = new Audio("/3. Drum Kit Starting Files/sounds/tom-1.mp3");
            tom1.play();

            break;

        case "a":
            var tom2 = new Audio("/3. Drum Kit Starting Files/sounds/tom-2.mp3");
            tom2.play();

            break;

        case "s":
            var tom3 = new Audio("/3. Drum Kit Starting Files/sounds/tom-3.mp3");
            tom3.play();

            break;

        case "d":
            var tom4 = new Audio("/3. Drum Kit Starting Files/sounds/tom-4.mp3");
            tom4.play();

            break;

        case "j":
            var snare = new Audio("/3. Drum Kit Starting Files/sounds/snare.mp3");
            snare.play();

            break;

        case "k":
            var crash = new Audio("/3. Drum Kit Starting Files/sounds/crash.mp3");
            crash.play();

            break;

        case "l":
            var kickBass = new Audio("/3. Drum Kit Starting Files/sounds/kick-bass.mp3");
            kickBass.play();

            break;

        default: console.log(buttonInnerHTML)
    }
}

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey) // selecting class of key that is pressed
    activeButton.classList.add("pressed"); //adding the class to that button
    setTimeout(function() { //to remove that class
        activeButton.classList.remove("pressed");
    }, 100);
}