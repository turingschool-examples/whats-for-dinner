// When a user selects a dish option and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category

// querySelectors:
var sideRadioButton = document.querySelector("#side-radio")
var mainRadioButton = document.querySelector("#main")
var dessertRadioButton = document.querySelector("#dessert")
var entireMealRadioButton = document.querySelector("#entire-meal")
var boilingPot = document.querySelector(".boiling-pot")

var letsCookButton = document.querySelector(".lets-cook")
var addRecipeButton = document.querySelector(".add-recipe-button")



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

var recipeOptions = []


// eventListeners:
// sideRadioButton.addEventListener("click", getRandomDish)
// mainRadioButton.addEventListener("click", getRandomDish)
// dessertRadioButton.addEventListener("click", getRandomDish)
// entireMealRadioButton.addEventListener("click", getRandomDish)
letsCookButton.addEventListener("click", getRandomDish)



// functions:
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function getRandomDish() {
    boilingPot.classList.add("hidden")

    if (sideRadioButton.checked) {
        recipeOptions.innerText = sides[getRandomIndex(sides)]
    } else if (mainRadioButton.checked) {
        recipeOptions.innerText = mains[getRandomIndex(mains)]
    } else if (dessertRadioButton.checked) {
        recipeOptions.innerText = desserts[getRandomIndex(desserts)] 
    }     
}

// function sides() {
//     if (sideRadioButton.checked) {
//         console.log("hello")
//     }
// }
// check()

// getRandomSide etc. with conditional checking if the button was checked. if it was, put in random side to innerHTML. 

// var randomMeal = [randomSide, randomMain, randomDessert]



// var randomSide = sides[getRandomIndex(sides)]
// var randomMain = mains[getRandomIndex(mains)]
// var randomDessert = desserts[getRandomIndex(desserts)]
// if (sideRadioButton.checked) {
//     sides.innerHTML = randomSide
// } else if (mainRadioButton.checked) {
//     mains.innerHTML = randomMain
// } else if (desserts.innerHTML = randomDessert) {

// }
// }