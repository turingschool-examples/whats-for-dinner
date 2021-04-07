// DOM VARIABLES
    //buttons
var addRecipeBtn = document.getElementById('add-recipe');
var dessertBtn = document.getElementById('dessert');
var entireMealBtn = document.getElementById('entire-meal');
var letsCookBtn = document.getElementById('lets-cook');
var mainDishBtn = document.getElementById('main-dish');
var sideDishBtn = document.getElementById('side');
var clearBtn = document.getElementById('clear');

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
  var format = 'You should make: ';
  var format2 = ' with a side of ';
  var format3 = ' and ';
  var format4 = ' for dessert!'
  var emphasis = '!';
  var randomSide = sides[getRandomIndex(sides)];
  var randomMain = mains[getRandomIndex(mains)];
  var randomDessert = desserts[getRandomIndex(desserts)];
  if (sideDishBtn.checked) {
    // hideCookpot();
    // unhideClearBtn();
    rightSide.innerHTML = format += randomSide + emphasis;
  } else if (mainDishBtn.checked) {
    // hideCookpot();
    // unhideClearBtn();
    rightSide.innerHTML = format += randomMain + emphasis;
  } else if (dessertBtn.checked) {
    // hideCookpot();
    // unhideClearBtn();
    rightSide.innerHTML = format += randomDessert + emphasis;
  } else {
    // hideCookpot();
    // unhideClearBtn();
    rightSide.innerHTML = format += `<br>`+ randomMain + format2 + randomSide + format3 + randomDessert + format4;
  }
  hideCookpot();
  unhideClearBtn();
}

// function resetLRSides() {
//   unhideCookpot();
// }

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
