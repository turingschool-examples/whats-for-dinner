var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies",
  "Stuffing"
];
var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
];
var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
];

var letsCookButton = document.querySelector('.lets-cook-button');
var sideButton = document.querySelector('#side');
var mainDishButton = document.querySelector('#maindish');
var dessertButton = document.querySelector('#dessert');
var cookPotView = document.querySelector('.cookpot-view');
var resultsView = document.querySelector('.results-view');
var recipeResult = document.querySelector('.results');
var clearResult = document.querySelector('.clear-button');

letsCookButton.addEventListener("click", showRecipe);
clearResult.addEventListener("click", clearRecipe);

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function showRecipe() {
  cookPotView.classList.add('hidden');
  resultsView.classList.remove('hidden');
  recipeResult.innerText = "Recipe Results Show Here";
  //if (sideButton.checked === true) ->-> show random side index in the innerText value
  //need to add a .innerText to add item from whichever button is selected to the results class
};
function clearRecipe() {
  recipeResult.classList.add('hidden');
};
