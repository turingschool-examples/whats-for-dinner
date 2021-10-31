var recipePosition = document.querySelector(".recipe-position");
var sideSelector = document.getElementById("side");
var mainDishSelector = document.getElementById("main-dish");
var dessertSelector = document.getElementById("dessert");
var entireMealSelector = document.getElementById("entire-meal");
var cookPot = document.querySelector(".cook-pot");
var youShouldMake = document.querySelector(".you-should-make");
var userCategory = document.querySelector(".recipe-type");
var userRecipe = document.getElementById("recipe-name");
var addSection = document.querySelector(".add-recipe-section");
var dishPosition = document.querySelector(".single-dish");
var youAdded = document.querySelector(".you-have-added");

var letsCookButton = document.querySelector(".lets-cook");
var clearButton = document.querySelector(".clear");
var addRecipeButton = document.querySelector(".add-a-recipe");
var addNewButton =document.querySelector(".add-new");

clearButton.addEventListener('click', clearRecipe);
addRecipeButton.addEventListener('click', displayForm);
letsCookButton.addEventListener('click', displayRecipe);
addNewButton.addEventListener('click', addRecipe);

function displayForm() {
  addSection.classList.remove('hidden');
}

function addRecipe(event){
  event.preventDefault();
  clearMeal();
  clearDish();
  hide(cookPot);
  display(clearButton);
  hide(addSection);
  hide(youShouldMake);
  if (userCategory.value === "side") {
    sides.push(userRecipe.value);
    dishPosition.innerText = sides[sides.length - 1];
  } else if (userCategory.value === "main") {
    mains.push(userRecipe.value);
    dishPosition.innerText = mains[mains.length - 1];
  } else if (userCategory.value === "dessert"){
    desserts.push(userRecipe.value);
    dishPosition.innerText = desserts[desserts.length - 1];
  } else {
    return recipePosition.innerText = "Oh no!!! Please type side, main or dessert for recipe type."
  }
  display(youAdded);
}


function displayRecipe() {
    hide(cookPot);
    findRandomRecipe();
    display(clearButton);
    addBorder();
}

function findRandomRecipe() {
  if (sideSelector.checked || mainDishSelector.checked || dessertSelector.checked || entireMealSelector.checked) {
      clearMeal()
      clearDish();
      display(youShouldMake);
      if (sideSelector.checked) {
        dishPosition.innerText = `${sides[getRandom(sides)]}`;
      } else if (mainDishSelector.checked) {
        dishPosition.innerText = `${mains[getRandom(sides)]}`;
      } else if (dessertSelector.checked){
        dishPosition.innerText = `${desserts[getRandom(sides)]}`;
      } else if (entireMealSelector.checked){
        recipePosition.innerText = `${mains[getRandom(sides)]} with a side of ${sides[getRandom(sides)]} and ${desserts[getRandom(sides)]} for dessert!`;
    }
  } else {
  recipePosition.innerText = `Please make a selection`;
}
}



function display(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function addBorder() {
  letsCookButton.classList.add('borders');
}

function clearMeal() {
  recipePosition.innerText =``;
}

function clearDish() {
  dishPosition.innerText =``;
}



function displayClearButton() {
  hide(cookPot);
  display(clearButton);
  display(youShouldMake);
}

function getRandom(meal) {
  return Math.floor(Math.random() * meal.length);
}

function clearRecipe() {
  recipePosition.innerText = ``;
  dishPosition.innerText=``;
  display(cookPot);
  hide(clearButton);
  hide(youShouldMake);
  hide(youAdded);
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
