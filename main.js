// Data Model
var sides = ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad',
'Crispy Potatoes', 'Sweet Potato Tots', 'Coconut Rice', 'Caeser Salad',
'Shrimp Summer Rolls', 'Garlic Butter Mushrooms', 'Hush Puppies']

var mains = ['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka',
'Thai Yellow Curry', 'Bibimbap', 'Chicken Parmesean', 'Butternut Squash Soup',
'BBQ Chicken Burgers', 'Ramen', 'Empanadas', 'Chicken Fried Rice',
'Sheet Pan Fajitas', 'Margarita Pizza']

var desserts = ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake',
'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Baklava',
'Flan', 'Macarons', 'Chocolate Cupcakes', 'Pavlova', 'Pumpkin Pie',
'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs']

var favorites = [];

// DOM elements
var letsCookButton = document.querySelector('#letsCookButton');
var viewFavoritesButton = document.querySelector('#viewFavoritesButton');
var homeHeader = document.querySelector('.homeHeader');
var favoritesHeader = document.querySelector('.favoritesHeader');
var homeButton = document.querySelector('#homeButton');
var userInputSection = document.querySelector('.userInputSection');
var suggestionsSection = document.querySelector('.suggestionsSection');
var favoritesSection = document.querySelector('.favoritesSection');

var favoriteRecipesDisplay = document.querySelector('.favoriteRecipesDisplay');

// Event listeners
window.addEventListener('load', displayCookpot);

favoritesSection.addEventListener('dblclick', function(event) {
  deleteRecipe(event);
});
homeButton.addEventListener('click', toggleHome);
letsCookButton.addEventListener('click', displaySuggestion);
suggestionsSection.addEventListener('click', function(event) {
  addRecipeToFavorites(event);
});
viewFavoritesButton.addEventListener('click', toggleHome);

// Data model manipulation functions
function addRecipeToFavorites(event) {
  if (event.target.classList.contains('mainButton')) {
    var foodSuggestion = document.getElementById('foodSuggestion')
    favorites.push(foodSuggestion.innerText);
    alert(`This recipe was added to your favorites!`)
    addRecipeToFavDisplay(favorites[favorites.length - 1]);
  }
};

// Display functions
function addRecipeToFavDisplay(recipe) {
  favoriteRecipesDisplay.innerHTML += `
  <p class="savedRecipe">${recipe}</p>
  `
}

function deleteRecipe(event) {
  event.target.closest('.savedRecipe').remove();
}

/* eek! I know that this only updates the DOM and not my
data model... I think I would've needed to create an
array of objects, instead of an array of strings, where
each recipe instance had a unique ID, where I could use
that that ID to update my data model/favorites array AND
the DOM! */

function displayCookpot() {
  suggestionsSection.innerHTML += `
  <div class="cookpotImgContainer">
    <img src="assets/cookpot.svg">
  </div>
  `
};

function displaySuggestion() {
  suggestionsSection.innerHTML = '';
  var userSelectedDish = document.querySelector('input[name="dish"]:checked').value;
  if (userSelectedDish === 'side') {
    suggestionsSection.innerHTML += `
    <div class="suggestion">
      <p class="youShouldMake">You should make:</p>
      <h1 class="foodSuggestionClass" id="foodSuggestion">${sides[getRandomIndex(sides)]}</h1>
      <button class="mainButton" id="favoriteButton">FAVORITE</button>
    </div>
    `
  }
  else if (userSelectedDish === 'main') {
    suggestionsSection.innerHTML += `
    <div class="suggestion">
      <p class="youShouldMake">You should make:</p>
      <h1 class="foodSuggestionClass" id="foodSuggestion">${mains[getRandomIndex(mains)]}</h1>
      <button class="mainButton" id="favoriteButton">FAVORITE</button>
    </div>
    `
  }
  else if (userSelectedDish === 'dessert') {
    suggestionsSection.innerHTML += `
    <div class="suggestion">
      <p class="youShouldMake">You should make:</p>
      <h1 class="foodSuggestionClass" id="foodSuggestion">${desserts[getRandomIndex(desserts)]}</h1>
      <button class="mainButton" id="favoriteButton">FAVORITE</button>
    </div>
    `
  }
  else {
    suggestionsSection.innerHTML += `
    <div class="suggestion">
      <p class="youShouldMake">You should make:</p>
      <h2 id="foodSuggestion">${mains[getRandomIndex(mains)]} with
      a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]}
      for dessert!</h1>
      <button class="mainButton" id="favoriteButton">FAVORITE</button>
    </div>
    `
  }
};

function toggleHome() {
  homeHeader.classList.toggle('hidden');
  favoritesHeader.classList.toggle('hidden');
  userInputSection.classList.toggle('hidden');
  suggestionsSection.classList.toggle('hidden');
  favoritesSection.classList.toggle('hidden');
}

// Nondisplay functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
