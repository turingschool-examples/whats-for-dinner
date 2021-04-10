//Variables
var food;

//Buttons
var letsCookBtn = document.querySelector('.lets-cook-btn');
var clearBtn = document.querySelector('.clear-btn')

//Radio Buttons
var sideDishValue = document.querySelector('#side');
var mainDishValue = document.querySelector('#main');
var dessertValue = document.querySelector('#dessert');

//Sections
var letsCookBox = document.querySelector('#lets-cook-form');
var cookPotBox = document.querySelector('#cookpot');

//Images
var cookPotImg = document.querySelector('.cookpot-img');

//Event Listeners
letsCookBtn.addEventListener("click", letsCook);
clearBtn.addEventListener("click", clearFoodBox);

//Functions
function getFoodItem(array) {
  return Math.floor(Math.random() * array.length);
}

function letsCook() {
    if (sideDishValue.checked) {
      food = sides[getFoodItem(sides)];
      sideDishValue.checked = false;
    } else if (mainDishValue.checked) {
      food = mains[getFoodItem(mains)];
      mainDishValue.checked = false;
    } else if (dessertValue.checked) {
      food = desserts[getFoodItem(desserts)];
      dessertValue.checked = false;
    }
      cookPotImg.classList.add('hidden');
      clearBtn.classList.remove('hidden');
      displayFood(food);
}

function displayFood(food) {
  // cookPotBox.insertAdjacentHTML = ("afterbegin", `
  // <p><em>You should make:</em></p>
  //   <br>
  //   <br>
  //   <h1 class="meal-suggestion">${food}</h1>`);
  cookPotBox.innerHTML = `
    <p><em>You should make:</em></p>
    <br>
    <br>
    <h1 class="meal-suggestion">${food}</h1>`
}

function clearFoodBox() {
  cookPotBox.innerHTML = '';
  clearBtn.classList.add('hidden');
}
