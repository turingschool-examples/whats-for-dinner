
// querySelectors:
var sideRadioButton = document.querySelector("#side-radio")
var mainRadioButton = document.querySelector("#main-radio")
var dessertRadioButton = document.querySelector("#dessert-radio")
var entireMealRadioButton = document.querySelector("#entire-meal-radio")
var boilingPot = document.querySelector(".boiling-pot")
var letsCookButton = document.querySelector(".lets-cook")
var addRecipeButton = document.querySelector(".add-recipe-button")
var dishSuggestion = document.querySelector(".dish-suggestion-placeholder")
var titleSuggestion = document.querySelector(".title-suggestion")
var clearButton = document.querySelector(".clear-button")



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

// var mealOptions = []
// var foodOption = ""

// eventListeners:
letsCookButton.addEventListener("click", showFood)
clearButton.addEventListener("click", clearPage)

// functions:
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function getRandomDish() {
    if (sideRadioButton.checked) {
        dishSuggestion.innerHTML = sides[getRandomIndex(sides)]
    } else if (mainRadioButton.checked) {
        dishSuggestion.innerHTML = mains[getRandomIndex(mains)]
    } else if (dessertRadioButton.checked) {
        dishSuggestion.innerHTML = desserts[getRandomIndex(desserts)]
        
    }
    return dishSuggestion  
}
// console.log(dishSuggestion)

function showFood() {
   boilingPot.classList.add("hidden")
    dishSuggestion.classList.remove("hidden")
    titleSuggestion.classList.remove("hidden")
    getRandomDish()
}

function clearPage() {
    dishSuggestion.classList.add("hidden")
}
clearButton()
