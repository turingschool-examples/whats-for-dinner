
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
var entireMealInput = document.querySelector("#entire-meal")

// Event Listeners

letsCookButton.addEventListener("click", loadMeal);

// Functions

function loadMeal() {
  cookpotIcon.classList.add("hidden");
  if (sideInput.checked) {

  } else if (mainInput.checked) {

  } else if (dessertInput.checked) {

  } else if (entireMealInput.checked) {
    
  }
}
