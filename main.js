

var recipeButton = document.querySelector('.recipe-button');
var form = document.getElementById('form')


// arrays
var sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caesar Salad",
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
var headerThree = document.querySelector('.header-two')


// different views using hidden
window.addEventListener('load', homeView)

function homeView() {
  event.preventDefault()
  cookpotImage.classList.remove('hidden')
  recipeText.classList.add('hidden')
  clearButton.classList.add('hidden')
}


var cookButton = document.querySelector('.cook-button');

function showRecipe() {
  cookpotImage.classList.add('hidden')
  recipeText.classList.remove('hidden')
  headerThree.classList.remove('hidden')
  clearButton.classList.remove('hidden')
}

// 'clear' event
var clearButton = document.querySelector('.clear-button')

clearButton.addEventListener('click', clearInput)

function clearInput() {
  for(var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
    recipeText.innerText = 'Oops, please select your dish!'
    headerThree.classList.add('hidden')
  }
}


// radioButtons functionality
cookButton.addEventListener('click', function() {
  event.preventDefault();
  showRecipe();
  assessValue();
});

var radioButtons = document.getElementsByName('food-option');

function assessValue() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      var checkedSelection = radioButtons[i].value
    }
    returnRecipe(checkedSelection)
  }
}

function returnRecipe(checkedSelection) {
  if (checkedSelection === 'side') {
    recipeText.innerText = `${sides[getRandomIndex(sides)]}!`;
  } else if (checkedSelection === 'maindish') {
    recipeText.innerText = `${mainDishes[getRandomIndex(mainDishes)]}!`;
  } else if (checkedSelection === 'dessert') {
    recipeText.innerText = `${desserts[getRandomIndex(desserts)]}!`;
  } else if (checkedSelection === 'entire-meal') {
    displayMeal()
  }
}

function displayMeal() {
  recipeText.innerText = `${mainDishes[getRandomIndex(mainDishes)]} with a
  side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]}
  for dessert!`
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
