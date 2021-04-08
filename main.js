//-------------QUERY SELECTORS----------------------//
var sideSelector = document.querySelector("#side");
var mainDishSelector = document.querySelector("#main-dish");
var dessertSelector = document.querySelector("#dessert");
var entireMealSelector = document.querySelector("entireMealSelector");
var userLetsCook = document.querySelector(".lets-cook");
var clearButton = document.querySelector(".clear-button");
var cookpot = document.querySelector(".cookpot");
var shouldMake = document.querySelector(".you-should-make");
var dishOption = document.querySelector("dish-option")


//---------Event Listeners -------------------//
// window.addEventListener('DOMContentLoaded', showDefaultView);
userLetsCook.addEventListener('click', displayRandomDish);

//-------Functions-------------------//
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateRandomDish() {
  event.preventDefault();
  var randomSide = side[getRandomIndex(side)];
  var randomMainDish = mainDish[getRandomIndex(mainDish)];
  var randomDessert = dessert[getRandomIndex(randomDessert)];

  if(sideSelector.checked === true) {
    dishOption.innerHTML = `${randomSide}!`
    displayRandomDish()
  }
  if(mainDishSelector.checked === true) {
    dishOption.innerHTML = `${randomMainDish}!`
    displayRandomDish()
  }
  if(dessertSelector.checked === true) {
    dishOption.innerHTML = `${randomDessert}!`
    displayRandomDish()
  }
};

function displayRandomDish() {
  clearButton.classList.remove("hidden");
  cookpot.classList.add("hidden");
  shouldMake.classList.remove("hidden")
};
