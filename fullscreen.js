//Code to add a fullscreen widget and make games fullscreen
//this can skip some ads removePrerollAndDisplayGame()

//function to make element fulscreen
function fullscreen () {
  let game = document.getElementById("swfgamewrapper")
  game.requestFullscreen();
}

//create a fullscreen link element
var center = document.createElement("center")
var fullscreen = document.createElement("button");
fullscreen.innerText = "fullscreen";
fullscreen.id = "fullscreen-hack";
fullscreen.href = "/"
fullscreen.addEventListener("click", function (e) {
  e.preventDefault()
  let game = document.getElementById("html5game")
  game.requestFullscreen();
});
//add fullscreen link to appropriate place
var gamewrapper = document.getElementById("swfgamewrapper");
center.append(fullscreen)
gamewrapper.append(center);

//finally, skip the ads
removePrerollAndDisplayGame()

//remove addblock message
var adblock = document.getElementsByClassName("blocker-detected-2");
adblock.remove();
