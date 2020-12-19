var meal = document.getElementsByName('meal');
var randomMeal = document.querySelector('.show-meal');
var inputSide = document.querySelector('#side');
var inputMain = document.querySelector('#main-dish');
var inputDessert = document.querySelector('#dessert');
var pickMeal = document.querySelector('.lets-cook');
var showMeal = document.querySelector('.show-meal');
var cookpot = document.querySelector('img');
var suggestion = document.querySelector('#suggestion');
var chosenMeal = document.querySelector('#chosen-meal');

pickMeal.addEventListener('click', suggestRecipe);

function hide(element) {
  element.classList.add('hidden')
}

function unhide(element) {
  element.classList.remove('hidden');
}

function suggestRecipe(event) {
  event.preventDefault();
  hide(cookpot);
  unhide(suggestion);
  unhide(chosenMeal);
  var result = ''
  for (i = 0; i < meal.length; i++) {
    if (meal[0].checked) {
      result = sides[getRandomIndex(sides)]
    } else if (meal[1].checked) {
      result = mains[getRandomIndex(mains)]
    } else if (meal[2].checked) {
      result = desserts[getRandomIndex(desserts)]
    } else{
      hide(suggestion);
      result = 'Please make a selection'
    }
  }
  chosenMeal.innerText = result
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
