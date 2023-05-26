// Query Selectors

var letsCookButton = document.querySelector(".lets-cook-btn");
var inputs = document.querySelectorAll('input');
var cookpot = document.querySelector('.cookpot');
var recipeView = document.querySelector('.recipe-view');
var recipe = document.querySelector('.recipe');
var clearButton = document.querySelector('.clear');

// Variables

var sides = [
    "Rice Pilaf"
]
var mains = [
    "Steak"
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
var currentSelection;
var currentRecipe;


// Event Listeners

letsCookButton.addEventListener('click', function(){
    getInput();
    getRandomRecipe(getRandomIndex());
    displayRecipe();
})

clearButton.addEventListener('click', clearRecipe);

// Functions and Event Handlers

function getRandomIndex() {
    return Math.floor(Math.random() * currentSelection.length);
}

function getInput() {
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].checked) {
            currentSelection = window[inputs[i].value];
        }
    }
}

function getRandomRecipe(index) {
    currentRecipe = currentSelection[index];
    recipe.innerText = currentRecipe;
}

function displayRecipe() {
    cookpot.classList.add('hidden');
    recipeView.classList.remove('hidden');
}


function clearRecipe() {
    currentRecipe = ''
    cookpot.classList.remove('hidden');
    recipeView.classList.add('hidden');
}