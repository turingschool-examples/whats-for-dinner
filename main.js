var letsCookBtn = document.querySelector('.cook-button');
var clearBtn = document.querySelector('.clear-button');
var radioSide = document.querySelector('.side');
var radioMain = document.querySelector('.main');
var radioDessert = document.querySelector('.dessert');
var radioEntireMeal = document.querySelector('.entireMeal');
var suggestedMeal = document.querySelector('.suggested-meal');
var suggestedTitle = document.querySelector('.suggested-title');
var lilPot = document.querySelector('.icon');
var addRecipeBtn = document.querySelector('.nav-button');
var addNewBtn = document.querySelector('.add-new-button');
var recipeForm = document.querySelector('.recipe-form');


var entireMeal = [];
var currentMeal;

letsCookBtn.addEventListener('click', randomMeal);
clearBtn.addEventListener('click', clearView);
addRecipeBtn.addEventListener('click', showRecipeForm);

function randomGenerator(array) {
  return Math.floor(Math.random() * array.length);
}

function randomMeal() {
  var randomSide = sides[randomGenerator(sides)];
  var randomMain = main[randomGenerator(main)];
  var randomDessert = dessert[randomGenerator(dessert)];
  currentMeal = new EntireMeal(randomSide, randomMain, randomDessert);

  if (radioSide.checked === true){
    hidePot();
    suggestedMeal.innerText = `${randomSide}!`;
  }
  if (radioMain.checked === true){
    hidePot();
    suggestedMeal.innerText = `${randomMain}!`;
  }
  if (radioDessert.checked === true){
    hidePot();
    suggestedMeal.innerText = `${randomDessert}!`;
  }
  if (radioEntireMeal.checked === true){
    hidePot();
    suggestedMeal.innerText = `${randomSide}, ${randomMain}, and ${randomDessert}!`;
  } else {
    popup();
  }
}

function hidePot() {
  lilPot.classList.add('hidden');
  suggestedMeal.classList.remove('hidden');
  suggestedTitle.classList.remove('hidden');
  clearBtn.classList.remove('hidden');
}

function clearView() {
  radioSide.checked = false;
  radioMain.checked = false;
  radioDessert.checked = false;
  radioEntireMeal.checked = false;
  lilPot.classList.remove('hidden');
  suggestedMeal.classList.add('hidden');
  suggestedTitle.classList.add('hidden');
  clearBtn.classList.add('hidden');
}

function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  // setTimeout(function () { popup.popmake('close');}, 3000);
}

function showRecipeForm() {
 recipeForm.classList.remove('hidden');
}
