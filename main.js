var letsCookButton = document.querySelector('.lets-cook-button');
var potImage = document.querySelector('.pot-image')
var foodText = document.querySelector('.food-text')
var sideRadioButton = document.querySelector('.side-button')
var mainDishRadioButton = document.querySelector('.main-dish-button')
var dessertRadioButton = document.querySelector('.dessert-button')
var entireMealRadioButton = document.querySelector('.entire-meal-button')
var favoriteButton = document.querySelector('.favorite-button')
var viewFavoritesButton = document.querySelector('.view-favorites-button')
var mainPage = document.querySelector('.what-are-you-looking-for-container')
var showFavoritePage = document.querySelector('.favorite-recipes-view')
var showFavoriteRecipes = document.querySelector('.saved-recipes-section')
var clearButton = document.querySelector('.clear-button')

var favoritedRecipes = [];
var currentRecipe;

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};


function displayRecipe() {
    foodText.innerHTML = ``;
  if (sideRadioButton.checked === true) {
    foodText.innerText = getRandomIndex(sides)
  } else if (mainDishRadioButton.checked === true) {
    foodText.innerText = getRandomIndex(mainDishes)
  } else if (dessertRadioButton.checked === true) {
    foodText.innerText = getRandomIndex(desserts)
  } else if (entireMealRadioButton.checked === true) {
    foodText.innerHTML +=
    `<p class="you-should-make">You Should Make:</p>
     <p class="dishes">${getRandomIndex(mainDishes)} with a side of ${getRandomIndex(sides)} and ${getRandomIndex(desserts)} for dessert!
    </p>`
  }
  currentRecipe = foodText.innerText;
  potImage.classList.add('hidden')
  foodText.classList.remove('hidden')
  clearButton.classList.remove('hidden')


  if (entireMealRadioButton.checked === false) {
    favoriteButton.classList.remove('hidden')
  };
};


function addFavoriteRecipe() {
  favoritedRecipes.push(currentRecipe)

}

function showFavorites() {
  mainPage.classList.add('hidden')
  showFavoritePage.classList.remove('hidden')
  showFavoriteRecipes.classList.remove('hidden')
  displaySavedRecipesPage();
}

function displaySavedRecipesPage() {
  showFavoriteRecipes.innerHTML = ``;
  for (var i = 0; i < favoritedRecipes.length; i++) {
    showFavoriteRecipes.innerHTML +=
    `<div class="recipe-list">${favoritedRecipes[i]}</div>`
  }
}

function reloadPage(){
  location.reload();
}


letsCookButton.addEventListener('click', displayRecipe)
favoriteButton.addEventListener('click', addFavoriteRecipe)
viewFavoritesButton.addEventListener('click', showFavorites)
clearButton.addEventListener('click', reloadPage)
