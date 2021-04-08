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
        hideCookpot();
        populateInnerTextFormat();
        console.log('done');
      }
    }
  }

  function populateInnerTextFormat() {
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].value === 'side' && radios[i].checked) {
        rightSide.innerHTML = `<br><br><br>You should make:<br>`;
      } else if (radios[i].value === 'main' && radios[i].checked) {
        rightSide.innerHTML = `<br><br><br>You should make:<br>`;
      } else if (radios[i].value === 'dessert' && radios[i].checked) {
        rightSide.innerHTML = `<br><br><br>You should make:<br>`;
      } else {
        rightSide.innerHTML = `<br><br><br>You should make:<br>`;
      }
    }
  }

function resetLRSides() {
  for (var i = 0; i < radios.length; i++) {
    radios[i].checked = false;
  }
  rightSide.innerHTML = '';
  hideClearBtn();
  unhideCookpot();
  enableLetsCookBtn();
}

function disableLetsCookBtn() {
  letsCookBtn.disabled = true;
}

function enableLetsCookBtn() {
  letsCookBtn.disabled = false;
}

function hideClearBtn() {
  clearBtn.classList.remove('hidden');
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
