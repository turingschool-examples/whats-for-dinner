//querySelectors
var recipePickForm = document.querySelector('.recipe-item-form');
var letsCookButton = document.querySelector('.lets-cook-button');
var addARecipeButton = document.querySelector('.add-a-recipe');
var menuItemChoice = document.getElementsByName('options');

//event listeners
letsCookButton.addEventListener('click', letsCookInput);
addARecipeButton.addEventListener('click', addARecipe);


//global variables
var desserts = [
  "Banana Bread",
  "Ciambella",
  "French Silk Pie",
  "Cream Horns",
  "Rice Pudding",
  "Strawberry Champagne Cake"
];

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
"Hush Puppies"
];

var mainDish = [
  "Ramen",
  "Nachos",
  "Burritos",
  "Tofu Potato Curry",
  "Lemon Seared Salmon",
];

//functions
// Build out own random function
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function randomRecipe(){

}

function addARecipe(){

}
  var choice = "";

function letsCookInput(){

    }
  }

}
