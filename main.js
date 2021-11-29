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



//Materials
var sideRadioInput = document.querySelector('#side');
var mainRadioInput = document.querySelector('#main');
var dessertRadioInput = document.querySelector('#dessert');
var entireMealRadioInput = document.querySelector('#entire-meal');
var letsCookButton = document.querySelector('.cook');
var potPic = document.querySelector('img');
var mealPicked = document.querySelector('.meal-picked');
var clearButton = document.querySelector('.clear-button');

letsCookButton.addEventListener('click', chooseRecipe);
clearButton.addEventListener('click', clearRecipeForm);
window.addEventListener('load', function() {
  show([potPic]);
})

const chooseRecipe = () => {
  insertMealName();
  stopButton();
  show([clearButton]);
  hide([potPic]);
}

const clearRecipeForm = () => {
  mealPicked.innerHTML = "";
  hide([clearButton]);
  show([potPic]);
}

const insertMealName = () => {
  const recipeButtons = []
  var recipeName = "";
   if (sideRadioInput.checked) {
    recipeName = getRandomMeal(side) + "!";
  } else if (mainRadioInput.checked) {
    recipeName = getRandomMeal(main) + "!";
  } else if (dessertRadioInput.checked) {
    recipeName = getRandomMeal(dessert) + "!";
  } else if (entireMealRadioInput.checked) {
    recipeName =
    `<p class="chosen-meal">${getRandomMeal(side)} with a side of
    ${getRandomMeal(main)} and ${getRandomMeal(dessert)}!</p>`
  } else {
    recipeName = throwError();
  }
mealPicked.innerHTML = `<p class="recipe-intro">You Should Make:</p>
<p class="chosen-meal">${recipeName}</p>`;
}

const getRandomMeal = (mealType) => {
  return mealType[getRandomIndex(mealType)];
}

const stopButton = () => {
  if (!sideRadioInput.checked && !mainRadioInput.checked && !dessertRadioInput.checked && !entireMealRadioInput.checked) {
   letsCookButton.disabled = true;
  }
   letsCookButton.disabled = false;
}

const throwError = () => {
 if (!sideRadioInput.checked && !mainRadioInput.checked && !dessertRadioInput.checked && !entireMealRadioInput.checked) {
     recipeName = `You need to select an option!`;
     return recipeName;
  }
}

const show = (elements) => {
  elements.forEach(element => element.classList.remove('hidden'));
}

const hide = (elements) => {
  elements.forEach(element => element.classList.add('hidden'));
}

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
}
