var sides = [
'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies'];

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
'Margarita Pizza'];

var desserts = [
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs'];

//Query Selectors
var crockpot = document.querySelector('.crockpot');
var sideButton = document.querySelector('#side-selected');
var mainButton = document.querySelector('#main-selected');
var dessertButton = document.querySelector('#dessert-selected');
var entireMealButton = document.querySelector('#entire-meal-selected');
var letsCookButton = document.querySelector('.lets-cook-button');
var recipeDisplay = document.getElementById('recipe-display');
var shouldMake = document.querySelector('.should-make-text');

letsCookButton.addEventListener('click', letsCook);

function letsCook() {
  removeCrockPot()
  var sideOption = sides[getRandomIndex(sides)];
  var mealOption = mainDish[getRandomIndex(mainDish)];
  var dessertOption = desserts[getRandomIndex(desserts)];
  if (sideButton.checked) {
    recipeDisplay.innerText = sideOption;
  } else if (mainButton.checked) {
    recipeDisplay.innerText = mealOption;
  } else if (dessertButton.checked) {
    recipeDisplay.innerText = dessertOption;
  } else if (entireMealButton.checked) {
    recipeDisplay.innerText = `${mealOption} with a side of ${sideOption} and a ${dessertOption} for dessert!`;
  }
}

function removeCrockPot() {
  crockpot.classList.add('hidden');
  shouldMake.classList.remove('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
