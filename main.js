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
var entireMealButton = document.querySelector('#entiremeal');
var formView = document.querySelector('#form-view');
var cookPotView = document.querySelector('.cookpot-view');
var resultsView = document.querySelector('.results-view');
var favoritesView = document.querySelector('.favorites-view');
var recipeResult = document.querySelector('.results');
var clearResult = document.querySelector('.clear-button');
var favoriteButton = document.querySelector('.favorite-button');
var viewFavoritesButton = document.querySelector('.view-favorite-button');
var favoriteRecipeList = document.querySelector('.favorites');

var favoriteRecipies = [];
var recipe;

letsCookButton.addEventListener("click", showRecipe);
clearResult.addEventListener("click", clearRecipe);
favoriteButton.addEventListener("click", addRecipe);
viewFavoritesButton.addEventListener("click", showFavoriteRecipes);

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function chooseRecipe() {
  var recipe = recipeResult.innerText;
  if (sideButton.checked) {
    recipeResult.innerText = getRandomIndex(sides)
  } else if (mainDishButton.checked) {
    recipeResult.innerText = getRandomIndex(mains)
  } else if (dessertButton.checked) {
    recipeResult.innerText = getRandomIndex(desserts)
  } else if (entireMealButton.checked) {
    recipeResult.innerText = `${getRandomIndex(mains)} with a side of ${getRandomIndex(sides)} and ${getRandomIndex(desserts)} for dessert!`;
  };
};

function showRecipe() {
  cookPotView.classList.add('hidden');
  resultsView.classList.remove('hidden');
  chooseRecipe();
};

function clearRecipe() {
  location.reload();
};

function addRecipe() {
  favoriteRecipies.push(recipeResult.innerText);
  console.log(favoriteRecipies);
};

function showFavoriteRecipes() {
  formView.classList.add('hidden');
  resultsView.classList.add('hidden');
  favoritesView.classList.remove('hidden');
  favoriteRecipeList.innerText += favoriteRecipies;
}
