// VARIABLE ARRAYS

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
  'Margarita Pizza',
];

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
  'Tart Tatin',
  'Croissants',
  'Eclairs',
];

// VARIABLES //

// RADIO BUTTONS
var sideRadio = document.querySelector('#side');
var mainRadio = document.querySelector('#main-dish');
var dessertRadio = document.querySelector('#dessert');
var entireMealRadio = document.querySelector('#entire-meal');

// CALLOUT BUTTONS & MODIFIERS
var letsCookBtn = document.querySelector('#cook');
var clearBtn = document.querySelector('#clear');
var cookpotImg = document.querySelector('#cookpot');
var shouldMake = document.querySelector('#make-title');
var mealText = document.querySelector('#meal-text');

// EVENT LISTENERS
// letsCookBtn.addEventListener("click", displayMeal();
letsCookBtn.addEventListener("click", displayMeal);
clearBtn.addEventListener("click", potView);

// EVENT HANDLERS

function displayMeal() {
  if (sideRadio.checked) {
    getRandomSide();
  } else if (mainRadio.checked) {
    getRandomMain();
  } else if (dessertRadio.checked) {
    getRandomDessert();
  } else if (entireMealRadio.checked) {
    getRandomMeal();
  }
}

// FUNCTIONS //
function preventDefault() {
  event.preventDefault();
}

// function hidecookPotImg(){
//   co
// }

// MEAL CONTAINER VIEW FUNCTIONS //
function recipeView() {
  cookpotImg.classList.add("hidden");
  shouldMake.classList.remove("hidden");
  mealText.classList.remove("hidden");
  clearBtn.classList.remove("hidden");
}

function potView() {
  cookpotImg.classList.remove("hidden");
  shouldMake.classList.add("hidden");
  mealText.classList.add("hidden");
  clearBtn.classList.add("hidden");
}

// RANDOMIZER FUNCTIONS  //

function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length);
}

function getRandomSide() {
  preventDefault();
  if(sideRadio.value) {
    recipeView();
    mealText.innerText = `${sides[getRandomIndex(sides)]}!`;
  }
}

function getRandomMain() {
  preventDefault();
  if(mainRadio.value) {
    recipeView();
    mealText.innerText = `${mains[getRandomIndex(mains)]}!`;
  }
}

function getRandomDessert() {
  preventDefault();
  if(dessertRadio.value) {
    recipeView();
    mealText.innerText = `${desserts[getRandomIndex(desserts)]}!`;
  }
}

function getRandomMeal() {
  preventDefault();
  if(entireMealRadio.value) {
    recipeView();
    mealText.innerText = `${mains[getRandomIndex(mains)]}, with a side of ${sides[getRandomIndex(sides)]}, and ${desserts[getRandomIndex(desserts)]} for dessert!`;
  }
}
