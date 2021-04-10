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



// EVENT LISTENERS
window.addEventListener('load', changeCookpotVisibility)
letsCookBtn.addEventListener('click', generateRandomRecipe);
rightSide.addEventListener('click', resetLRSides);
leftSide.addEventListener('change', disableUnchecked);


// EVENT HANDLERS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateRandomRecipe() {
  for (i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked && radioBtns[i].id === 'entire-meal') {
    entireMealInnerHTML();
  } else if (radioBtns[i].checked && radioBtns[i].id === 'side') {
    sideRecipeInnerHTML();
  } else if (radioBtns[i].checked && radioBtns[i].id === 'main-dish') {
    mainRecipeInnerHTML();
  } else if (radioBtns[i].checked && radioBtns[i].id === 'dessert') {
    dessertRecipeInnerHTML();
  }
 }
 disableLetsCookBtn();
}

function entireMealInnerHTML() {
    rightSide.innerHTML = '';
      rightSide.innerHTML =
        `
        <div>
          <br><br><p class="recipe-head" id="recipe">You should make:</p>
          <p>${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]}!</p>
          <br><br><br><br><br><br><button type="button" name="clear" class="clear grow" id="clear">CLEAR</button>
        </div>
         `
}

function sideRecipeInnerHTML() {
    rightSide.innerHTML = '';
    rightSide.innerHTML =
    `
    <div>
      <br><br><p class="recipe-head" id="recipe">You should make:</p>
      <p>${sides[getRandomIndex(sides)]}!</p>
      <br><br><br><br><br><br><br><br><button type="button" name="clear" class="clear grow" id="clear">CLEAR</button>
    </div>
    `
}

function mainRecipeInnerHTML() {
  rightSide.innerHTML = '';
  rightSide.innerHTML =
  `
  <div>
    <br><br><p class="recipe-head" id="recipe">You should make:</p>
    <p>${mains[getRandomIndex(mains)]}!</p>
    <br><br><br><br><br><br><br><br><button type="button" name="clear" class="clear grow" id="clear">CLEAR</button>
  </div>
  `
}

function dessertRecipeInnerHTML() {
  rightSide.innerHTML = '';
  rightSide.innerHTML =
  `
  <div>
    <br><br><p class="recipe-head" id="recipe">You should make:</p>
    <p>${desserts[getRandomIndex(desserts)]}!</p>
    <br><br><br><br><br><br><br><br><button type="button" name="clear" class="clear grow" id="clear">CLEAR</button>
  </div>
  `
}


function resetLRSides() {
  if (event.target.id === 'clear') {
    rightSide.innerHTML = '';
    enableLetsCookBtn();
    changeRadioStatus()
    changeCookpotVisibility();
   }
 }

function changeRadioStatus() {
  for (var i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].disabled || radioBtns[i].checked) {
      radioBtns[i].checked = false;
      radioBtns[i].disabled = false;
    }
  }
}

function disableUnchecked() {
  for (var i = 0; i < radioBtns.length; i++) {
    if (!radioBtns[i].checked) {
      radioBtns[i].disabled = true;
    }
  }
}

function changeCookpotVisibility() {
    rightSide.innerHTML =
    `
    <img src="assets/cookpot.svg" alt="Cookpot icon" class="cook-pot" id="cookpot" width="147.7" height="269.11">
    `
}

function checkSelectedRadios() {
  for (var i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      return true;
    }
  }
}

function disableLetsCookBtn() {
  if (checkSelectedRadios()) {
    letsCookBtn.disabled = true;
    letsCookBtn.classList.add('inactive');
  }
}

function enableLetsCookBtn() {
  letsCookBtn.disabled = false;
  letsCookBtn.classList.remove('inactive');
}
