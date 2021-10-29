// Query Selectors
var sideButton = document.querySelector('.side-button');
var mainDishButton = document.querySelector('.main-dish-button');
var dessertButton = document.querySelector('.dessert-button');
var entireMealButton = document.querySelector('.entire-meal-button');
var letsCookButton = document.querySelector('.lets-cook-btn');
var clearButton = document.querySelector('.clear-btn');
var dishOutput = document.querySelector('.dish-output');
var cookpotImage = document.querySelector('.cookpot');

// Arrays for Side, Main Dish, Dessert
var sides = ['Mashed Potatoes', 'Green Beans', 'Broccoli', 'Cauliflower', 'French Fries'];
var mainDishes = ['Tuna Casserole', 'Rainbow Trout', 'Pork Chops', 'Lasanga', 'Baked Chicken'];
var desserts = ['Chocolate Lava Cake', 'Peach Pie', 'Creme Brulee', 'Berries With Yogurt', 'Milkshakes'];

// Event Listeners
letsCookButton.addEventListener('click', displayFoodChoice);
clearButton.addEventListener('click', removeFoodOutput);

function getRandomIndex(array) {
  return  Math.floor(Math.random() * array.length);
}

function getRandomFood() {
  var side;
  var mainDish;
  var dessert;

  if (sideButton.checked) {
    side = sides[getRandomIndex(sides)];
    return side;
  } else if (mainDishButton.checked) {
    mainDish = mainDishes[getRandomIndex(mainDishes)];
    return mainDish;
  } else if (dessertButton.checked) {
    dessert = desserts[getRandomIndex(desserts)];
    return dessert;
  }
}

function hideCookpot() {
  cookpotImage.classList.add('hidden');
}

function displayCookpot() {
  cookpotImage.classList.remove('hidden');
}

function removeFoodOutput() {
  displayCookpot();
  dishOutput.innerHTML = ``;
}

function displayFoodChoice(event) {
  var randomFood = getRandomFood();

  event.preventDefault();
  hideCookpot();

  if (entireMealButton.checked) {
    displayEntireMeal();
    return;
  }

  dishOutput.innerHTML = 
  `<section class="dish-output">You should make:</section>
     <p class="display-food">${randomFood}!</p>
   </section>`
}

function displayEntireMeal() {
  dishOutput.innerHTML =
  `<section class="dish-output">You should make:</section>
     <p class="entire-meal">${mainDishes[getRandomIndex(mainDishes)]}
     with a side of ${sides[getRandomIndex(sides)]} and
     ${desserts[getRandomIndex(desserts)]} for dessert!
    </p>
   </section>`
}
