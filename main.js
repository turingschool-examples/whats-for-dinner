///////// ARRAYS /////////

var sidesArray = ["French Fries", "Potatoes", "Glazed Carrots", "Coleslaw", "Garden Salad", "Caesar Salad", "Tater Tots", "Coconut Rice", "Fruit Salad", "Egg Rolls", "Garlic Bread", "Hush Puppies"]
var mainArray = ["Lasagna", "Sushi", "Beef Stew", "Tacos", "Fried Chicken", "Shakshuka", "Bibimbap", "Ramen", "Empanadas", "Veggie Rice", "Cheese Pizza"]
var dessertArray = ["Cookies", "Ice Cream", "Apple Pie", "Carrot Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"]

///////// QUERY SELECTORS /////////

// buttons

var letsCookButton = document.querySelector(".letscook");
var clearButton = document.querySelector(".clear-button");

// right box

var transparentBoxRight = document.querySelector(".transparent-box-right");
var hidden = document.querySelector("hidden");
var cookpot = document.querySelector(".cookpot");
var eatThis = document.querySelector(".eatthis");
var recipe = document.querySelector(".recipe");
var entireMeal = document.querySelector(".entire-meal");

///////// ELEMENTS BY ID /////////

var circleSide = document.getElementById("circle-side");
var circleMain = document.getElementById("circle-main");
var circleDessert = document.getElementById("circle-dessert");
var circleEntireMeal = document.getElementById("circle-entire-meal");

///////// EVENT LISTENERS /////////

letsCookButton.addEventListener("click", letsCook);
clearButton.addEventListener("click", clear);

///////// FUNCTIONS /////////

// randomizer

function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length);
};

// specific recipe arrays

function getRandomSide() {
	var randomSideIndex = getRandomIndex(sidesArray);
  return sidesArray[randomSideIndex];
}

function getRandomMain() {
	var randomMainIndex = getRandomIndex(mainArray);
  return mainArray[randomMainIndex];
}

function getRandomDessert() {
	var randomDessertIndex = getRandomIndex(dessertArray);
  return dessertArray[randomDessertIndex];
}

// after letsCookButton clicked

function preventDefault() {
  event.preventDefault();
}

function showAlert() {
  alert("Please select an option!");
}

// buttons

function clear() {
  cookpot.classList.remove("hidden");
  recipe.classList.add("hidden");
  eatThis.classList.add("hidden");
  clearButton.classList.add("hidden");
}

function letsCook() {
  cookpot.classList.add("hidden");
  recipe.classList.remove("hidden");
  eatThis.classList.remove("hidden");
  clearButton.classList.remove("hidden");
  preventDefault();
  if (circleSide.checked === true) {
    recipe.innerText = getRandomSide() + "!";
  } else if (circleMain.checked === true) {
    recipe.innerText = getRandomMain() + "!";
  } else if (circleDessert.checked === true) {
    recipe.innerText = getRandomDessert() + "!";
} else {
    cookpot.classList.remove("hidden");
    eatThis.classList.add("hidden");
    clearButton.classList.add("hidden");
    recipe.classList.add("hidden");
    showAlert();
  }
}
