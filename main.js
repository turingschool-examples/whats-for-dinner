//DOM Elements
var sideBtn = document.querySelector('#side');
var mainBtn = document.querySelector('#main-dish');
var dessertBtn = document.querySelector('#dessert-button');
var letsCookBtn = document.querySelector('.cook-button');
var entireMealBtn = document.querySelector('#entire-meal');
var cookingPot = document.querySelector('.cooking-pot');
var foodDisplayHeading = document.querySelector('.food-display-heading');
var foodText = document.querySelector('.food-display-text');
var addRecipeBtn = document.querySelector('.add-recipe');
var clearBtn = document.querySelector('.clear-button')


//Event Listeners
letsCookBtn.addEventListener('click', preventEvent);
letsCookBtn.addEventListener('click', pushFood);
clearBtn.addEventListener('click', clearFood);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function preventEvent(e) {
    e.preventDefault();
}

function clearFood(){
  cookingPot.classList.remove('hidden');
  foodDisplayHeading.classList.add('hidden');
  foodText.classList.add('hidden');
  clearBtn.classList.add('hidden');
}
