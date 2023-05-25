// IMPORTS
import { sides } from './data/sides.js';
import { mains } from './data/mains.js';
import { desserts } from './data/desserts.js';

// FUNCTIONS AND HANDLERS

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

console.log(getRandomIndex(sides));

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

// console.log(createSuggestion(returnRandomSide(), returnRandomMain(), returnRandomDessert()))

/* 
state variable that holds the current meal object?

create object that store the values from data files

grab element that displays the meal to the user
function that is called on click that takes in object as parameter
  uses that object to populate the elements in the meal box
*/