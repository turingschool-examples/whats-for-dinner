var buttonLetsCook = document.querySelector(".lets-cook-button");
var recipeBox = document.querySelector(".selected-dish");
var cookpot = document.querySelector(".cookpot");
var buttonClear = document.querySelector("#clear");

buttonLetsCook.addEventListener('click', generateRandomDish);
buttonClear.addEventListener('click', clearInputs);

function randomDish(array){
return Math.floor(Math.random() * array.length);
}

function generateRandomDish(){
  recipeBox.innerHTML = "";
  var selectedDish = document.querySelector('input[name="dish"]:checked');
  var currentRandomDish = "";
  if (selectedDish.value === "side"){
    currentRandomDish = sides[randomDish(sides)];
    recipeBox.innerHTML += `<section class="recipe-container"><h1 class="should-make">You should make:</h1><h2 class="current-dish">${currentRandomDish}!</h2></section>`;
  } else if (selectedDish.value === "main dish"){
    currentRandomDish = mains[randomDish(mains)];
    recipeBox.innerHTML += `<section class="recipe-container"><h1 class="should-make">You should make:</h1><h2 class="current-dish">${currentRandomDish}!</h2></section>`;
  } else if (selectedDish.value === "dessert"){
    currentRandomDish = desserts[randomDish(desserts)];
    recipeBox.innerHTML += `<section class="recipe-container"><h1 class="should-make">You should make:</h1><h2 class="current-dish">${currentRandomDish}!</h2></section>`;
  }
  showClearButton();
  hideCookPot();
}

function hideClearButton(){
  var clearButton = document.querySelector("#clear");
  clearButton.className = "clear hidden";
}
function showClearButton(){
  var clearButton = document.querySelector("#clear");
  clearButton.className = "clear";
}

function hideCookPot() {
  var cookPotImage = document.querySelector("#cookpot");
  cookPotImage.className = "CookPot hidden";
}

function showCookPot(){
  var cookPotImage = document.querySelector("#cookpot");
  cookPotImage.className = "CookPot";
}

function clearInputs(){
  showCookPot();
  hideClearButton();
  recipeBox.innerHTML = "";
  var inputs = document.getElementsByName("dish");
   for(var i = 0; i < inputs.length; i++)
      inputs[i].checked = false;
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
  "Hush Puppies"
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
