//Variables
var meal;
//Buttons
var letsCookBtn = document.querySelector('.lets-cook');
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

//Functions
function getFoodItem(array) {
  return Math.floor(Math.random() * array.length);
}

function letsCook() {
    if (sideDishValue.checked) {
      meal = getFoodItem(sides);
      sideDishValue.checked = false;
  } else if (mainDishValue.checked) {
      meal = getFoodItem(mains);
      mainDishValue.checked = false;
  } else if (dessertValue.checked) {
      meal = getFoodItem(desserts);
      dessertValue.checked = false;
  }
  cookPotImg.style.display = 'none';
}
