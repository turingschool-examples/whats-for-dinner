var addRecipeButton = document.getElementById('add-recipe-button');
var selectionForm = document.getElementById('selection-form');
var firstSelection = document.getElementById('first-item');
var secondSelection = document.getElementById('second-item');
var thirdSelection = document.getElementById('third-item');
var fourthSelection = document.getElementById('fourth-item');
var allChoices = document.getElementsByName('radio-button');
var submitButton = document.getElementById('submit-button');
var cookpot = document.getElementById('cookpot');
var outputPrompt = document.getElementById('you-should-make');
var selectionOutput = document.getElementById('selection-output');
var clearButton = document.getElementById('clear-selection-button');
var loader = document.querySelector('#lds-ripple');
var userInputSection = document.getElementById('user-input-section');

submitButton.addEventListener('click', timedSearch);
clearButton.addEventListener('click', clearResults);
firstSelection.addEventListener('click', enableButton);
secondSelection.addEventListener('click', enableButton);
thirdSelection.addEventListener('click', enableButton);
fourthSelection.addEventListener('click', enableButton);
document.onload = buttonDisable();

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function getRandomFood(array) {
  return array[getRandomIndex(array)];
}

function findUserChoice() {
  if (firstSelection.checked) {
    selectionOutput.innerText = getRandomFood(sides) + "!";
  } else if (secondSelection.checked) {
    selectionOutput.innerText = getRandomFood(mainDishes) + "!";
  } else if (thirdSelection.checked) {
    selectionOutput.innerText = getRandomFood(desserts) + "!";
  } else if (fourthSelection.checked) {
    selectionOutput.innerText = `${getRandomFood(mainDishes)} with ${getRandomFood(sides)}, and ${getRandomFood(desserts)} for dessert!`;
  }
};

function showAnimation() {
  show(loader);
  hide(cookpot);
  setTimeout(function(){selectBasicFoodType()}, 1500);
}

function buttonDisable() {
  submitButton.disabled = true;
}

function enableButton() {
  submitButton.disabled = false;
}

function timedSearch() {
  event.preventDefault();
  hide(selectionOutput);
  hide(outputPrompt);
  showAnimation();
}

function selectBasicFoodType() {
  hide(loader);
  findUserChoice();
  hide(cookpot);
  show(outputPrompt);
  show(selectionOutput);
  show(clearButton);
};

function clearResults() {
  firstSelection.checked = false;
  secondSelection.checked = false;
  thirdSelection.checked = false;
  fourthSelection.checked = false;
  hide(outputPrompt);
  hide(selectionOutput);
  hide(clearButton);
  show(cookpot);
}
