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
  "Margarita Pizza",
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
  "Eclairs",
  ]

var sideSelection = document.querySelector('#side');
var mainSelection = document.querySelector('#mainDish');
var dessertSelection = document.querySelector('#dessert');
var cookButton = document.querySelector('#cookButton');

cookButton.addEventListener("click", selectRecipe);

function selectRecipe() {
  if (side selected) {
    randomSide()
  } else if (main selected) {
    randomMain()
  } else if (dessert selected) {
    randomDessert()
  }
}

function randomMeal(mealOptions) {
  return Math.floor(Math.random() * mealOptions.length);
}

function randomSide() {
  console.log(sides[randomMeal(sides)])
}

function randomMain() {
  console.log(mains[randomMeal(mains)])
}

function randomDessert() {
  console.log(desserts[randomMeal(desserts)])
}

// function getSide() {
//   console.log(sides)
//   for (var i = 0; i< sides.length; i++) {
//     return randomMeal(sides[i])
//   }
// }
