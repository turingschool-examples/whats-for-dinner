var side = document.getElementByID('side');
var mainDish = document.getElementByID('main-dish');
var dessert = document.getElementByID('dessert');
var entireMeal = document.getElementByID('entire-meal');
var letsCookButton = document.getElementbyID('lets-cook');
var letsCookBox = document.getElementByID('lets-cook-box');

letsCookButton.addEventListener('click', (hideCookPot && getRecipe));

function hideCookPot() {
  letsCookBox.classList.add('hidden');
}

function getRecipe() {
  
}
