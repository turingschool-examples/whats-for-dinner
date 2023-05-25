// Query Selectors

var letsCookButton = document.querySelector(".lets-cook-btn");
var inputs = document.querySelectorAll('input');

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
    //displayRecipe();
})

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
}

// When the user hits the lets cook btn

// get a random recipe from that input array
// display the recipe + hide the cookpot