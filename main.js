//Query Selectors:
var sideButton = document.querySelector(".side");
var mainDishButton = document.querySelector(".main-dish");
var dessertsButton = document.querySelector(".dessert");
var entireMealButton = document.querySelector(".entire-meal");
var letsCookButton = document.querySelector(".button2");
var cookPotImage = document.querySelector(".cookpot");
var dinnerSuggestions = document.querySelector(".suggestions");
var youShouldMake = document.querySelector(".h3");

//Event Listeners:

letsCookButton.addEventListener("click", showRandomFood);

//Functions:

function showRandomFood() {
  event.preventDefault();
  if (sideButton.checked) {
    dinnerSuggestions.innerHTML = `${sides[getRandomIndex(sides)]}!`;
  } else if (mainDishButton.checked) {
    dinnerSuggestions.innerHTML = `${mains[getRandomIndex(mains)]}!`;
  } else if (dessertsButton.checked) {
    dinnerSuggestions.innerHTML = `${desserts[getRandomIndex(desserts)]}!`;
  } else if (entireMealButton.checked) {
    dinnerSuggestions.innerHTML = `${
      mains[getRandomIndex(mains)]
    } with a side of ${sides[getRandomIndex(sides)]}, and ${
      desserts[getRandomIndex(desserts)]
    } for dessert!`;
  }

  hide(cookPotImage);
  show(youShouldMake);
  show(dinnerSuggestions);
}

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
