//Data Arrays
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
]

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
]

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
]

//Query Selectors
var side = document.querySelector("#side");
var mainDish = document.querySelector("#main-dish");
var dessert = document.querySelector("#dessert");
var letsCookButton = document.querySelector("#lets-cook");
var mealTitle = document.querySelector(".meal-title");
var mealSelection = document.querySelector(".meal-selection");
var cookpotImage = document.querySelector("#cookpot-img");

//Global Variables
var currentMeal = "";

//Event Listeners
letsCookButton.addEventListener("click", displayMeal);

//Functions and Event Handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayMeal() {
  event.preventDefault();
  cookpotImage.classList.add("hidden");
  mealTitle.classList.remove("hidden");
  mealSelection.classList.remove("hidden");
  var userInput = document.querySelector('input[name="selection"]:checked').value;
  currentMeal = displayRandomMeal(userInput);
  mealSelection.innerText = `${currentMeal}`;
}

function displayRandomMeal(typeOfFood) {
  event.preventDefault();
  if(typeOfFood === "side") {
    var randomSide = sides[getRandomIndex(sides)];
    return randomSide + "!"
  } else if(typeOfFood === "main-dish") {
    var randomMain = mains[getRandomIndex(mains)];
    return randomMain + "!"
  } else if(typeOfFood === "dessert") {
    var randomDessert = desserts[getRandomIndex(desserts)];
    return randomDessert + "!"
  } else if(typeOfFood === "entire-meal") {
    var randomSide = sides[getRandomIndex(sides)];
    var randomMain = mains[getRandomIndex(mains)];
    var randomDessert = desserts[getRandomIndex(desserts)];
    return `${randomMain} with a side of ${randomSide} and ${randomDessert}!`
  }
}
