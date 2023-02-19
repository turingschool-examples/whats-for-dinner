sides = [
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

mainDish = [
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

dessert = [
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
var letsCook = document.querySelector("#lets-cook")
var crockPot = document.querySelector("#crockpot")

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }


letsCook.addEventListener('click', getRadioTypeValues)
var chosenRecipe = ''
var chosenDessert = ''
var chosenMainDish = ''
var chosenSide = ''
function getRadioTypeValues() {
var radioValues = document.querySelectorAll("input[name='radio']")
    for (i = 0; i < radioValues.length; i++) {
        if (radioValues[i].checked) {
            if (radioValues[i].value === "sides") {
                chosenRecipe = sides[getRandomIndex(sides)]
                crockPot.innerHTML =  `<p class="cookingPrompt">You should make:</p> 
                <h3 class="foodName">${chosenRecipe}!</h3>`
            } else if 
                (radioValues[i].value === "mainDish") {
                chosenRecipe = mainDish[getRandomIndex(mainDish)]
                crockPot.innerHTML =  `<p class="cookingPrompt">You should make:</p> 
                <h3 class="foodName">${chosenRecipe}!</h3>`
             } else if
                (radioValues[i].value === "dessert") {
                chosenRecipe = dessert[getRandomIndex(dessert)]
                crockPot.innerHTML =  `<p class="cookingPrompt">You should make:</p> 
                <h3 class="foodName">${chosenRecipe}!</h3>`
            } else if
                (radioValues[i].value === "entireMeal") {
                chosenDessert = dessert[getRandomIndex(dessert)]
                chosenSide = sides[getRandomIndex(sides)]
                chosenMainDish = mainDish[getRandomIndex(mainDish)]
                crockPot.innerHTML =  `<p class="cookingPrompt">You should make:</p> 
                <h3 class="foodName">${chosenMainDish} with a side of ${chosenSide} and ${chosenDessert} for dessert!</h3>`  
}
}
}
}







