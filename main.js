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
// var favoriteButton = document.querySelector('#favoriteButton')
var viewFavoritesButton = document.querySelector('#viewFavoritesButton');
var homeHeader = document.querySelector('.homeHeader');
var favoritesHeader = document.querySelector('.favoritesHeader');
var homeButton = document.querySelector('#homeButton');
var userInputSection = document.querySelector('.userInputSection');
var suggestionsSection = document.querySelector('.suggestionsSection');
var favoritesSection = document.querySelector('.favoritesSection')

// Event listeners
window.addEventListener('load', displayCookpot);
letsCookButton.addEventListener('click', displaySuggestion);
viewFavoritesButton.addEventListener('click', displayFavorites);
homeButton.addEventListener('click', displayHome);
suggestionsSection.addEventListener('click', function(event) {
  addRecipeToFavorites(event);
});

// Data model manipulation functions
function addRecipeToFavorites(event) {
  if (event.target.classList.contains('mainButton')) {
    // console.log('You clicked the button');
    var foodSuggestion = document.getElementById('foodSuggestion')
    favorites.push(foodSuggestion.innerText);
    // console.log(favorites);
  }
};

// Display functions
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
      <h1 id="foodSuggestion">${sides[getRandomIndex(sides)]}</h1>
      <button class="mainButton" id="favoriteButton">FAVORITE</button>
    </div>
    `
  }
  else if (userSelectedDish === 'main') {
    suggestionsSection.innerHTML += `
    <div class="suggestion">
      <p class="youShouldMake">You should make:</p>
      <h1 id="foodSuggestion">${mains[getRandomIndex(mains)]}</h1>
      <button class="mainButton" id="favoriteButton">FAVORITE</button>
    </div>
    `
  }
  else if (userSelectedDish === 'dessert') {
    suggestionsSection.innerHTML += `
    <div class="suggestion">
      <p class="youShouldMake">You should make:</p>
      <h1 id="foodSuggestion">${desserts[getRandomIndex(desserts)]}</h1>
      <button class="mainButton" id="favoriteButton">FAVORITE</button>
    </div>
    `
  }
  else {
    suggestionsSection.innerHTML += `
    <div class="suggestion">
      <p class="youShouldMake">You should make:</p>
      <h1 id="foodSuggestion">${mains[getRandomIndex(mains)]} with
      a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]}
      for dessert!</h1>
      <button class="mainButton" id="favoriteButton">FAVORITE</button>
    </div>
    `
  }
};

function displayFavorites() {
  homeHeader.classList.toggle('hidden');
  favoritesHeader.classList.toggle('hidden');
  userInputSection.classList.toggle('hidden');
  suggestionsSection.classList.toggle('hidden');
  favoritesSection.classList.toggle('hidden');
}

function displayHome() {
  displayFavorites()
}

// Nondisplay functions
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

/*
When the “Favorite” button is clicked, that recipe should be added to a new list of favorite recipes.

Users should be able to remove a recipe from their list of favorites, by clicking a button.
As you add these new elements to the page, be sure to match the style of existing elements.
*/
