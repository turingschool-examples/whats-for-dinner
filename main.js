var sidesRecipes = ['Carrot Sticks', 'Broccoli', 'Peppers & Onions', 'Roti', 'Dumplings', 'Mashed Potatoes', 'Corn on the Cob', 'Salad', 'Chips & Salsa', 'Black Beans & Rice', 'Smashed Potatoes', 'Baked Potatoes', 'Grilled Asparagus'];
var mainDishRecipes = ['Pesto, Tomato & Mozzarella Veggie Burger', 'BBQ Grilled Tofu', 'Channa Masala', 'Tofu Mutar Masala', 'Tofu Fried Rice', 'Green Curry with Tofu', 'Red Curry with Tofu', 'Spicy Peanut Tofu', 'Crispy Tofu with Honey Mustard', 'Nachos with Black Beans & Guacamole'];
var dessertRecipes = ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Baklava', 'Flan', 'Macarons', 'Macaroons', 'Chocolate Cupcakes', 'Pavlova', 'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs'];
var favRecipes = ['pizza', 'chocolate', 'sushi'];
var currentRecipe = "";

var viewFavsButton = document.querySelector('#view-favs-button');
var letsCookButton = document.querySelector('#lets-cook-button');
var letsCookBox = document.querySelector('#lets-cook-box');

var sideOption = document.querySelector('#side-option');
var mainDishOption = document.querySelector('#main-dish-option');
var dessertOption = document.querySelector('#dessert-option');
var entireMealOption = document.querySelector('#entire-meal-option');

var cookpotImage = document.querySelector('.cookpot-image');
var youShouldMake = document.querySelector('.you-should-make');
var outputRecipe = document.querySelector('.output-recipe');
var favsList = document.querySelector('.favs-list');
var favButton = document.querySelector('.fav-button');
var deleteFavButton = document.querySelector('.delete-fav-button');
var clearButton = document.querySelector('.clear-button');
var backButton = document.querySelector('.back-button');

var unorderedList = document.querySelector('.favs-list');
var listItem = document.createElement('li');
var checkbox = document.createElement('input');
var label = document.createElement('label');

viewFavsButton.addEventListener('click', showFavorites);
letsCookButton.addEventListener('click', getCooking);
backButton.addEventListener('click', showRecipe);
favButton.addEventListener('click', addFav);
deleteFavButton.addEventListener('click', deleteFav);

function hide(event) {
  event.classList.add('hidden');
}

function show(event) {
  event.classList.remove('hidden');
}

function getCooking() {
  showRecipe();
  getRecipe();
}

function showRecipe() {
  event.preventDefault();
  hide(cookpotImage);
  hide(favsList);
  hide(deleteFavButton);
  hide(backButton);
  show(youShouldMake);
  show(outputRecipe);
  show(favButton);
  show(clearButton);
}

function getRecipe() {
  if (sideOption.checked) {
    currentRecipe = sidesRecipes[getRandomIndex(sidesRecipes)];
  }
  if (mainDishOption.checked) {
    currentRecipe = mainDishRecipes[getRandomIndex(mainDishRecipes)];
  }
  if (dessertOption.checked) {
    currentRecipe = dessertRecipes[getRandomIndex(dessertRecipes)];
  }

  outputRecipe.innerText = `${currentRecipe}`;
  // if (entireMealOption.checked) {
  //   outputRecipe.innerText = `${mainDishRecipes[getRandomIndex(mainDishRecipes)]} with a side of ${sidesRecipes[getRandomIndex(sidesRecipes)]} and ${dessertRecipes[getRandomIndex(dessertRecipes)]} for dessert!`;
  // }
}

function addFav() {
  favRecipes.push(currentRecipe);
  // favsList.innerText = '';

  for (var i = 0; i < favRecipes.length; i++) {
    // var text = document.createTextNode(favRecipes[i]);
    checkbox.type = 'checkbox';
    checkbox.name = 'delete';
    checkbox.id = 'delete';
    checkbox.value = i;

    unorderedList.appendChild(listItem);
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    // label.appendChild(text);
    label.innerHTML = `${favRecipes[i]}`;
  }

  showFavorites();
}

function deleteFav() {
  if (checkbox.value > 0) {
    favRecipes.splice(checkbox.value - 1, 1);
  }
  favRecipes.splice(checkbox.value, 1);

  showFavorites();
}

function showFavorites() {
  event.preventDefault();
  hide(cookpotImage);
  hide(clearButton);
  hide(youShouldMake);
  hide(outputRecipe);
  hide(favButton);
  show(favsList);
  show(deleteFavButton);
  show(backButton);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
