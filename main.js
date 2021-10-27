// Query Selectors
var sideButton = document.querySelector('.side-button');
var mainDishButton = document.querySelector('.main-dish-button');
var dessertButton = document.querySelector('.dessert-button');
var entireMealButton = document.querySelector('.entire-meal-button');
var letsCookButton = document.querySelector('.lets-cook-btn');

// Arrays for Side, Main Dish, Dessert
var sides = ['Mashed Potatos', 'Green Beans', 'Broccoli', 'Cauliflower', 'French Fries'];
var mainDishes = ['Tuna Casserole', 'Rainbow Trout', 'Pork Chop', 'Lasanga', 'Baked Chicken'];
var desserts = ['Chocolate Lava Cake', 'Peach Pie', 'Creme Brulee', 'Berries With Yogurt', 'Milkshake'];

// Variable declaration for random food items
var side;
var mainDish;
var dessert;

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
