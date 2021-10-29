var selectedRecipe ='';

var recipePosition = document.querySelector(".recipe-position");
var sideSelector = document.getElementById("side");
var mainDishSelector = document.getElementById("main-dish");
var dessertSelector = document.getElementById("dessert");
var entireMealSelector = document.getElementById("entire-meal");
var cookPot = document.querySelector(".cook-pot");

var letsCookButton = document.querySelector(".lets-cook");
var clearButton = document.querySelector(".clear");
var addRecipeButton = document.querySelector(".add-a-recipe");

// clearButton.addEventListener();
// addRecipeButton.addEventListener();
letsCookButton.addEventListener('click', displayRecipe);

function displayRecipe() {
    selectedRecipe.innerText +=
 (`You should make ${findRandomRecipe()}`)
}

function findRandomRecipe() {
  if (sideSelector.checked){
    return `${sides[getRandom(sides)]}`;
  } else if (mainDishSelector.checked) {
    return `${mains[getRandom(sides)]}`;
  } else if (dessertSelector.checked){
    return `${desserts[getRandom(sides)]}`;
  } else if (entireMealSelector.checked){
    return `${sides[getRandom(sides)]} ${mains[getRandom(sides)]} ${desserts[getRandom(sides)]}`
  }
}

function hideCookPot(){
  cookPot.classList.add('hidden');
}


function getRandom(meal) {
  return Math.floor(Math.random() * meal.length);
}



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
"Hush Puppies"];

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
"Margarita Pizza"];

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
"Eclairs"];
