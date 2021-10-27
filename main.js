// Query Selectors
var sideButton = document.querySelector('.side-button');
var mainDishButton = document.querySelector('.main-dish-button');
var dessertButton = document.querySelector('.dessert-button');
var entireMealButton = document.querySelector('.entire-meal-button');
var letsCookButton = document.querySelector('.lets-cook-btn');
var dishOutput = document.querySelector('.dish-output');
var cookpotImage = document.querySelector('.cookpot');

// Arrays for Side, Main Dish, Dessert
var sides = ['Mashed Potatos', 'Green Beans', 'Broccoli', 'Cauliflower', 'French Fries'];
var mainDishes = ['Tuna Casserole', 'Rainbow Trout', 'Pork Chop', 'Lasanga', 'Baked Chicken'];
var desserts = ['Chocolate Lava Cake', 'Peach Pie', 'Creme Brulee', 'Berries With Yogurt', 'Milkshake'];

// Variable declaration for random food items
var side;
var mainDish;
var dessert;

// Event Listeners
letsCookButton.addEventListener('click', displayFoodChoice);

function getRandomIndex(array) {
  return  Math.floor(Math.random() * array.length);
}

function getRandomFood() {
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

function displayFoodChoice(event) {
  var randomFood = getRandomFood();

  event.preventDefault();
  hideCookpot();
  dishOutput.innerHTML = 
  `<section class="dish-output">You should make:</section>
     <p class="display-food">${randomFood}!</p>
   </section>`
}