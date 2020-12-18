// Create variables targetting the relevant DOM elements here.
var cookPotImg = document.querySelector('#svg-cookpot');
var cook = document.querySelector('.cook');
var shouldMake = document.querySelector("#you-make");
var clearButton = document.querySelector("#clear");
var dishState = document.querySelector("#dish-state");
var mainState = document.querySelector("#main-state");
var wholeMealStatement = document.querySelector("#change-meal");
var dishStatement = document.querySelector("#change-dish");
var yourPick = false;

// Add your event listeners here
cook.addEventListener("click", changeToDish);
clearButton.addEventListener("click", reset);

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
  console.log(yourPick);
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
  checkRadioButtons();
  if (yourPick === false) {
    return
  } else if (yourPick === "entire") {
    event.preventDefault();
    hideMain(cookPotImg);
    unhideMain(mainState);
    randomEntireMeal();
  } else {
    event.preventDefault();
    hideMain(cookPotImg);
    unhideDish(dishState);
    randomDish();
  }
}
