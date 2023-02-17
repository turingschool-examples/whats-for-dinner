var addRecipeButton = document.querySelector(".add-recipe");
var letsCookButton = document.querySelector(".submit");
var clearButton = document.querySelector(".clear");
var radioButtons = document.querySelector("input[name=meal-type]:checked");
var dishHeader = document.querySelector(".dish-header");
var nameOfDish = document.querySelector(".name-of-dish");
var cookpot = document.querySelector(".cookpot");
var mealDisplay = document.querySelector("#meal-display")

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
  'BBQ Chicken Burgers',
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  'Sheet Pan Fajitas',
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
  'Flan',
  "Macarons",
  'Macaroons',
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs",
]

letsCookButton.addEventListener("click", displayRandomRecipe);
clearButton.addEventListener("click", clearMeal);

function getRandomRecipe(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}



function displayRandomRecipe(event) {
  event.preventDefault();
  var recipeType = document.querySelector("input[name=meal-type]:checked").value;
  if(recipeType === "side") {
    var randomRecipe = getRandomRecipe(sides);
  }
  else if(recipeType === "main-dish") {
    var randomRecipe = getRandomRecipe(mains);
  }
  else if(recipeType === "dessert") {
    var randomRecipe = getRandomRecipe(desserts);
  }
  // else if(recipeType === "entire-meal") {
  //   getRandomRecipe(sides);
  //   getRandomRecipe(mains);
  //   getRandomRecipe(desserts);
  // }
  
  nameOfDish.innerText = `${randomRecipe}!`;
  cookpot.classList.add("hidden");
  mealDisplay.classList.remove("hidden");
}

function clearMeal() {
  cookpot.classList.remove("hidden");
  mealDisplay.classList.add("hidden");
}
