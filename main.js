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


//Event Handlers and Functions

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

function hidePot(){
  cookingPot.classList.add('hidden');
  foodDisplayHeading.classList.remove('hidden');
  foodText.classList.remove('hidden');
  clearBtn.classList.remove('hidden');
}

function createSide() {
  if(sideBtn.value){
  hidePot();
  foodText.innerText = sides[getRandomIndex(sides)]
  return `${foodText.innerText}!`
  }
}

function createMain() {
  if(mainBtn.value){
  hidePot();
  foodText.innerText = mains[getRandomIndex(mains)]
  return `${mains[getRandomIndex(mains)]}!`
  }
}

function createDessert() {
  if(dessertBtn.value){
  hidePot();
  foodText.innerText = desserts[getRandomIndex(desserts)]
  return `${desserts[getRandomIndex(desserts)]}!`
  }
}

function createMeal() {
  if(entireMealBtn.value){
  hidePot();
  foodText.innerText = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`
  return `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`
  }
}

function pushFood(){
  if(sideBtn.checked){
    createSide();
  }
  if(mainBtn.checked){
    createMain();
  }
  if(dessertBtn.checked){
    createDessert();
  }
  if(entireMealBtn.checked){
    createMeal();
  }
}
