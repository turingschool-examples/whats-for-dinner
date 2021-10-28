var sides = ['Mac n Cheese', 'Coleslaw', 'Pinto Beans', 'Baked Beans', 'Green Beans', 'Fries', 'Fried Pickles', 'Fried Okra', 'Potato Salad', 'Small Salad'];

var mainDishes = ['Ribs', 'Sliced Brisket', 'Chopped Brisket', 'Balogna', 'Pulled Pork', 'Hot Links', 'Chicken'];

var desserts = ['Brownie', 'Cookie', 'Apple Pie', 'Peach Cobbler', 'Ice Cream', 'Banana Pudding', 'Carrot Cake'];

var addRecipeButton = document.querySelector('#add-recipe-button');
var selectionForm = document.querySelector('#selection-form');
var firstSelection = document.querySelector('#first-item');
var secondSelection = document.querySelector('#second-item');
var thirdSelection = document.querySelector('#third-item');
var fourthSelection = document.querySelector('#fourth-item');
var submitButton = document.getElementById('submit-button');
var cookpot = document.querySelector('#cookpot');
var outputPrompt = document.querySelector('#you-should-make');
var selectionOutput = document.querySelector('#selection-output');
var clearButton = document.querySelector('#clear-selection-button');

submitButton.addEventListener('click', selectBasicFoodType);
clearButton.addEventListener('click', clearResults);

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function findUserChoice() {
  if (firstSelection.checked) {
    selectionOutput.innerText = sides[getRandomIndex(sides)] + '!';
  } else if (secondSelection.checked) {
    selectionOutput.innerText = mainDishes[getRandomIndex(mainDishes)] + '!';
  } else if (thirdSelection.checked) {
    selectionOutput.innerText = desserts[getRandomIndex(desserts)] + '!';
  } else if (fourthSelection.checked) {
    selectionOutput.innerText = `${sides[getRandomIndex(sides)]}, ${mainDishes[getRandomIndex(mainDishes)]}, and ${desserts[getRandomIndex(desserts)]}!`;
  }
};

function selectBasicFoodType() {
  findUserChoice();
  hide(cookpot);
  show(outputPrompt);
  show(selectionOutput);
  show(clearButton);
};

function clearResults() {
  hide(outputPrompt);
  hide(selectionOutput);
  hide(clearButton);
  show(cookpot);
}
