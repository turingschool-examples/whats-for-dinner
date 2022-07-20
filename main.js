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

// DOM elements
var userSelectedDish = document.querySelector('input[name="dish"]:checked').value;
var letsCookButton = document.querySelector('.letsCookButton');
var suggestionsSection = document.querySelector('.suggestionsContainer');

// Event listeners
letsCookButton.addEventListender('click', displaySuggestion)

// Display functions
function displayCookpot() {
  suggestionsSection.innerHTML += `
  <div class="cookpotImgContainer">
    <img src="assets/cookpot.svg">
  </div>
  `;
}

displayCookpot();

//

function displaySuggestion() {
  suggestionsSection.innerHTML = '';
  if (userSelectedDish === 'side') {
    // grab a random index of the sides array and display it on the page;
    suggestionsSection.innerHTML += `
    
    `
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
