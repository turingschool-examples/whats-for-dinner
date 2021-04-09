// DOM VARIABLES
    //buttons
var addRecipeBtn = document.getElementById('add-recipe');
var dessertBtn = document.getElementById('dessert');
var entireMealBtn = document.getElementById('entire-meal');
var letsCookBtn = document.getElementById('lets-cook');
var mainDishBtn = document.getElementById('main-dish');
var sideDishBtn = document.getElementById('side');
var clearBtn = document.getElementById('clear');
var radioBtns = document.querySelectorAll('.radio');

    //page areas
var cookpot = document.getElementById('cookpot');
var leftSide = document.getElementById('left');
var rightSide = document.getElementById('right');
var recipe = document.getElementById('recipe');


// EVENT LISTENERS
letsCookBtn.addEventListener('click', generateRandomRecipe);
clearBtn.addEventListener('click', resetLRSides);
radioBtns.addEventListener('change', disableUnchecked);


// EVENT HANDLERS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateRandomRecipe() {
    // for (var i = 0; i < radioBtns.length; i++) {
      // if (radioBtns[i].checked) {
        // populateInnerHTML();
      // }
    // }
    changeClearBtnVisibility();
    changeLetsCookClickability();
    changeRadioStatus();
    changeCookpotVisibility();
  }

  function populateInnerHTML() {
    console.log('need to popilate recipe info to right side!')
  }

function resetLRSides() {
  // for (var i = 0; i < radios.length; i++) {
  //   radios[i].checked = false;
  // }
  // rightSide.innerHTML = '';
  changeClearBtnVisibility();
  changeCookpotVisibility();
  changeLetsCookClickability();
  changeRadioStatus()
}

function changeRadioStatus() {
  for (var i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].disabled) {
      radioBtns[i].disabled = false;
      console.log('changeRadioStatus()')
    }
    radioBtns[i].disabled = radioBtns.disabled;
    console.log('changeRadioStatus()')
  }
}

function disableUnchecked() {
  for (var i = 0; i < radioBtns.length; i++) {
    if (!radioBtns[i].checked) {
      radioBtns[i].disabled = true;
      console.log('changeRadioStatus()')
    }
    radioBtns[i].disabled = !radioBtns.disabled;
    console.log('changeRadioStatus()')
  }
}

function changeCookpotVisibility() {
  if (!cookpot.classList.contains('hidden')) {
    cookpot.classList.add('hidden');
  } else {
    cookpot.classList.remove('hidden');
  }
}

function changeClearBtnVisibility() {
  if (clearBtn.classList.contains('hidden')) {
    clearBtn.classList.remove('hidden');
  } else {
    clearBtn.classList.add('hidden');
  }
}

function changeLetsCookClickability() {
  if (!letsCookBtn.disabled) {
    letsCookBtn.disabled = !letsCookBtn.disabled;
  } else {
    letsCookBtn.disabled = !letsCookBtn.disabled;
  }
}
