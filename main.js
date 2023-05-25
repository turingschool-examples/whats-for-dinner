// IMPORTS
import { sides } from './data/sides.js';
import { mains } from './data/mains.js';
import { desserts } from './data/desserts.js';

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
