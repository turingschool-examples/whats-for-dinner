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
    var withSideOf = ` with a side of<br>`;
    var and = ` and `;
    var forDessert = ` for dessert!`;
    unhideClearBtn();
    rightSide.innerHTML = `<br><br><br>You should make:`;
  };


// function generateRandomRecipe() {
  // var format = `<br><br><br>You should make: `;
//   var format2 = ' with a side of ';
//   var format3 = ' and ';
//   var format4 = ' for dessert!'
//   var emphasis = '!';
//   var randomSide = sides[getRandomIndex(sides)];
//   var randomMain = mains[getRandomIndex(mains)];
//   var randomDessert = desserts[getRandomIndex(desserts)];
//   unhideClearBtn();
//   hideCookpot();
//   if (sideDishBtn.checked) {
//     rightSide.innerHTML = format += `<br>` + randomSide + emphasis;
//   } else if (mainDishBtn.checked) {
//     rightSide.innerHTML = format += `<br>` + randomMain + emphasis;
//   } else if (dessertBtn.checked) {
//     rightSide.innerHTML = format += `<br>` + (randomDessert + emphasis);
//   } else {
//     rightSide.innerHTML = format += `<br>` + randomMain + format2 + randomSide + format3 + randomDessert + format4;
//   }
// }

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
  var hidden = document.getElementById('clear');
  clearBtn.remove();
}

function unhideClearBtn(event) {
  var unhidden = document.getElementById('clear');
  unhidden.add();
}

function hideCookpot() {
  cookpot.classList.add('hidden');
}

function unhideCookpot() {
  cookpot.classList.remove('hidden');
}
