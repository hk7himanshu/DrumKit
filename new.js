var numberof = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberof; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //this.style.color = "white";
        var buttonof = this.innerHTML;
        makesound(buttonof);

        buttonanimation(buttonof);



    });
}
document.addEventListener("keypress", function(event) {
    makesound(event.key);
    buttonanimation(event.key)
});

function makesound(key) {
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
            var kick_base = new Audio('sounds/kick-bass.mp3');
            kick_base.play();
            break;

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        default:
            alert("Wrong input");

    }
}

function buttonanimation(currentkey) {
    var animation = document.querySelector("." + currentkey);
    animation.classList.add("pressed");
    setTimeout(function() {
        animation.classList.remove("pressed");

    }, 100);
}
``