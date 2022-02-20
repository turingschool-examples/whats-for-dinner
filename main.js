//---------------------------Query Selectors:--------------------

var sideButton = document.querySelector(".side");
var mainDishButton = document.querySelector(".main-dish");
var dessertsButton = document.querySelector(".dessert");
var entireMealButton = document.querySelector(".entire-meal");
var letsCookButton = document.querySelector(".button2");
var cookPotImage = document.querySelector(".cookpot");
var dinnerSuggestions = document.querySelector(".suggestions");
var youShouldMake = document.querySelector(".h3");
var clearButton = document.querySelector(".button3");
var addRecipeButton = document.querySelector(".button1");

//-----------------------------Event Listeners:--------------------

letsCookButton.addEventListener("click", showRandomFood);
addRecipeButton.addEventListener("click", clickAddRecipeButton);
clearButton.addEventListener("click", clearSuggestions);

//-----------------------------Functions:---------------------------

function showRandomFood() {
  event.preventDefault();
  if (sideButton.checked) {
    dinnerSuggestions.innerHTML = `${sides[getRandomIndex(sides)]}!`;
    displayDinnerSelections();
  } else if (mainDishButton.checked) {
    dinnerSuggestions.innerHTML = `${mains[getRandomIndex(mains)]}!`;
    displayDinnerSelections();
  } else if (dessertsButton.checked) {
    dinnerSuggestions.innerHTML = `${desserts[getRandomIndex(desserts)]}!`;
    displayDinnerSelections();
  } else if (entireMealButton.checked) {
    dinnerSuggestions.innerHTML = `${
      mains[getRandomIndex(mains)]
    } with a side of ${sides[getRandomIndex(sides)]}, and ${
      desserts[getRandomIndex(desserts)]
    } for dessert!`;
    displayDinnerSelections();
  } else {
    alert("Please select an option.");
  }
}

function clearSuggestions() {
  hide(youShouldMake);
  hide(dinnerSuggestions);
  show(cookPotImage);
  hide(clearButton);
}

function displayDinnerSelections() {
  hide(cookPotImage);
  show(youShouldMake);
  show(dinnerSuggestions);
  show(clearButton);
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function clickAddRecipeButton() {
  alert("This feature coming soon!");
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
