// DOM VARIABLES
    //buttons
var addRecipeBtn = document.getElementById('add-recipe');
var dessertBtn = document.getElementById('dessert');
var entireMealBtn = document.getElementById('entire-meal');
var letsCookBtn = document.getElementById('lets-cook');
var mainDishBtn = document.getElementById('main-dish');
var sideDishBtn = document.getElementById('side');
var clearBtn = document.getElementById('clear');
var radios = document.querySelectorAll('.radio');

    //page areas
var cookpot = document.getElementById('cookpot');
var leftSide = document.getElementById('left');
var rightSide = document.getElementById('right');
var recipe = document.getElementById('recipe');


// EVENT LISTENERS
letsCookBtn.addEventListener('click', generateRandomRecipe);
clearBtn.addEventListener('click', resetLRSides);


// EVENT HANDLERS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateRandomRecipe() {
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        disableLetsCookBtn();
        disableRadios();
        hideCookpot();
        populateInnerHTML();
        console.log('done');
        // unhideClearBtn();
      }
    }
  }

  function populateInnerHTML() {
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].value === 'Side' && radios[i].checked) {
        rightSide.innerHTML = `<br><br><br>You should make:<br>`;
      } else if (radios[i].value === 'Main Dish' && radios[i].checked) {
        recipe.innerHTML = `<br><br><br>You should make:<br>`;
      } else if (radios[i].value === 'Dessert' && radios[i].checked) {
        recipe.innerHTML = `<br><br><br>You should make:<br>`;
      } else {
        recipe.innerHTML = `<br><br><br>You should make:<br>`;
      }
    }
    unhideClearBtn();
  }

function resetLRSides() {
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
  hideClearBtn();
  recipe.innerHTML = '';
  unhideCookpot();
  enableLetsCookBtn();
  enableRadios()
}

function disableRadios() {
  sideDishBtn.disabled = true;
  mainDishBtn.disabled = true;
  dessertBtn.disabled = true;
  entireMealBtn.disabled = true;
}

function enableRadios() {
  sideDishBtn.disabled = false;
  mainDishBtn.disabled = false;
  dessertBtn.disabled = false;
  entireMealBtn.disabled = false;
}

function disableLetsCookBtn() {
  letsCookBtn.disabled = true;
}

function enableLetsCookBtn() {
  letsCookBtn.disabled = false;
}

function hideClearBtn() {
  clearBtn.classList.add('hidden');
}

function unhideClearBtn() {
  clearBtn.classList.remove('hidden');
}

function hideCookpot() {
  cookpot.classList.add('hidden');
}

function unhideCookpot() {
  cookpot.classList.remove('hidden');
}
