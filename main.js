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

// EVENT LISTENERS

letsCookBtn.onclick = (event) => {
  event.preventDefault();
  toggleClass(cookpot, 'hidden');
  toggleClass(mealCardSpan, 'hidden');
};

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
  var randomDessert = getRandomDish(desserts)

  return createSuggestion(randomSide, randomMain, randomDessert);
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}
