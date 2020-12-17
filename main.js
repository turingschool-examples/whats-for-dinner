// Create variables targetting the relevant DOM elements here.
var cookPotImg = document.querySelector('#svg-cookpot');
var choice = document.querySelector(".choice-buttons");
var cook = document.querySelector('.cook');
var shouldMake = document.querySelector("#you-make");
var clearButton = document.querySelector("#clear");
var foodStatment = document.querySelector("#change-sentence");



// Add your event listeners here
cook.addEventListener("click", generateMeal);



// Create your event handlers and other functions here.
function unhide(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateMeal() {
  event.preventDefault();
  hide(cookPotImg);
  unhide(shouldMake);
  unhide(clearButton);
  unhide(foodStatment);
}
