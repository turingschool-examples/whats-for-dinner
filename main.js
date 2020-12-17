// Create variables targetting the relevant DOM elements here.
var cookPotImg = document.querySelector('#svg-cookpot');
var cook = document.querySelector('.cook');
var shouldMake = document.querySelector("#you-make");
var clearButton = document.querySelector("#clear");
var dishState = document.querySelector("#dish-state");
var mainState = document.querySelector("#main-state");
var wholeMeal = document.querySelector("#change-meal");
var yourPick = false;

// Add your event listeners here
cook.addEventListener("click", changetoDish);

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


console.log(mainDishList[getRandomIndex(mainDishList)]);
console.log(sidesList[getRandomIndex(sidesList)]);
console.log(dessertList[getRandomIndex(dessertList)]);

function checkRadioButtons() {
  var choice = document.querySelectorAll("input");
  for (var i = 0; i < choice.length; i++) {
    if (choice[i].checked === true) {
      yourPick = choice[i].value;
    }
  }
}

function randomDish(yourPick) {

}

function randomEntireMeal() {
  wholeMeal.innerHTML = `<p id="change-meal">${mainDishList[getRandomIndex(mainDishList)]}
  with a side of ${sidesList[getRandomIndex(sidesList)]} and ${dessertList[getRandomIndex(dessertList)]} for dessert!<p>`
}

function changetoDish() {
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
  }
}
