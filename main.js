var sideBtn = document.querySelector('#side');
var mainDishBtn = document.querySelector('#main-dish');
var dessertBtn = document.querySelector('#dessert');
var entireMealBtn = document.querySelector('#entire-meal');
var letsCookBtn = document.querySelector('#lets-cook');
var recipeBox = document.querySelector('.recipe-box');
var recipeText = document.querySelector('.recipe-text');

var sideMenu = ['Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies'];

var mainMenu = ['Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza'];

var dessertMenu = ['Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs'];

var entireMealMenu = [];
var currentDish = [];

// sideBtn.addEventListener('click', showSideDish);
// mainDishBtn.addEventListener('click', showMainDish);
// dessertBtn.addEventListener('click', showDessert);
// entireMealBtn.addEventListener('click', showEntireMeal);
letsCookBtn.addEventListener('click', displayDish);


function getRandomIndex(array){
  return Math.floor(Math.random() * array.length);
};

function getCurrentDish() {
  if (sideBtn.checked) {
    currentDish = sideMenu[getRandomIndex(sideMenu)];
  } else if (mainDishBtn.checked) {
    currentDish = mainMenu[getRandomIndex(mainMenu)];
  } else if (dessertBtn.checked) {
    currentDish = dessertMenu[getRandomIndex(dessertMenu)];
  }
}

function displayDish() {
  getCurrentDish();
  recipeBox.innerHTML = `<p class='recipe-text'>You should make: ${currentDish}</p>`;
}

function showSideDish() {

};

function showMainDish() {

};

function showDessert() {

};

function showEntireMeal() {

};
