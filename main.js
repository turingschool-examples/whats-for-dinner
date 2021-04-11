//DOM Elements
var sideBtn = document.querySelector('#side');
var mainBtn = document.querySelector('#main-dish');
var dessertBtn = document.querySelector('#dessert-button');
var entireMealBtn = document.querySelector('#entire-meal');
var letsCookBtn = document.querySelector('.cook-button');
var cookingPot = document.querySelector('.cooking-pot');
var foodDisplayHeading = document.querySelector('.food-display-heading');
var foodText = document.querySelector('.food-display-text');
var clearBtn = document.querySelector('.clear-button')


//Event Listeners
letsCookBtn.addEventListener('click', preventEvent);
letsCookBtn.addEventListener('click', displayRandomFood);
clearBtn.addEventListener('click', clearFood);

//Functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function preventEvent(e) {
    e.preventDefault();
}


function clearFood() {
  cookingPot.classList.remove('hidden');
  foodDisplayHeading.classList.add('hidden');
  foodText.classList.add('hidden');
  clearBtn.classList.add('hidden');
  clearRadioButtons();
}


function clearRadioButtons() {
  sideBtn.checked = false;
  mainBtn.checked = false;
  dessertBtn.checked = false;
  entireMealBtn.checked = false;
}


function hideCookingPot() {
  cookingPot.classList.add('hidden');
}


function showRecipeSection() {
  foodDisplayHeading.classList.remove('hidden');
  foodText.classList.remove('hidden');
  clearBtn.classList.remove('hidden');
}


function displayRandomFood() {
  if(sideBtn.checked) {
    hideCookingPot();
    showRecipeSection();
    foodText.innerText = `${sides[getRandomIndex(sides)]}!`
  } else if(mainBtn.checked) {
    hideCookingPot();
    showRecipeSection();
    foodText.innerText = `${mains[getRandomIndex(mains)]}!`
  } else if(dessertBtn.checked) {
    hideCookingPot();
    showRecipeSection();
    foodText.innerText = `${desserts[getRandomIndex(desserts)]}!`
  } else if(entireMealBtn.checked) {
    hideCookingPot();
    showRecipeSection();
    foodText.innerText = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`
  } else
    alert("Please make a selection.");
}
