

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
];
var mains = [
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
  "Margarita Pizza",
];
var Desserts = [
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
];

var entireMeal = [];

// query selectors

var potImage = document.querySelector('.image-in-block-2');

var recipeName = document.querySelector('.recipe');


// buttons



var radioButtons = document.querySelectorAll('input');
var letsCookBtn = document.querySelector('.cook-button');
// event listeners

letsCookBtn.addEventListener('click', showRecipe);

// functions and event handlers

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function createRecipe() {
    var rndSideRec = getRandomIndex(sides);
    var rndMainRec = getRandomIndex(mains);
    var rndDsrtRec = getRandomIndex(desserts);
}


function showRecipe() {
  console.log('adrian');
  var radioButtons = document.querySelectorAll('input');
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
        toggleImageRecipe();
    }
  }
}

function toggleImageRecipe() {
    recipeName.classList.remove('hidden');
    potImage.classList.add('hidden');
}
