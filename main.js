//  // query selector vairables: 
var sideRadio = document.querySelector('#Side');
var mainRadio = document.querySelector('#Main Dish');
var dessertRadio = document.querySelector('#Dessert');
var foodName = document.querySelector('#food-name');
var cookpotImage = document.querySelector('.cookpot-image');
var letsCookButton = document.querySelector('#lets-cook-button');
var clearButton = document.querySelector('.clear-btn');
var recipeBox = document.querySelector('#recipe-box');


 // data/arrays:
var sideDishes = [
    "Garlic Bread", 
    "Fries", 
    "Rice & beans", 
    "Nachos",
    "Mashed Potatoes",
    "Caesar Salad", 
    "Roasted Brussels Sprouts"
];
var mainDishes = [
    "Spaghetti Bolognese", 
    "Cheeseburger", 
    "Fried Chicken", 
    "Burrito Bowl",
    "Spaghetti Bolognese", 
    "Roast Chicken", 
    "Veggie Burger", 
    "Beef Stir Fry"
];
var dessertDishes = [
    "Chocolate Lava Cake", 
    "Milkshake", 
    "Ice Cream Sundae", 
    "Cinnamon Rolls",
    "Apple Pie", 
    "Fruit Salad"
];

 // event listeners:
letsCookButton.addEventListener('click', displayRandomDish);

 // functions:
 function selectRandomDish(dishes) {
    return dishes[Math.floor(Math.random() * dishes.length)];
  }

  function displayRandomDish() {
    var selectedCategory = '';
    if (sideRadio.checked) {
      selectedCategory = 'Side';
    } else if (mainRadio.checked) {
      selectedCategory = 'Main Dish';
    } else if (dessertRadio.checked) {
      selectedCategory = 'Dessert';
    }
    
    var randomDish = '';
    if (selectedCategory === 'Side') {
      randomDish = `You should make: ${selectRandomDish(sideDishes)}`;
    } else if (selectedCategory === 'Main Dish') {
      randomDish = `You should make: ${selectRandomDish(mainDishes)}`;
    } else if (selectedCategory === 'Dessert') {
      randomDish = `You should make: ${selectRandomDish(dessertDishes)}`;
    }
    
    foodName.innerHTML = randomDish;
    cookpotImage.style.display = 'none';
  }
  


