

//variables
var addRecipeButton = document.getElementById('add-recipe-button');
var letsCookButton = document.getElementById('lets-cook-button');
var potImage = document.querySelector('.cook-pot-img');
var inputSide = document.getElementById('side');
var inputMainDish = document.getElementById('main-dish');
var inputDessert = document.getElementById('dessert');
var form = document.querySelector("form");
var log = document.getElementById("log");
var savedRecipies = [];
var result = document.querySelector('.result')
var returnMsg = document.querySelector('.return-msg')
var shouldMake = document.querySelector('.you-should-make')

//event listeners

letsCookButton.addEventListener('click', showRecipe)

function removePotImage() {
  potImage.classList.add('hidden')
  };

function showRecipe(event) {
  event.preventDefault();
  removePotImage()
    if(inputMainDish.checked) {
      return randomMain()
    }
    else if(inputSide.checked) {
      return randomSide()
    }
    else if(inputDessert.checked) {
      return randomDessert()
    }
};

function showMsg() {
  shouldMake.classList.remove('hidden')
}

function removeResultsMsg() {
  result.classList.add('hidden')
};

function randomMain() {
  showMsg()
  returnMsg.innerText = mainDishes[getRandomIndex(mainDishes)];
};

function randomSide() {
  showMsg()
  returnMsg.innerText = sides[getRandomIndex(sides)];
};

function randomDessert() {
  showMsg()
  returnMsg.innerText = desserts[getRandomIndex(desserts)];
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
