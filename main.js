// *** ARRAYS ***

const sidesArray = ['French Fries', 'Potatoes', 'Glazed Carrots', 'Coleslaw', 'Garden Salad', 'Caesar Salad', 'Tater Tots', 'Coconut Rice', 'Fruit Salad', 'Egg Rolls', 'Garlic Bread', 'Hush Puppies'];
const mainArray = ['Lasagna', 'Sushi', 'Beef Stew', 'Tacos', 'Fried Chicken', 'Shakshuka', 'Bibimbap', 'Ramen', 'Empanadas', 'Veggie Rice', 'Cheese Pizza'];
const dessertArray = ['Cookies', 'Ice Cream', 'Apple Pie', 'Carrot Cake', 'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Baklava', 'Flan', 'Macarons', 'Macaroons', 'Cupcakes', 'Pavlova', 'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs'];

// *** QUERY SELECTORS ***

// buttons

const letsCookButton = document.querySelector('.letscook');
const clearButton = document.querySelector('.clear-button');

// right box

const transparentBoxRight = document.querySelector('.transparent-box-right');
const hidden = document.querySelector('hidden');
const cookpot = document.querySelector('.cookpot');
const eatThis = document.querySelector('.eatthis');
const recipe = document.querySelector('.recipe');
const entireMeal = document.querySelector('.entire-meal');

// *** ELEMENTS BY ID ***

const circleSide = document.getElementById('circle-side');
const circleMain = document.getElementById('circle-main');
const circleDessert = document.getElementById('circle-dessert');
const circleEntireMeal = document.getElementById('circle-entire-meal');

// *** FUNCTIONS ***

// randomizer

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// specific recipe arrays

function getRandomSide() {
  const randomSideIndex = getRandomIndex(sidesArray);
  return sidesArray[randomSideIndex];
}

function getRandomMain() {
  const  randomMainIndex = getRandomIndex(mainArray);
  return mainArray[randomMainIndex];
}

function getRandomDessert() {
  const randomDessertIndex = getRandomIndex(dessertArray);
  return dessertArray[randomDessertIndex];
}

// after letsCookButton clicked

function preventDefault() {
  event.preventDefault();
}

function showAlert() {
  alert('Please select an option!');
}

// buttons

function clear() {
  cookpot.classList.remove('hidden');
  recipe.classList.add('hidden');
  eatThis.classList.add('hidden');
  clearButton.classList.add('hidden');
}

function letsCook() {
  cookpot.classList.add('hidden');
  recipe.classList.remove('hidden');
  eatThis.classList.remove('hidden');
  clearButton.classList.remove('hidden');
  preventDefault();
  if (circleSide.checked === true) {
    recipe.innerText = getRandomSide() + '!';
  } else if (circleMain.checked === true) {
    recipe.innerText = getRandomMain() + '!';
  } else if (circleDessert.checked === true) {
    recipe.innerText = getRandomDessert() + '!';
  } else {
    cookpot.classList.remove('hidden');
    eatThis.classList.add('hidden');
    clearButton.classList.add('hidden');
    recipe.classList.add('hidden');
    showAlert();
  }
}

// *** EVENT LISTENERS ***

letsCookButton.addEventListener('click', letsCook);
clearButton.addEventListener('click', clear);
