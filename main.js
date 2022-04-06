// button vars
var cookButton = document.querySelector('.cook-button');
var recipeButton = document.querySelector('.recipe-button');
var cookpotImage = document.querySelector('.cookpot-image');
var radioButtons = document.getElementsByName('food-option');
var recipeText = document.querySelector('.recipe-text')
var form = document.getElementById('form')
// var radioButtons = document.querySelector('input[name = "food-option"]:checked');
var x = document.querySelector('.cook-button').value
// // event listeners
// window.addEventListener('load', homeView)
form.addEventListener('submit', getRadioValue);

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

// function hideCookpot() {
//   cookpotImage.classList.add('hidden')
// }
//
// function homeView() {
//   console.log('bob')
// }
// //
//
function getRadioValue() {
  if (document.getElementsById('side').checked) {
    randomSide()
  } else if (document.getElementsById('main-dish').checked) {
    randomMainDish()
  } else if (document.getElementsById('dessert').checked) {
    randomDessert()
    event.PreventDefault()
}
}

function randomSide() {
  recipeText.innerText = sides[getRandomIndex(sides)];
}

function randomMainDish() {
  recipeText.innerText = mainDishes[getRandomIndex(mainDishes)];
}

function randomDessert() {
  recipeText.innerText = desserts[getRandomIndex(desserts)];
}

//   for (var i = 0; i < radioButtons.length; i++) {
//     if(radioButtons[i].checked)
//     alert(radioButtons[i].value);
//   }
// }



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
