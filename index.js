var numberOf = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOf; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);


        /*function handlefunc() {
            
        }*/
        this.style.color = "white";
    });
}
document.addEventListener("keypress", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
});

function makeSound(key) {

    switch (key) {
        case "w":
            var tom_1 = new Audio('sounds/tom-1.mp3');
            tom_1.play();
            break;

        case "a":
            var tom_2 = new Audio('sounds/tom-2.mp3');
            tom_2.play();
            break;

        case "s":
            var tom_3 = new Audio('sounds/tom-3.mp3');
            tom_3.play();
            break;

        case "d":
            var tom_4 = new Audio('sounds/tom-4.mp3');
            tom_4.play();
            break;

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "k":
            var kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
            break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        default:
            break;

    }
}

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");

    }, 100);
}