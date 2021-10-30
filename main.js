var main = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen"
];

var side = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls"
];

var dessert = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Macarons",
"Macaroons"
];





// When a user selects a dish option (don’t worry about “Entire Meal”) and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category
// When the dish name appears, the cookpot icon disappears


//Materials
var sideRadioInput = document.querySelector('#side');
var mainRadioInput = document.querySelector('#main');
var dessertRadioInput = document.querySelector('#dessert');
var entireMealRadioInput = document.querySelector('#entire-meal');
var letsCookButton = document.querySelector('button');
var potPic = document.querySelector('img');
var emptyBoxSpace = document.querySelector('#empty-box');


letsCookButton.addEventListener('click', chooseRecipe);

function chooseRecipe() {
  var recipeName = ""
 if (sideRadioInput.checked) {
   recipeName = side[getRandomIndex(side)]
 } else if (mainRadioInput.checked) {
    recipeName = main[getRandomIndex(main)]
 } else if (dessertRadioInput.checked) {
      recipeName = dessert[getRandomIndex(dessert)]
 } else if (entireMealRadioInput.checked) {
      recipeName =
       `${side[getRandomIndex(side)]} with a side of ${main[getRandomIndex(main)]}
        and ${dessert[getRandomIndex(dessert)]}`
 } else {
       recipeName = throwError();
     }
emptyBoxSpace.innerHTML = `<p class="recipe">You Should Make:<br><span class="chosen-meal">${recipeName}</span></p>`;
stopButton();
}

function stopButton() {
  if (!sideRadioInput.checked && !mainRadioInput.checked && !dessertRadioInput.checked && !entireMealRadioInput.checked) {
   letsCookButton.disabled = true;
 }
   letsCookButton.disabled = false;
}

function throwError() {
 if (!sideRadioInput.checked && !mainRadioInput.checked && !dessertRadioInput.checked && !entireMealRadioInput.checked)
     recipeName = `You need to select an option!`;
     return recipeName;
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
