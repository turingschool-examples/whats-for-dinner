// When a user selects a dish option and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category

//Query Selectors:
var sideButton = document.querySelector(".side");
var mainDishButton = document.querySelector(".main-dish");
var dessertsButton = document.querySelector(".dessert");
var entireMealButton = document.querySelector(".entire-meal");
var letsCookButton = document.querySelector(".button2");
//var addARecipeButton = document.querySelector(".button1");
var cookPotImage = document.querySelector(".cookpot");
var dinnerSuggestions = document.querySelector(".suggestions");
var youShouldMake = document.querySelector(".h3");

letsCookButton.addEventListener("click", showRandomFood);
/*------------------------FUNCTIONS-------------------------*/
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showRandomFood() {
  event.preventDefault();
  if (sideButton.checked) {
    dinnerSuggestions.innerHTML = `${sides[getRandomIndex(sides)]}!`;
  } else if (mainDishButton.checked) {
    dinnerSuggestions.innerHTML = `${mains[getRandomIndex(mains)]}!`;
  } else if (dessertsButton.checked) {
    dinnerSuggestions.innerHTML = `${desserts[getRandomIndex(desserts)]}!`;
  }
  displaySelection();
}

function displaySelection() {
  cookPotImage.classList.add("hidden");
  youShouldMake.classList.remove("hidden");
  dinnerSuggestions.classList.remove("hidden");
  //clearBtn.classList.remove('hidden');
}

//Event listeners:
// letsCookButton.addEventListener("click", displayRandomFood);
//
// //Functions:
// //want to get all 3 functions into one mega-function with if statements...somehow...
//
// //toggle event here?
// //instead of adding a class and removing it
// //cookPotImage.classList.toggle(" ");
//
// function displaySideDish() {
//   if (sideButton.checked) {
//     dinnerSuggestions.classList.remove("hidden");
//     dinnerSuggestions.innerText = `${sides[getRandomIndex(sides)]}`;
//   }
// }
//
// // function displayRandomFood() {
// //   event.preventDefault();
// //   cookPotImage.classList.add("hidden");
// //   dinnerSuggestions.classList.remove("hidden");
// // }
// // displayRandomFood();
//
// function displayRandomFood() {
//   var randomSide = sides[getRandomIndex(sides)];
//   //var randomMain = main[getRandomIndex(main)];
//   //var randomDessert = dessert[getRandomIndex(dessert)];
// }
// displayRandomFood();
//
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
//
