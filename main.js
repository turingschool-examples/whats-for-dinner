var sidesRecipes = ['carrot sticks', 'broccoli', 'peppers & onions', 'roti', 'dumplings'];
var mainDishRecipes = ['vegan burger', 'grilled tofu', 'channa masala', 'tofu mutar masala'];
var dessertRecipes = ['brownies', 'ice cream', 'Tonys Chocolonely', 'cookies', 'popsicles'];

// var side = document.getElementByID('side');
// var mainDish = document.getElementByID('main-dish');
// var dessert = document.getElementByID('dessert');
// var entireMeal = document.getElementByID('entire-meal');
var letsCookButton = document.querySelector('#lets-cook-button');
var letsCookBox = document.querySelector('#lets-cook-box');

var sideOption = document.querySelector('#side-option').value;
var mainDishOption = document.querySelector('#main-dish-option').value;
var dessertOption = document.querySelector('#dessert-option').value;
var entireMealOption = document.querySelector('#entire-meal-option').value;

var cookpotImage = document.querySelector('.cookpot-image');
var youShouldMake = document.querySelector('.you-should-make');
var outputRecipe = document.querySelector('.output-recipe');
var recipeText = document.querySelector('#recipe-text');

letsCookButton.addEventListener('click', getCooking);

function getCooking() {
  event.preventDefault();
  hide(cookpotImage);
  show(youShouldMake);
  show(outputRecipe);
}

function hide(event) {
  event.classList.add('hidden');
}

function show(event) {
  event.classList.remove('hidden');
}

function getRecipe() {
  if (sideOption) {
    outputRecipe.innerText = `${sidesRecipes[getRandomIndex(sidesRecipes)]}`;
  }
  if (mainDishOption) {
    outputRecipe.innerText = `${mainDishRecipes[getRandomIndex(mainDishRecipes)]}`;
  }
  if (dessertOption) {
    outputRecipe.innerText = `${dessertRecipes[getRandomIndex(dessertRecipes)]}`;
  }
  if (entireMealOption) {
    outputRecipe.innerText = `${mainDishRecipes[getRandomIndex(mainDishRecipes)]} with a side of ${sidesRecipes[getRandomIndex(sidesRecipes)]} and ${dessertRecipes[getRandomIndex(dessertRecipes)]} for dessert!`;
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
