//////////// DOM ELEMENTS  ////////////
var sideButton = document.querySelector('#side');
var mainDishButton = document.querySelector('#main-dish');
var dessertButton = document.querySelector('#dessert');
//var entireMealButton = document.querySelector('#entire-meal');
var letsCookButton = document.querySelector('#lets-cook');
var cookpotView = document.querySelector('#cookpot-view');
var youShouldMakeView = document.querySelector('#you-should-make');
var formOutput = document.querySelector('#form-output');
var clearButton = document.querySelector('#clear');
var viewFavoritesButton = document.querySelector('.view-favs');
var addToFavoritesButton = document.querySelector('.add-favorite');
var homeButton = document.querySelector('.go-home');
var leftBox = document.querySelector('.whats-cooking');
var rightBox = document.querySelector('.right-box');
var favRecipesBox = document.querySelector('.show-fav-recipes');
var favRecipesList = document.querySelector('.fav-recipe-box');
var allRadioButtons = document.querySelectorAll('.radio-button');
var errorMessage = document.querySelector('.error');

//////////// VARIABLES ////////////
var favoriteRecipes = [];

//////////// EVENT LISTENERS ////////////
letsCookButton.addEventListener('click', displayRandomFood);
clearButton.addEventListener('click', clearForm);
viewFavoritesButton.addEventListener('click', viewFavoritesPage);
addToFavoritesButton.addEventListener('click', addToFavorites);
homeButton.addEventListener('click', goHome);

favRecipesList.addEventListener('click', function(event){
  if(event.target.className === 'delete'){
    var recipe = event.target.parentElement;
    var targetRecipe = recipe.firstElementChild.innerText;
    recipe.parentNode.removeChild(recipe);
  }
  for(var i = 0; i < favoriteRecipes.length; i ++) {
    if(favoriteRecipes[i] === targetRecipe) {
      favoriteRecipes.splice(i, 1);
    }
  }
});


//////////// FUNCTIONS AND EVENT HANDLERS ////////////
function randomFoods(foodType) {
  return foodType[Math.floor(Math.random()*foodType.length)];
};

function displayRandomFood() {
  event.preventDefault();
  addToFavoritesButton.innerText = 'Add to Favorites! ♥︎'
  addToFavoritesButton.classList.remove('fav-added');
  preventEmptyInput();
};

function preventEmptyInput() {
  var buttonIsChecked = false;
  for(var i = 0; i < allRadioButtons.length ; i++) {
    if(allRadioButtons[i].checked) {
      buttonIsChecked = true;
    }
  }
  if(buttonIsChecked) {
    errorMessage.classList.add('hidden');
    displayRecipe();
  } else if (buttonIsChecked === false) {
    errorMessage.classList.remove('hidden');
  }
};

function displayRecipe() {
  if (sideButton.checked) {
    var randomSide = randomFoods(sides);
    formOutput.innerText = `${randomSide}`;
  } else if (mainDishButton.checked){
    var randomMain = randomFoods(mains);
    formOutput.innerText = `${randomMain}`;
  } else if (dessertButton.checked){
    var randomDessert = randomFoods(desserts);
    formOutput.innerText = `${randomDessert}`;
  }
  cookpotView.classList.add('hidden');
  youShouldMakeView.classList.remove('hidden');
};

function clearForm() {
  cookpotView.classList.toggle('hidden');
  youShouldMakeView.classList.toggle('hidden');
  addToFavoritesButton.innerText = 'Add to Favorites! ♥︎'
  addToFavoritesButton.classList.remove('fav-added');
  mainDishButton.checked = false;
  dessertButton.checked = false;
  sideButton.checked = false;
};

function hideElement(element) {
  element.classList.add('hidden');
};

function showElement(element) {
  element.classList.remove('hidden');
};

function viewFavoritesPage() {
  hideElement(leftBox);
  hideElement(rightBox);
  showElement(favRecipesBox);
  showElement(homeButton);
  favRecipesList.innerHTML = '';

  for(var i = 0; i <favoriteRecipes.length ; i++){
    favRecipesList.innerHTML += `
        <ul>
          <li>
            <span class="recipe-name">${favoriteRecipes[i]}</span>
            <button class="delete">Remove Favorite</button>
          </li>
        </ul>
      `
  };
};

function goHome() {
  showElement(leftBox);
  showElement(rightBox);
  hideElement(favRecipesBox);
  hideElement(homeButton);
  clearForm();
};

function addToFavorites() {
  var currentRecipe = formOutput.innerText;
  var isInArray = false;
  for(var i = 0; i < favoriteRecipes.length; i ++) {
    if (favoriteRecipes[i] === currentRecipe) {
      isInArray = true;
    }
  }
  if (!isInArray) {
    favoriteRecipes.push(currentRecipe);
    addToFavoritesButton.innerText = 'Added to Favorites! ♥︎'
    addToFavoritesButton.classList.toggle('fav-added');
  }
};
