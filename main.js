var sideSelect = document.querySelector(".side-select");
var mainDishSelect = document.querySelector(".main-dish-select");
var dessertSelect = document.querySelector(".dessert-select");
var letsCookButton = document.querySelector(".lets-cook-button");
var resultBox = document.querySelector(".result-box");
var cookPotIcon = document.querySelector(".cook-pot-icon");
var clearButton = document.querySelector(".clear-button");
var mealSelect = document.querySelector(".meal-select");

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
  "Margarita Pizza",
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

letsCookButton.addEventListener("click", displayRandomDish);
clearButton.addEventListener("click", restartQuery)

function displayRandomDish() {
  if (sideSelect.checked) {
    var randomSide = getRandomIndex(sides);
    displayDish(randomSide);
  } else if (mainDishSelect.checked) {
    var randomMainDish = getRandomIndex(mains);
    displayDish(randomMainDish);
  } else if (dessertSelect.checked) {
    var randomDessert = getRandomIndex(desserts);
    displayDish(randomDessert);
  }
}

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function displayDish(dish) {
  var singleDishBlock =
  `<div class="dish-block">
    <h4>You should make:</h4>
    <h1>${dish}!</h1>
    </div>`
  resultBox.insertAdjacentHTML('afterbegin', singleDishBlock);
  allowSelectionReset();
}

function allowSelectionReset() {
  cookPotIcon.classList.add("hidden");
  clearButton.classList.remove("hidden");
  letsCookButton.disabled = true;
  sideSelect.disabled = true;
  mainDishSelect.disabled = true;
  dessertSelect.disabled = true;
  mealSelect.disabled = true;
}

function restartQuery() {
  cookPotIcon.classList.remove("hidden");
  clearButton.classList.add("hidden");
  letsCookButton.disabled = false;
  sideSelect.disabled = false;
  mainDishSelect.disabled = false;
  dessertSelect.disabled = false;
  mealSelect.disabled = false;
  letsCookButton.checked = false;
  sideSelect.checked = false;
  mainDishSelect.checked = false;
  dessertSelect.checked = false;
  mealSelect.checked = false;
}
