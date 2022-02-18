// When a user selects a dish option and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category

//need to pull in JS to HTML via <script> DID IT id work??????

//Query Selectors:

var sideButton = document.querySelector(".side");
var mainDishButton = document.querySelector(".main-dish");
var dessertsButton = document.querySelector(".dessert");
//var entireMealButton = document.querySelector(".entire-meal");
var letsCookButton = document.querySelector(".button2");
//var addARecipeButton = document.querySelector(".button1");
var cookPotImage = document.querySelector(".cookpot");
var dinnerSuggestions = document.querySelector("dinner-suggestions").hidden;

//Event listeners:
letsCookButton.addEventListener("click", displayRandomFood());

//Functions:
//want to get all 3 functions into one mega function with if statements...somehow...

function displayRandomFood() {
  event.preventDefault();
  cookPotImage.classList.add("hidden");
  dinnerSuggestions.classList.remove("hidden");
}

function displaySideDish() {
  if (sideButton.checked) {
    dinnerSuggestions.innerText = `${sides[getRandomIndex(sides)]}!`;
    displayRandomFood();
  }
}

function getRandomIndex(foodLists) {
  return Math.floor(Math.random() * foodLists.length);
}
//if side button clicked,
//then display random selection in box 2
//and hide pot
