// When a user selects a dish option and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category

// querySelectors:
var sideRadioButton = document.querySelector("#side")
var mainRadioButton = document.querySelector("#main")
var dessertRadioButton = document.querySelector("#dessert")
var entireMealRadioButton = document.querySelector("#entire-meal")

var letsCookButton = document.querySelector(".lets-cook")



// recipe options:
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


// eventListeners:
letsCookButton.addEventListener("click", dessertsRandom)

// functions:
function getRandomDish(array) {
var randomSide = sides[getRandomIndex(sides)]
var randomMain = main[getRandomIndex(mains)]
var randomDessert = desserts[getRandomIndex(desserts)]
var randomMeal = [randomSide, randomMain, randomDessert]
}


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }