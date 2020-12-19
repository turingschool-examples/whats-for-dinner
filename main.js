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

function randomizeItem(array) {
  return array[getRandomIndex(array)];
}

function combineEntireMeal() {
  var entireMeal;
  showMeal.innerHTML = `
    <p id="suggestion">You should make:</p>
    <p class="chosen-meal">${randomizeItem(mains)} with a side of ${randomizeItem(sides)}
    and ${randomizeItem(desserts)} for dessert!</p>
  `;
  entireMeal = showMeal.innerHTML;
  return entireMeal;
}

function suggestRecipe(event) {
  event.preventDefault();
  hide(cookpot);
  unhide(suggestion);
  unhide(chosenMeal);
  var mealKey = { sides: sides, mains: mains, desserts: desserts }
  var result = ''
  for (i = 0; i < meal.length-1; i++) {
    if (meal[i].checked) {
      result = randomizeItem(mealKey[meal[i].value])
      chosenMeal.innerText = result
      return
    } else if (meal[3].checked) {
      result = combineEntireMeal()
    } else {
      hide(suggestion);
      result = 'Please make a selection'
    }
  }
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
