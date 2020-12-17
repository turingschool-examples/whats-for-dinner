//Targets here---------------------------->
var sideRadioButton = document.querySelector('.side-dish');
var mainDishRadioButton = document.querySelector('.main-dish');
var dessertRadioButton = document.querySelector('.dessert-dish');
// var entireMealRadioButton = document.querySelector('.entire-meal');

var rightBoxContent = document.querySelector('.right-box-content');

var letsCookButton = document.querySelector('.left-box-button');



//Global Variables here---------------------------->
var sides = [
  'Miso Glazed Carrots',
  'Coleslaw',
  'Garden Salad',
  'Crispy Potatoes',
  'Sweet Potato Tots',
  'Coconut Rice',
  'Caesar Salad',
  'Shrimp Summer Rolls',
  'Garlic Butter Mushrooms',
  'Hush Puppies',
];
var mainDish = [
  'Spaghetti and Meatballs',
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
  'Margarita Pizza',
];
var dessert = [
  'Apple Pie',
  'Lemon Meringue Pie',
  'Black Forest Cake',
  'Banana Bread',
  'Peach Cobbler',
  'Cheesecake',
  'Funfetti Cake',
  'Baklava',
  'Flan',
  'Macarons',
  'Chocolate Cupcakes',
  'Pavlova',
  'Pumpkin Pie',
  'Key Lime Pie',
  'Tart Tatin',
  'Croissants',
  'Eclairs',
];
var entireMeal = [];


//Event Listeners here---------------------------->
// sideRadioButton.addEventListener('click', showSide);

letsCookButton.addEventListener('click', showMyMeal);


//Functions here---------------------------->
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
};


function showMyMeal() {
  var randomSide = sides[getRandomIndex(sides)];
  var randomMainDish = mainDish[getRandomIndex(mainDish)];
  var randomDessert = dessert[getRandomIndex(dessert)];
  
  if (sideRadioButton.checked === true) {
    getRandomSide(randomSide);
  } 
  if (mainDishRadioButton.checked === true) {
     getRandomMainDish(randomMainDish);
  } 
  if (dessertRadioButton.checked === true) {
    getRandomDessert(randomDessert) 
  }
};

function getRandomSide(side) {
  rightBoxContent.innerHTML = `
  <h1 class="right-box-upper-message">You should make:<h1>
  <h2 class="right-box-main-message">${side}</h2>
  <button class="clear-button" type="button">CLEAR</button>`
};

function getRandomMainDish(main) {
  rightBoxContent.innerHTML = `
    <h1 class="right-box-upper-message">You should make:<h1>
    <h2 class="right-box-main-message">${main}</h2>
    <button class="clear-button" type="button">CLEAR</button>`
};

function getRandomDessert(dessert) {
  rightBoxContent.innerHTML = `
  <h1 class="right-box-upper-message">You should make:<h1>
  <h2 class="right-box-main-message">${dessert}</h2>
  <button class="clear-button" type="button">CLEAR</button>`
  
};

function clearAll() {

sideRadioButton.checked = false; 
mainDishRadioButton = false;
dessertRadioButton = false; 
};





