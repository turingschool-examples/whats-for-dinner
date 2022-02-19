// When a user selects a dish option and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category

//Query Selectors:
var sideButton = document.querySelector(".side");
var mainDishButton = document.querySelector(".main-dish");
var dessertsButton = document.querySelector(".dessert");
//var entireMealButton = document.querySelector(".entire-meal");
var letsCookButton = document.querySelector(".button2");
//var addARecipeButton = document.querySelector(".button1");
var cookPotImage = document.querySelector(".cookpot");
var dinnerSuggestions = document.querySelector("dinner-suggestions");

//Event listeners:
letsCookButton.addEventListener("click", displaySideDish);

//Functions:
//want to get all 3 functions into one mega-function with if statements...somehow...

//toggle event here?
//instead of adding a class and removing it
//cookPotImage.classList.toggle(" ");

function displaySideDish() {
  if (sideButton.checked) {
    dinnerSuggestions.classList.remove("hidden");
    dinnerSuggestions.innerText = `${sides[getRandomIndex(sides)]}`;
  }
}

function displayRandomFood() {
  event.preventDefault();
  cookPotImage.classList.add("hidden");
  dinnerSuggestions.classList.remove("hidden");
}
displayRandomFood();

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// function displayMeal() {
//   cookpot.classList.add("hidden");
// }

//if side button clicked,
//then display random selection in box 2
//and hide pot
