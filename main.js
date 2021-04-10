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
letsCookBtn.addEventListener('click', displayRandomFood);
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

function hideCookingPot() {
  cookingPot.classList.add('hidden');
}

function showRecipeSection() {
  foodDisplayHeading.classList.remove('hidden');
  foodText.classList.remove('hidden');
  clearBtn.classList.remove('hidden');
}

function createSide() {
  if(sideBtn.value) {
    hideCookingPot();
    showRecipeSection();
    foodText.innerText = `${sides[getRandomIndex(sides)]}!`
  }
}

function createMain() {
  if(mainBtn.value) {
    hideCookingPot();
    showRecipeSection();
    foodText.innerText = `${mains[getRandomIndex(mains)]}!`
    }
}

function createDessert() {
  if(dessertBtn.value) {
    hideCookingPot();
    showRecipeSection();
    foodText.innerText = `${desserts[getRandomIndex(desserts)]}!`
  }
}

function createMeal() {
  if(entireMealBtn.value) {
    hideCookingPot();
    showRecipeSection();
    foodText.innerText = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`

  }
}

function displayRandomFood() {
  if(sideBtn.checked) {
    createSide();
  } else if(mainBtn.checked) {
    createMain();
  } else if(dessertBtn.checked) {
    createDessert();
  } else if(entireMealBtn.checked) {
    createMeal();
  }
}
