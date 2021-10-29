var cookpot = document.querySelector(".cookpot");

var youShouldMake = document.querySelector(".should-make");
var randomFood = document.querySelector(".random-food");
var clearBtn = document.querySelector(".clear-btn")

var sideRadioBtn = document.querySelector(".side");
var mainDishRadioBtn = document.querySelector(".main-dish");
var dessertRadioBtn = document.querySelector(".dessert");
var entireMealBtn = document.querySelector(".entire-meal")

var randomFoodPlacement = document.querySelector(".random-food")
var letsCookBtn = document.querySelector(".cook-btn");
var


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


function showNewMenuItem() {
  cookpot.classList.add("hidden");
  youShouldMake.classList.remove("hidden");
  randomFood.classList.remove("hidden");
  clearBtn.classList.remove("hidden")
};


letsCookBtn.addEventListener("click", function(event) {
  event.preventDefault();
  generateNewMenuItem();
});


function generateNewMenuItem() {
  if (sideRadioBtn.checked) {
    randomFoodPlacement.innerText = sides[getRandomIndex(sides)];
  } else if (mainDishRadioBtn.checked) {
    mains[getRandomIndex(mains)];
    randomFoodPlacement.innerText = mains[getRandomIndex(mains)];
  } else if (dessertRadioBtn.checked) {
    randomFoodPlacement.innerText = desserts[getRandomIndex(desserts)];
  } else if (entireMealBtn.checked) {
    randomFoodPlacement.innerText = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`
  };
  showNewMenuItem();
};

function returnEmptyBox() {
  cookpot.classList.remove("hidden");
  youShouldMake.classList.add("hidden");
  randomFood.classList.add("hidden");
  clearBtn.classList.add("hidden")
};
