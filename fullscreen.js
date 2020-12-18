//Code to add a fullscreen widget and make games fullscreen
//this can skip some ads removePrerollAndDisplayGame()

//function to make element fulscreen
function fullscreen() {
  let game = document.getElementById("swfgamewrapper")
  game.requestFullscreen();
}

//create a fullscreen link element

var fullscreen = document.createElement("a");
fullscreen.innerText = fullscreen;
fullscreen.id = "fullscreen-hack";
fullscreen.href = "/"
fullscreen.addEventListener("click, fucntion (e) {
  e.preventDefault()
  fullscreen()
});
