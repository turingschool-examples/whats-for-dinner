// Create variables targetting the relevant DOM elements here.
var cookPotImg = document.querySelector('#svg-cookpot');
// var choice = document.querySelectorAll("input");
var cook = document.querySelector('.cook');
var shouldMake = document.querySelector("#you-make");
var clearButton = document.querySelector("#clear");
var dishState = document.querySelector("#dish-state");
var mainState = document.querySelector("#main-state");
var yourPick = "";
// Add your event listeners here
cook.addEventListener("click", changetoDish);

// Create your event handlers and other functions here.
function unhideDish(element) {
  element.classList.remove('hidden-dish');
}

function unhideMain(element) {
  element.classList.remove('hidden-main');
}

function hideMain(element) {
  element.classList.add('hidden-main');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function checkRadioButtons() {
  var choice = document.querySelectorAll("input");
  for (var i = 0; i < choice.length; i++) {
    if (choice[i].checked === true) {
      yourPick = choice[i].value;
    }
  }
}

function changetoDish() {
  event.preventDefault();
  hideMain(cookPotImg);
  unhideDish(dishState);
  checkRadioButtons();
  console.log(yourPick);
}
