// recipe Button
var recipeButton = document.querySelector("#recipe-button")
// Radio Buttons (section1)
var entireRadio = document.querySelector("entire-meal")
var sideRadio = document.querySelector("#side")
var mainRadio = document.querySelector("#main-dish")
var dessertRadio = document.querySelector("#dessert")
// let's cook Button (section1)
var letsCookButton = document.querySelector("#lets-cook-button")
// clear button (section 2)
var clearButton = document.querySelector("#clear")
// hidden values (section 2)
var shouldMake = document.querySelector(".should-make-text-hidden")
var results = document.querySelector(".random-meal-text-hidden")
var cookPotImg = document.querySelector(".cookPotImg")
//store for items in array
var meal = {
  sides: sides,
  mains: mains,
  desserts: desserts,
  entireMeal: [sides, mains, desserts]
}

// event listeners
letsCookButton.addEventListener('click', findRandomSelection)

function findRandomSelection() {
  var selected = document.querySelector('input[type="radio"]:checked')
  var randomIndex = getRandomIndex(meal[selected.value])
  results.innerHTML = meal[selected.value][randomIndex]
  hideCrocPot()
};


// random number generator
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function hideCrocPot() {
  cookPotImg.classList.add("hidden");
}
