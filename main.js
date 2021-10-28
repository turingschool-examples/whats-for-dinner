var addRecipeButton = document.getElementByID('add-recipe-button');
var selectionForm = document.getElementByID('selection-form');
var userChoice = document.getElementsByName('radio-button');
var firstSelection = document.getElementByID('first-item');
var secondSelection = document.getElementByID('second-item');
var thirdSelection = document.getElementByID('third-item');
var fourthSelection = document.getElementByID('fourth-item');
var submitButton = document..getElementByID('submit-button');
var cookpot = document.getElementByID('cookpot');
var outputPrompt = document.getElementByID('you-should-make');
var selectionOutput = document.getElementByID('selection-output');
var clearButton = document.getElementByID('clear-selection-button');

var sides = ['Mac n Cheese', 'Coleslaw', 'Pinto Beans', 'Baked Beans', 'Green Beans', 'Fries', 'Fried Pickles', 'Fried Okra', 'Potato Salad', 'Small Salad'];

var mainDishes = ['Ribs', 'Sliced Brisket', 'Chopped Brisket', 'Balogna', 'Pulled Pork', 'Hot Links', 'Chicken'];

var desserts = ['Brownie', 'Cookie', 'Apple Pie', 'Peach Cobbler', 'Ice Cream', 'Banana Pudding', 'Carrot Cake'];

//Event listeners:
addRecipeButton.addEventListener('click', addRecipe());
submitButton.addEventListener('click', selectBasicFoodType());
clearButton.addEventListener('click', clearResults());

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function selectBasicFoodType() {
  var choice = findUserChoice();
  selectionOutput.innerText = choice[getRandomIndex(choice)] + '!';
  hide(cookpot);
  show(outputPrompt);
  show(selectionOutput);
  show(clearButton);
};

function findUserChoice() {
  var usersChoice = '';
  if (firstSelection.checked) {
    usersChoice = 'sides';
  } else if (secondSelection.checked) {
    usersChoice = 'mainDishes';
  } else if (thirdChoice.checked) {
    usersChoice = 'desserts';
  } else if (fourthChoice.checked) {
    usersChoice = 'entireMeal';
  }
  return userChoice;
};

function clearResults() {
  hide(outputPromt);
  hide(selectionOutput);
  hide(clearButton);
  show(cookpot);
}
