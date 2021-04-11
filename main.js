//Variables
var food;

//Buttons
var letsCookBtn = document.querySelector('.lets-cook-btn');
var clearBtn = document.querySelector('.clear-btn');

//Radio Buttons
var sideDishValue = document.querySelector('#side');
var mainDishValue = document.querySelector('#main');
var dessertValue = document.querySelector('#dessert');
var entireValue = document.querySelector('#entire-meal');

//Sections
var letsCookBox = document.querySelector('#lets-cook-form');
var cookPotBox = document.querySelector('.right-box');

//Images
var cookPotImg = document.querySelector('.cookpot-img');

//Event Listeners
letsCookBtn.addEventListener("click", letsCook);
cookPotBox.addEventListener("click", clearFoodBox);
letsCookBox.addEventListener("click", disableLetsCookBtn);

//Functions
function getFoodItem(array) {
  return Math.floor(Math.random() * array.length);
}

function letsCook() {
  if (sideDishValue.checked) {
    food = sides[getFoodItem(sides)];
    sideDishValue.checked = false;
    displayFood(food);
  } else if (mainDishValue.checked) {
    food = mains[getFoodItem(mains)];
    mainDishValue.checked = false;
    displayFood(food);
  } else if (dessertValue.checked) {
    food = desserts[getFoodItem(desserts)];
    dessertValue.checked = false;
    displayFood(food);
  } else {
    food = getEntireMeal();
    entireValue.checked = false;
  }
}

function displayFood(food) {
  cookPotBox.innerHTML = `
  <h2><em>You should make:</em></h2>
  <h1 class="meal-suggestion">${food}</h1>
  <section>
    <button class="clear-btn" id="clear" type="button">CLEAR</button>
  </section>`
}

function getEntireMeal() {
  var side = sides[getFoodItem(sides)];
  var main = mains[getFoodItem(mains)];
  var dessert = desserts[getFoodItem(desserts)];
  cookPotBox.innerHTML = `
    <p><em>You should make:</em></p>
    <br><h1 class="whole-meal">${main} with a side of ${side} and ${dessert} for dessert.</h1>
    <section>
      <button class="clear-btn" id="clear" type="button">CLEAR</button>
    </section>`;
}

function clearFoodBox(event) {
  if (event.target.id === "clear") {
    cookPotBox.innerHTML = '';
    cookPotBox.innerHTML = `<img class="cookpot-img" src="assets/cookpot.svg" alt="cookpot logo">`
  }
}

function disableLetsCookBtn() {
  if (sideDishValue.checked || mainDishValue.checked || dessertValue.checked || entireValue.checked) {
    letsCookBtn.disabled = false;
  } else {
    letsCookBtn.disabled = true;
  }
}
