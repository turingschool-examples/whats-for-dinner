
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
  cookpotIcon.classList.add("hidden");
  var meal = "hi";
  if (sideInput.checked) {
    meal = getMealOption(sides);
  } else if (mainInput.checked) {
    meal = getMealOption(mains);
  } else if (dessertInput.checked) {
    meal = getMealOption(desserts);
  } else if (entireMealInput.checked) {
    
  }
  rightDisplay.insertAdjacentHTML("afterbegin",
    `<p><em>You should make:</em></p>
    <br>
    <br>
    <h1 class="meal-suggestion">${meal}</h1>`
  );
}

function getMealOption(arrayName) {
  return "howdy do";
}
