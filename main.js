// // button vars
// var potato = document.querySelector('#cookPot')
// console.log(potato.classList.remove('hidden'))
// console.log(potato.classList.add('hotdog'))
// console.log('potato variable', potato)
var cookButton = document.querySelector('.cook-button');
var recipeButton = document.querySelector('.recipe-button');

var radioButtons = document.getElementsByName('food-option');
var form = document.getElementById('form')
// //
// // // // event listeners
// recipeButton.addEventListener('click', getRadioValue);
//
// var sideSelection =

// arrays
var sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies",
]

var mainDishes = [
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
]

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
"Eclairs",
]

var cookpotImage = document.querySelector('.cookpot-image');
var recipeText = document.querySelector('.recipe-text')
var boxTwoView = document.querySelector('.box-two')

window.addEventListener('load', homeView)

function homeView() {
  event.preventDefault()
  cookpotImage.classList.remove('hidden')
  recipeText.classList.add('hidden')
}

var cookButton = document.querySelector('.cook-button');

cookButton.addEventListener('click', showRecipe)

function showRecipe() {
  cookpotImage.classList.add('hidden')
  recipeText.classList.remove('hidden')
}

// radioButtons functionality

var radioButtons = document.getElementsByName('food-option');

function assessValue() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      checkedSelection = radioButtons[i].value
    }
    returnRecipe(checkedSelection)
    console.log(bob)
  }
}

function returnRecipe(checkedSelection) {
  if (checkedSelection === 'side') {
    recipeText.innerText = sides[getRandomIndex(sides)];
  } else if (checkedSelection === 'maindish') {
    recipeText.innerText = mainDishes[getRandomIndex(mainDishes)];
  } else if (checkedSelection === 'dessert') {
    recipeText.innerText = desserts[getRandomIndex(desserts)];
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
