var mealTitle = document.querySelector("h3");
var pageHeading = document.querySelector("h1");
var dinnerList = document.querySelector(".dinner-list");
var resultsBox = document.querySelector(".results-box");
var viewMeal = document.querySelector(".view-meal");
var mealInput = document.querySelectorAll(".input-list");
var cookPotImg = document.querySelector(".cook-pot")

var cookButton = document.querySelector(".submit-button");
var recipeButton = document.querySelector(".recipe-button");
var sideOptRadio = document.querySelector("#side-option");
var mainOptRadio = document.querySelector("#main-option");
var dessertOptRadio = document.querySelector("#dessert-option");
var mealOptRadio = document.querySelector("#meal-option");
cookButton.addEventListener("click", letsCook);
var showMeal = [];
var currentMeal;

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
  "Hush Puppies",
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
];

function pushMeals() {
  if (document.getElementById("side-option").checked) {
    mealTitle.innerText = sides[getRandomIndex(sides)];
    console.log(mealTitle.innerText)
  } else if (document.getElementById("main-option").checked) {
    mealTitle.innerText = mains[getRandomIndex(mains)];
    console.log(mealTitle.innerText)
  } else {
    mealTitle.innerText = desserts[getRandomIndex(desserts)];
    console.log(mealTitle.innerText)
  } 
  

  currentMeal = new Meal(mealTitle.innerText);
}

function letsCook(event) {
  event.preventDefault();
  pushMeals();
  showMeal.push(currentMeal);
  cookPotImg.innerHTML = null
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
