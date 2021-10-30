var addRecipeButton = document.getElementById('add-recipe-button');
var selectionForm = document.getElementById('selection-form');
var firstSelection = document.getElementById('first-item');
var secondSelection = document.getElementById('second-item');
var thirdSelection = document.getElementById('third-item');
var fourthSelection = document.getElementById('fourth-item');
var submitButton = document.getElementById('submit-button');
var cookpot = document.getElementById('cookpot');
var outputPrompt = document.getElementById('you-should-make');
var selectionOutput = document.getElementById('selection-output');
var clearButton = document.getElementById('clear-selection-button');
var loader = document.querySelector('#lds-ripple');

submitButton.addEventListener('click', timedSearch);
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
  setTimeout(function(){selectBasicFoodType()}, 1000);
}

function timedSearch() {
  event.preventDefault();
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
