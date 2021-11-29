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

const show = element => element.classList.remove('hidden');

const hide = element => element.classList.add('hidden');

const getRandomFood = array => array[Math.floor(Math.random() * array.length)];

const disableButton = () => submitButton.disabled = true;

const enableButton = () => submitButton.disabled = false;

const fadeIn = element => {
  element.classList.add('fade-in');
  element.classList.remove('hidden');
}

const timedSearch = event => {
  event.preventDefault();
  hide(outputPrompt);
  hide(selectedFood);
  hide(clearButton);
  show(loader);
  hide(cookpot);
  disableButton();
  setTimeout(function(){selectBasicFoodType()}, 1500);
}

const selectBasicFoodType = () => {
  findUserChoice();
  hide(loader);
  hide(cookpot);
  fadeIn(outputPrompt);
  fadeIn(selectedFood);
  fadeIn(clearButton);
  enableButton();
}

const findUserChoice = () => {
  firstSelection.checked ? selectedFood.innerText = getRandomFood(sides) + "!"
  : secondSelection.checked ? selectedFood.innerText = getRandomFood(mainDishes) + "!"
  : thirdSelection.checked ? selectedFood.innerText = getRandomFood(desserts) + "!"
  : fourthSelection.checked ? selectedFood.innerText = `${getRandomFood(mainDishes)} with ${getRandomFood(sides)}, and ${getRandomFood(desserts)} for dessert!`
  : selectedFood.innerText = '';
}

const clearResults = () => {
  firstSelection.checked = false;
  secondSelection.checked = false;
  thirdSelection.checked = false;
  fourthSelection.checked = false;
  hide(outputPrompt);
  hide(selectedFood);
  hide(clearButton);
  fadeIn(cookpot);
  disableButton();
}

document.onload = disableButton();
submitButton.addEventListener('click', timedSearch);
clearButton.addEventListener('click', clearResults);
firstSelection.addEventListener('click', enableButton);
secondSelection.addEventListener('click', enableButton);
thirdSelection.addEventListener('click', enableButton);
fourthSelection.addEventListener('click', enableButton);
