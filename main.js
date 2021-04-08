//-------------QUERY SELECTORS----------------------//
var sideSelector = document.querySelector("#side");
var mainDishSelector = document.querySelector("#main-dish");
var dessertSelector = document.querySelector("#dessert");
var entireMealSelector = document.querySelector("entireMealSelector");
var userLetsCook = document.querySelector(".lets-cook");
var clearButton = document.querySelector(".clear-button");
var cookpot = document.querySelector(".cookpot");
var shouldMake = document.querySelector(".you-should-make");


//---------Event Listeners -------------------//
// window.addEventListener('DOMContentLoaded', showDefaultView);
userLetsCook.addEventListener('click', displayRandomDish);

//-------Functions-------------------//
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateRandomDish() {
  var randomSide = side[getRandomIndex(side)];
  var randomMainDish = mainDish[getRandomIndex(mainDish)];
  var randomDessert = dessert[getRandomIndex(randomDessert)];


};

function displayRandomDish() {
  // event.preventDefault();
  clearButton.classList.remove("hidden");
  cookpot.classList.add("hidden");
  shouldMake.classList.remove("hidden")
};
