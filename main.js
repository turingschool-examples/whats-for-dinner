
// Variables

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
var letsCookButton = document.querySelector("#lets-cook-button");
var cookpotIcon = document.querySelector("#cookpot-img");
var sideInput = document.querySelector("#side");
var mainInput = document.querySelector("#main-dish");
var dessertInput = document.querySelector("#dessert");
var entireMealInput = document.querySelector("#entire-meal");
var rightDisplay = document.querySelector(".right-display");

// Event Listeners

letsCookButton.addEventListener("click", loadMeal);

// Functions

function loadMeal() {
  rightDisplay.innerHTML = ``;
  var meal;
  if (sideInput.checked) {
    meal = getMealOption(sides);
    sideInput.checked = false;
  } else if (mainInput.checked) {
    meal = getMealOption(mains);
    mainInput.checked = false;
  } else if (dessertInput.checked) {
    meal = getMealOption(desserts);
    dessertInput.checked = false;
  } else if (entireMealInput.checked) {
    meal = getEntireMeal();
    entireMealInput.checked = false;
  }
  rightDisplay.insertAdjacentHTML("afterbegin",
    `<p><em>You should make:</em></p>
    <br>
    <br>
    <h1 class="meal-suggestion">${meal}</h1>`
  );
}

function getMealOption(arrayName) {
  var randomIndex = Math.floor(Math.random() * arrayName.length);
  var mealOption = arrayName[randomIndex];
  return mealOption;
}

function getEntireMeal() {
  var mainIndex = Math.floor(Math.random() * mains.length);
  var mainOption = mains[mainIndex];
  var sideIndex = Math.floor(Math.random() * sides.length);
  var sideOption = sides[sideIndex];
  var dessertIndex = Math.floor(Math.random() * desserts.length);
  var dessertOption = desserts[dessertIndex];
  return `${mainOption} with a side of ${sideOption} and ${dessertOption} for dessert!`;
}
