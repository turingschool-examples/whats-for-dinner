// When a user selects a dish option and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category

//Query Selectors:
var sideButton = document.querySelector(".side");
var mainDishButton = document.querySelector(".main-dish");
var dessertsButton = document.querySelector(".dessert");
var entireMealButton = document.querySelector(".entire-meal");
var letsCookButton = document.querySelector(".button2");
//var addARecipeButton = document.querySelector(".button1");
var cookPotImage = document.querySelector(".cookpot");
var dinnerSuggestions = document.querySelector(".suggestions");
var youShouldMake = document.querySelector(".h3");

letsCookButton.addEventListener("click", showRandomFood);
//window.onload = showBeforeSelection;
letsCookButton.addEventListener("click", viewOrHideElement);
/*------------------------FUNCTIONS-------------------------*/

function showRandomFood() {
  event.preventDefault();
  if (sideButton.checked) {
    dinnerSuggestions.innerHTML = `${sides[getRandomIndex(sides)]}!`;
  } else if (mainDishButton.checked) {
    dinnerSuggestions.innerHTML = `${mains[getRandomIndex(mains)]}!`;
  } else if (dessertsButton.checked) {
    dinnerSuggestions.innerHTML = `${desserts[getRandomIndex(desserts)]}!`;
  }
  showBox2();
}

function displaySelection() {
  cookPotImage.classList.add("hidden");
  youShouldMake.classList.remove("hidden");
  dinnerSuggestions.classList.remove("hidden");
  //clearButton.classList.remove('hidden');
}
// function showBeforeSelection() {
//   hideElement(youShouldMake);
//   hideElement(dinnerSuggestions);
//   //viewElement(clearButton);
//   viewElement(cookPotImage);
// }
function showBox2() {
  viewElement(youShouldMake);
  viewElement(dinnerSuggestions);
  //viewElement(clearButton);
  hideElement(cookPotImage);
}

function viewOrHideElement(varToView) {
  varToView.classList.remove("hidden");
  varToView.classList.add("hidden");
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
