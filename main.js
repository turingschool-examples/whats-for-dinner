var sideRadio = document.querySelector('.side');
var mainRadio = document.querySelector('.main');
var dessertRadio = document.querySelector('.dessert')
var letsCook = document.querySelector('.lets-cook');
var crock = document.querySelector('.crock');
var youShouldMake = document.querySelector('.youShouldMake');
var displayRandomFood = document.querySelector('.displayRandomFood');

var showWords = {};


sideRadio.addEventListener('click', generateRandomSide);
mainRadio.addEventListener('click', generateRandomMainDish);
dessertRadio.addEventListener('click', generateRandomDessert);
letsCook.addEventListener('click', hideCrockPot);




function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function hideCrockPot() {
  event.preventDefault();
  crock.classList.add("hidden");
  displayRandomFood.classList.remove("hidden");
  youShouldMake.classList.remove("hidden");

}



function showCrockPot() {
  crock.classList.remove("hidden");
}

function hideDisplayRandomFood() {
  displayRandomFood.classList.add("hidden");
  youShouldMake.classList.add("hidden");
}

function showDisplayRandomFood() {
  displayRandomFood.classList.remove("hidden");
  youShouldMake.classList.remove("hidden");

}

function generateRandomSide() {
  showCrockPot();
  hideDisplayRandomFood();
  displayRandomFood.innerText = `${sideArray[getRandomIndex(sideArray)]}!`;

}

function generateRandomMainDish() {
  showCrockPot();
  hideDisplayRandomFood();
  displayRandomFood.innerText = `${mainsArray[getRandomIndex(mainsArray)]}!`
}

function generateRandomDessert() {
  showCrockPot();
  hideDisplayRandomFood();
  displayRandomFood.innerText = `${dessertsArray[getRandomIndex(dessertsArray)]}!`
}

hideDisplayRandomFood();
