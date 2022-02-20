// Button variables
var addRecipeButton = document.querySelector('.add-recipe');
var sideButton = document.querySelector('input[value="sides"]');
var mainDishButton = document.querySelector('input[value="mains"]');
var dessertButton = document.querySelector('input[value="desserts"]');
var entireMealButton = document.querySelector('input[value="entiremeals"]');
var letsCookButton = document.querySelector('.lets-cook');
var clearButton = document.querySelector('.clear');
var pot = document.querySelector('.pot');
var foodItemSingle = document.querySelector('.food-item_single');
var foodItemWrapper = document.querySelector('.food-item_wrapper');
var errorMessage = document.querySelector('.menu-error');

// Randomizer function
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// functions
function clickedLetsCook() {
  event.preventDefault();

  if (sideButton.checked) {
    potSwap();
    foodItemSingle.classList.remove('small');
    foodItemSingle.innerText = `${sides[getRandomIndex(sides)]}!`;
  } else if (mainDishButton.checked) {
    potSwap();
    foodItemSingle.classList.remove('small');
    foodItemSingle.innerText = `${mains[getRandomIndex(mains)]}!`;
  } else if (dessertButton.checked) {
    potSwap();
    foodItemSingle.classList.remove('small');
    foodItemSingle.innerText = `${desserts[getRandomIndex(desserts)]}!`;
  } else if (entireMealButton.checked) {
    potSwap();
    foodItemSingle.classList.add('small');
    foodItemSingle.innerText = `${mains[getRandomIndex(mains)]}
    with a side of ${sides[getRandomIndex(sides)]}
    and ${desserts[getRandomIndex(desserts)]} for dessert!`;
  } else {
    errorMessage.classList.remove('hidden');
  }

}

function potSwap() {
  pot.classList.add('hidden');
  errorMessage.classList.add('hidden');
  foodItemWrapper.classList.remove('hidden');
  clearButton.classList.remove('hidden');
}

function clearScreen() {
  sideButton.checked = false;
  mainDishButton.checked = false;
  dessertButton.checked = false;
  entireMealButton.checked = false;
  errorMessage.classList.add('hidden');
  foodItemWrapper.classList.add('hidden');
  pot.classList.remove('hidden');
}


// Food arrays
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
'Hush Puppies']

var mains = [
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
'Margarita Pizza']

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
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs']

// EventListeners
// addRecipeButton.addEventListener('click',);
letsCookButton.addEventListener('click', clickedLetsCook);
clearButton.addEventListener('click', clearScreen);
