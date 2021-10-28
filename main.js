var sideSelection = document.querySelector('#side');
var mainSelection = document.querySelector('#mainDish');
var dessertSelection = document.querySelector('#dessert');
var entireMealSelection = document.querySelector('#entireMeal');
var cookButton = document.querySelector('#cookButton');
var recipeDisplayBox = document.querySelector('#recipeDisplay');

cookButton.addEventListener("click", selectRecipe);

function selectRecipe() {
  if (sideSelection.checked) {
    randomSide()
  } else if (mainSelection.checked) {
    randomMain()
  } else if (dessertSelection.checked) {
    randomDessert()
  } else if (entireMealSelection.checked) {
    createEntireMeal()
  }
}

function randomMeal(mealOptions) {
  return Math.floor(Math.random() * mealOptions.length);
}

function randomSide() {
  suggestionMessage()
  recipeDisplayBox.innerHTML += `${sides[randomMeal(sides)]}!`;
  recipeDisplayBox.classList.add('meal-text');
}

function randomMain() {
  suggestionMessage()
  recipeDisplayBox.innerHTML += `${mains[randomMeal(mains)]}!`;
  recipeDisplayBox.classList.add('meal-text');
}

function randomDessert() {
  suggestionMessage()
  recipeDisplayBox.innerHTML += `${desserts[randomMeal(desserts)]}!`;
  recipeDisplayBox.classList.add('meal-text');
}

function suggestionMessage() {
  recipeDisplayBox.innerHTML = "You should make: "
  recipeDisplayBox.classList.add('suggestion-text')
}
