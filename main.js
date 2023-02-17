
var sideRadioBtn = document.getElementById('sideRadioBtn')
var mainDishRadioBtn = document.getElementById('mainDishRadioBtn')
var dessertRadioBtn = document.getElementById('dessertRadioBtn')
var entireMealRadioBtn = document.getElementById('entireMealRadioBtn')
var letsCookBtn = document.querySelector('.lets-cook-btn')
var cookpotImage = document.querySelector('.cookpot-image')
var recipeOption = document.querySelector('.results-box')


var sides = [
  'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies',
]

var mains = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza',
]

var desserts = [
  'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs',
]

letsCookBtn.addEventListener('click', displayRecipe)


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayRecipe() {
  var sideDish = getRandomIndex(sides)
  var mainDish = getRandomIndex(mains)
  var dessertDish = getRandomIndex(desserts)
  if (sideRadioBtn.checked) {
    recipeOption.innerHTML = '';
    recipeOption.innerHTML += 
    `<section class="message-box">
        <h1 class="results-title">You should make:</h1> 
        <h2 class="randomDish">${sides[sideDish]}!</h2>
      </section>`
  } else if (mainDishRadioBtn.checked) {
    recipeOption.innerHTML = '';
    recipeOption.innerHTML += 
    `<section class="message-box">
        <h1 class="results-title">You should make:</h1> 
        <h2 class="randomDish">${mains[mainDish]}!</h2>
      </section>`
  } else if (dessertRadioBtn.checked) {
    recipeOption.innerHTML = '';
    recipeOption.innerHTML += 
    `<section class="message-box">
        <h1 class="results-title">You should make:</h1> 
        <h2 class="randomDish">${desserts[dessertDish]}!</h2>
      </section>`
  } else if (entireMealRadioBtn.checked) {
    recipeOption.innerHTML = '';
    recipeOption.innerHTML += 
    `<section class="message-box">
        <h1 class="results-title">You should make:</h1> 
        <h2 class="entire-meal">${mains[mainDish]} with a side of ${sides[sideDish]} and ${desserts[dessertDish]} for dessert!</h2>
      </section>`
  }
}



