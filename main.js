// IMPORTS
import { sides } from './data/sides.js';
import { mains } from './data/mains.js';
import { desserts } from './data/desserts.js';

// QUERY SELECTORS

// MEAL CARD
var cookpot = document.querySelector('#cookpot');
var mealCardSpan = document.querySelector('#meal-card span');
var mealSuggestion = document.querySelector('#generated-meal');

// BUTTONS
var letsCookBtn = document.querySelector('#form-submit-button');

// CHECKBOXES
var entireMealCB = document.querySelector('input[name=meal]');
var sideMainDessertCheckBoxes = document.querySelectorAll('.cb');

// EVENT LISTENERS

letsCookBtn.onclick = (event) => {
  event.preventDefault();
  toggleClass(cookpot, 'hidden');
  toggleClass(mealCardSpan, 'hidden');
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
      entireMealCB.checked = !entireMealCB.checked
    }
    if (allCBAreChecked) {
      toggleCheckBoxes();
      entireMealCB.checked = true;
    } 
  });
}

// FUNCTIONS AND HANDLERS
var currentMeal;

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
