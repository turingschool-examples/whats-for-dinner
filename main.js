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

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function returnRandomSide() {
  return sides[getRandomIndex(sides)];
}

function returnRandomMain() {
  return mains[getRandomIndex(mains)];
}

function returnRandomDessert() {
  return desserts[getRandomIndex(desserts)];
}

var currentMeal;

function createSuggestion(side, main, dessert) {
  return {
    side: side ?? '',
    main: main ?? '',
    dessert: dessert ?? '',
  };
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}
