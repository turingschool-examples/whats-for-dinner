//-------------QUERY SELECTORS----------------------//
var sideSelector = document.querySelector("#side");
var mainDishSelector = document.querySelector("#main-dish");
var dessertSelector = document.querySelector("#dessert");
var entireMealSelector = document.querySelector("#entire-meal");
var userLetsCook = document.querySelector(".lets-cook");
var clearButton = document.querySelector(".clear-button");
var cookpot = document.querySelector(".cookpot");
var shouldMake = document.querySelector(".you-should-make");
var dishOptions = document.querySelector(".dish-options")




//---------Event Listeners -------------------//
// window.addEventListener('DOMContentLoaded', displayRandomDish);
userLetsCook.addEventListener('click', generateRandomDish);

//-------Functions-------------------//
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayRandomDish() {
  clearButton.classList.remove("hidden");
  cookpot.classList.add("hidden");
  shouldMake.classList.remove("hidden");
  dishOptions.classList.remove("hidden");
};

// // var randomSide = side[getRandomIndex(side)];
// // var randomMainDish = mainDish[getRandomIndex(mainDish)];
// var randomDessert = dessert[getRandomIndex(dessert)];


function generateRandomDish() {
  event.preventDefault();

  if(sideSelector.checked) {
    dishOptions.innerText = `${side[getRandomIndex(side)]}!`;
    displayRandomDish()
  }
  if(mainDishSelector.checked) {
    dishOptions.innerText = `${randomMainDish = mainDish[getRandomIndex(mainDish)]}!`;
    displayRandomDish()
  }
  if(dessertSelector.checked) {
    dishOptions.innerText = `${dessert[getRandomIndex(dessert)]}!`;
    displayRandomDish()
  }
  if(entireMealSelector.checked) {
    dishOptions.innerText = `${side[getRandomIndex(side)]}, ${randomMainDish = mainDish[getRandomIndex(mainDish)]}, and ${dessert[getRandomIndex(dessert)]}!`;
    displayRandomDish()
  }
};
