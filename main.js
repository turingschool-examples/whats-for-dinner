var sidesRecipes = ['carrot sticks', 'broccoli', 'peppers & onions', 'roti', 'dumplings'];
var mainDishRecipes = ['vegan burger', 'grilled tofu', 'channa masala', 'tofu mutar masala'];
var dessertRecipes = ['brownies', 'ice cream', 'Tonys Chocolonely', 'cookies', 'popsicles'];
var favRecipes = ['pizza', 'muffins', 'ice cream'];
var currentRecipe = "";

var viewFavsButton = document.querySelector('#view-favs-button');
var letsCookButton = document.querySelector('#lets-cook-button');
var letsCookBox = document.querySelector('#lets-cook-box');

var sideOption = document.querySelector('#side-option').value;
var mainDishOption = document.querySelector('#main-dish-option').value;
var dessertOption = document.querySelector('#dessert-option').value;
var entireMealOption = document.querySelector('#entire-meal-option').value;

var cookpotImage = document.querySelector('.cookpot-image');
var youShouldMake = document.querySelector('.you-should-make');
var outputRecipe = document.querySelector('.output-recipe');
var favsList = document.querySelector('.favs-list');
var backButton = document.querySelector('.back-button');
var favButton = document.querySelector('.fav-button');
var clearButton = document.querySelector('.clear-button');

viewFavsButton.addEventListener('click', showFavorites);
letsCookButton.addEventListener('click', getCooking);
backButton.addEventListener('click', getCooking);
favButton.addEventListener('click', addFav);

function hide(event) {
  event.classList.add('hidden');
}

function show(event) {
  event.classList.remove('hidden');
}

function getCooking() {
  event.preventDefault();
  hide(cookpotImage);
  hide(favsList);
  hide(backButton);
  show(youShouldMake);
  show(outputRecipe);
  show(favButton);
  show(clearButton);

  getRecipe();
}

function getRecipe() {
  if (sideOption) {
    currentRecipe = sidesRecipes[getRandomIndex(sidesRecipes)];
  }
  if (mainDishOption) {
    currentRecipe = mainDishRecipes[getRandomIndex(mainDishRecipes)];
  }
  if (dessertOption) {
    currentRecipe = dessertRecipes[getRandomIndex(dessertRecipes)];
  }

  outputRecipe.innerText = `${currentRecipe}`;
  // if (entireMealOption) {
  //   outputRecipe.innerText = `${mainDishRecipes[getRandomIndex(mainDishRecipes)]} with a side of ${sidesRecipes[getRandomIndex(sidesRecipes)]} and ${dessertRecipes[getRandomIndex(dessertRecipes)]} for dessert!`;
  // }
}

function addFav() {
  favRecipes.push(currentRecipe);

  var unorderedList = document.querySelector('.favs-list');
  var listItem = document.createElement('li');

  for (var i = 0; i < favRecipes.length; i++) {
    listItem.innerHTML = `${favRecipes[i]}`;
    unorderedList.appendChild(listItem);
  }

  showFavorites();
}

function showFavorites() {
  event.preventDefault();
  hide(cookpotImage);
  hide(clearButton);
  hide(youShouldMake);
  hide(outputRecipe);
  hide(favButton);
  show(favsList);
  show(backButton);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
