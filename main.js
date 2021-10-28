var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies",
  "Stuffing"
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
  "Margarita Pizza"
];
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
  "Eclairs"
];

var letsCookButton = document.querySelector('.lets-cook-button');
var sideButton = document.querySelector('#side');
var mainDishButton = document.querySelector('#maindish');
var dessertButton = document.querySelector('#dessert');
var cookPotView = document.querySelector('.cookpot-view');
var resultsView = document.querySelector('.results-view');

letsCookButton.addEventListener("click", showRecipe);

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};


function showRecipe(){
  cookPotView.classList.add('hidden');
  resultsView.classList.remove('hidden');

}
