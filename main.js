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
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
];

var dishTag = document.querySelector('#dish-name');

var dishKey = {
  sides: sides,
  mains: mains,
  desserts: desserts
}

//querySelectors
var letsCookButton = document.querySelector(".lets-cook-button")
var addRecipeButton = document.querySelector(".add-recipe-button")
var clearButton = document.querySelector(".clear-button")
var addRecipeButton = document.querySelector(".add-recipe-button")

var crockpotBox = document.querySelector("#crockpot-box")
var dishResultBox = document.querySelector("#dish-result-box")


// Event Listeners
letsCookButton.addEventListener('click', populateMealOutput)
clearButton.addEventListener('click', clearMealSuggestion)
addRecipeButton.addEventListener('click', addRecipe)

// Functions & Event Handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateSingleDish(dishKeyValue) {
  var dishArr = dishKey[dishKeyValue]
  var randomIndex = getRandomIndex(dishArr)
  var dishName = dishArr[randomIndex]

  dishTag.innerText = `${dishName}!`
}

function generateEntireMeal() {
  var randomSideIndex = getRandomIndex(sides)
  var randomMainIndex = getRandomIndex(mains)
  var randomDessertIndex = getRandomIndex(desserts)

  var randomSide = sides[randomSideIndex]
  var randomMain = mains[randomMainIndex]
  var randomDessert = desserts[randomDessertIndex]

  dishTag.innerText = `${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert!`
}

function toggleCrockPotAndDish() {
  crockpotBox.classList.toggle("hidden")
  dishResultBox.classList.toggle("hidden")
}

function populateMealOutput() {
  var inputTag = document.querySelector('input[name="meal-category"]:checked')
  if (inputTag === null) {
    return alert("Please select an option")
  } else if (inputTag.value === "entireMeal") {
    generateEntireMeal()
  } else {
    generateSingleDish(inputTag.value)
  }

  if (dishResultBox.classList.contains("hidden")) {
    toggleCrockPotAndDish()
  }
}

function clearMealSuggestion() {
  dishTag.innerText = '';
  toggleCrockPotAndDish()
}

function addRecipe() {
  addRecipeButton.innerText = "JUST KIDDING!"
  }
