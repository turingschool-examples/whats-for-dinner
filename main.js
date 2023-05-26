// IMPORTS
import { sides } from './data/sides.js';
import { mains } from './data/mains.js';
import { desserts } from './data/desserts.js';

// QUERY SELECTORS
var mainElement = document.querySelector('main');
var header = document.querySelector('header');

// MEAL CARD
var cookpot = document.querySelector('#cookpot');
var mealCardSpan = document.querySelector('#meal-card span');
var mealSuggestion = document.querySelector('#generated-meal');
var favoriteBtn = document.querySelector('#favorite');

// BUTTONS
var letsCookBtn = document.querySelector('#form-submit-button');
var viewFavorites = document.querySelector('#view-favorites');
var backToMain = document.querySelector('#back-to-main');

// CHECKBOXES
var entireMealCB = document.querySelector('input[name=meal]');
var sideMainDessertCheckBoxes = document.querySelectorAll('.cb');
var [sideCB, mainCB, dessertCB] = [...sideMainDessertCheckBoxes];

// FAVORITES CONTAINER
var favoritesContainer = document.querySelector('.favorite-container');

// EVENT LISTENERS

letsCookBtn.onclick = (event) => {
  event.preventDefault();
  toggleClass(cookpot, 'hidden');
  toggleClass(mealCardSpan, 'hidden');
  renderMeal();
};

entireMealCB.onchange = (event) => {
  if (event.target.checked) {
    toggleCheckBoxes();
    event.target.checked = true;
  } else {
    event.target.checked = false;
  }
};

for (var i = 0; i < sideMainDessertCheckBoxes.length; i++) {
  sideMainDessertCheckBoxes[i].addEventListener('change', () => {
    var allCBAreChecked = checkIfAllCBChecked();
    if (entireMealCB.checked) {
      entireMealCB.checked = !entireMealCB.checked;
    }
    if (allCBAreChecked) {
      toggleCheckBoxes();
      entireMealCB.checked = true;
    }
  });
}

favoriteBtn.onclick = () => {
  addToFavorites(currentMeal);
}

viewFavorites.onclick = toggleFavorites;

backToMain.onclick = toggleFavorites;

// FUNCTIONS AND HANDLERS
var currentMeal;
var favoriteMeals = [];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createSuggestion(side, main, dessert) {
  return {
    side: side ?? '',
    main: main ?? '',
    dessert: dessert ?? '',
  };
}

function getRandomDish(array) {
  return array[getRandomIndex(array)];
}

function returnRandomMeal() {
  var randomSide = getRandomDish(sides);
  var randomMain = getRandomDish(mains);
  var randomDessert = getRandomDish(desserts);

  return createSuggestion(randomSide, randomMain, randomDessert);
}

function checkIfAllCBChecked() {
  for (var i = 0; i < sideMainDessertCheckBoxes.length; i++) {
    if (!sideMainDessertCheckBoxes[i].checked) {
      return false;
    }
  }
  return true;
}

function toggleCheckBoxes() {
  for (var i = 0; i < sideMainDessertCheckBoxes.length; i++) {
    if (sideMainDessertCheckBoxes[i].checked) {
      sideMainDessertCheckBoxes[i].checked =
        !sideMainDessertCheckBoxes[i].checked;
    }
  }
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}

function returnRequestedMeal(suggestion) {
  var side = sideCB.checked && !mainCB.checked && !dessertCB.checked;
  var main = !sideCB.checked && mainCB.checked && !dessertCB.checked;
  var dessert = !sideCB.checked && !mainCB.checked && dessertCB.checked;
  var sideAndMain = sideCB.checked && mainCB.checked && !dessertCB.checked;
  var mainAndDessert = !sideCB.checked && mainCB.checked && dessertCB.checked;
  var sideAndDessert = sideCB.checked && !mainCB.checked && dessertCB.checked;
  var entireMeal = entireMealCB.checked;

  if (side) {
    return `${suggestion.side}!`;
  } else if (main) {
    return `${suggestion.main}!`;
  } else if (dessert) {
    return `${suggestion.dessert}!`;
  } else if (sideAndMain) {
    return `${suggestion.main} with a side of ${suggestion.side}!`;
  } else if (mainAndDessert) {
    return `${suggestion.main} and ${suggestion.dessert} for dessert!`;
  } else if (sideAndDessert) {
    return `${suggestion.side} as a side and ${suggestion.dessert} for dessert!`;
  } else if (entireMeal) {
    return `${suggestion.main} with a side of ${suggestion.side} and ${suggestion.dessert} for dessert!`;
  }
}

function renderMeal() {
  currentMeal = returnRequestedMeal(returnRandomMeal());

  mealSuggestion.innerText = currentMeal;
}

function addToFavorites(meal) {
  if (favoriteMeals.length === 0) {
    favoriteMeals.push(meal);
  }
  if (!favoriteMeals.includes(meal)) {
    favoriteMeals.push(meal);
  }
}

function toggleFavorites() {
  toggleClass(favoritesContainer, 'hidden');
  toggleClass(header, 'hidden');
  toggleClass(mainElement, 'hidden');
}