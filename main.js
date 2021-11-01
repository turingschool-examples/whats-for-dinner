var addRecipeButton = document.getElementById('add-recipe-button');
var selectionForm = document.getElementById('selection-form');
var firstSelection = document.getElementById('first-item');
var secondSelection = document.getElementById('second-item');
var thirdSelection = document.getElementById('third-item');
var fourthSelection = document.getElementById('fourth-item');
var submitButton = document.getElementById('submit-button');
var cookpot = document.getElementById('cookpot');
var outputPrompt = document.getElementById('you-should-make');
var selectedFood = document.getElementById('selection-output');
var clearButton = document.getElementById('clear-selection-button');
var loader = document.querySelector('#lds-ripple');
var userInputSection = document.getElementById('user-input-section');

document.onload = disableButton();
submitButton.addEventListener('click', timedSearch);
clearButton.addEventListener('click', clearResults);
firstSelection.addEventListener('click', enableButton);
secondSelection.addEventListener('click', enableButton);
thirdSelection.addEventListener('click', enableButton);
fourthSelection.addEventListener('click', enableButton);

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function fadeIn(element) {
  element.classList.add('fade-in');
  element.classList.remove('hidden');
}

function getRandomFood(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function disableButton() {
  submitButton.disabled = true;
}

function enableButton() {
  submitButton.disabled = false;
}

function timedSearch() {
  event.preventDefault();
  hide(outputPrompt);
  hide(selectedFood);
  hide(clearButton);
  show(loader);
  hide(cookpot);
  setTimeout(function(){selectBasicFoodType()}, 1500);
}

function selectBasicFoodType() {
  findUserChoice();
  hide(loader);
  hide(cookpot);
  fadeIn(outputPrompt);
  fadeIn(selectedFood);
  fadeIn(clearButton);
};

function findUserChoice() {
  if (firstSelection.checked) {
    selectedFood.innerText = getRandomFood(sides) + "!";
  } else if (secondSelection.checked) {
    selectedFood.innerText = getRandomFood(mainDishes) + "!";
  } else if (thirdSelection.checked) {
    selectedFood.innerText = getRandomFood(desserts) + "!";
  } else if (fourthSelection.checked) {
    selectedFood.innerText = `${getRandomFood(mainDishes)} with ${getRandomFood(sides)}, and ${getRandomFood(desserts)} for dessert!`;
  }
}

function clearResults() {
  firstSelection.checked = false;
  secondSelection.checked = false;
  thirdSelection.checked = false;
  fourthSelection.checked = false;
  hide(outputPrompt);
  hide(selectedFood);
  hide(clearButton);
  cookpot.classList.add('fade-in');
  fadeIn(cookpot);
  disableButton();
}
