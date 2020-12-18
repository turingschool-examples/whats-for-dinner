// Create variables targetting the relevant DOM elements here.
var cookPotImg = document.querySelector('#svg-cookpot');
var cookButton = document.querySelector('.cook');
var shouldMake = document.querySelector("#you-make");
var clearButton = document.querySelector("#clear");
var clearButtonTwo = document.querySelector("#clear-two");
var dishState = document.querySelector("#dish-state");
var mainState = document.querySelector("#main-state");
var wholeMealStatement = document.querySelector("#change-meal");
var dishStatement = document.querySelector("#change-dish");
var yourPick = false;

// Add your event listeners here
cookButton.addEventListener("click", changeToDish);
clearButton.addEventListener("click", reset);
clearButtonTwo.addEventListener("click", reset);
// Create your event handlers and other functions here.
function unhideDish(element) {
  element.classList.remove('hidden-dish');
}

function unhideMain(element) {
  element.classList.remove('hidden-main');
}

function hideMain(element) {
  element.classList.add('hidden-main');
}

function hideDish(element) {
  element.classList.remove('hidden-dish');
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function checkRadioButtons() {
  var choice = document.querySelectorAll("input");
  for (var i = 0; i < choice.length; i++) {
    if (choice[i].checked === true) {
      yourPick = choice[i].value;
    }
  }
}

function randomDish() {
  if (yourPick === "side") {
    dishStatement.innerHTML = `<p id="change-dish">${sidesList[getRandomIndex(sidesList)]}!</p>`;
  } else if (yourPick === "main") {
    dishStatement.innerHTML = `<p id="change-dish">${mainDishList[getRandomIndex(mainDishList)]}!</p>`;
  } else {
    dishStatement.innerHTML = `<p id="change-dish">${dessertList[getRandomIndex(dessertList)]}!</p>`;
  }
}

function randomEntireMeal() {
  wholeMealStatement.innerHTML = `<p id="change-meal">${mainDishList[getRandomIndex(mainDishList)]}
  with a side of ${sidesList[getRandomIndex(sidesList)]} and ${dessertList[getRandomIndex(dessertList)]} for dessert!<p>`
}

function changeToDish() {
  event.preventDefault();
  checkRadioButtons();
  if (yourPick === false) {
    errorMessage();
  } else if (yourPick === "entire") {
    hideMain(cookPotImg);
    unhideMain(mainState);
    randomEntireMeal();
  } else {
    hideMain(cookPotImg);
    unhideDish(dishState);
    randomDish();
  }
  hideMain(cookButton);
}

function errorMessage() {
  hideMain(cookPotImg);
  unhideDish(dishState);
  dishStatement.innerHTML = `<p id="change-dish">Opps, Please make a selection!</p>`;
}

function reset() {
  location.reload();
}
