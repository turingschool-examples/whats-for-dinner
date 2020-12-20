var sideRadio = document.querySelector('#Side');
var mainRadio = document.querySelector('#Main-dish');
var dessertRadio = document.querySelector('#Dessert');
var mealRadio = document.querySelector('#Entire-meal');

// Build a function that will randomly generate either a Side, Main Dish, or Dessert, depending upon which radio button is clicked
  // need arrays for [Sides], [Main Dish], [Dessert]

function generateRandomIndex(array) {
  for (var i = 0; i < array.length; i++) {
    var randomIndex = array[Math.floor(Math.random() * array.length)];
  }
  return randomIndex;
};



// when the [LET'S COOK] button is clicked, display randomly generated recipe name
// Recipe name should appear below the phrase "You should make:" - styles medium size font, italic
// Recipe name should appear in large font with an '!' at the end
// Cookpot icon should disappear
// [CLEAR] button should appear
