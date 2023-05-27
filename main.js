// Query Selectors

var inputs = document.querySelectorAll('input');
var cookpot = document.querySelector('.cookpot');
var recipeView = document.querySelector('.recipe-view');
var recipe = document.querySelector('.recipe');

var letsCookButton = document.querySelector(".lets-cook-btn");
var favoriteButton = document.querySelector('.favorite');
var clearButton = document.querySelector('.clear');
var myFavoritesButton = document.querySelector('.show-favorites')
var goBackButton = document.querySelector('.back');

var favoritesPage = document.querySelector('.favorites-page');
var mainPage = document.querySelector('.main');

var favoritesList = document.querySelector('.favs-list');


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
var currentRecipe = {
    type: '',
    dish: '',
};
var favoriteRecipes = [];


// Event Listeners

letsCookButton.addEventListener('click', function(){
    getInput();
    getRandomRecipe(getRandomIndex());
    displayRecipe();
})

clearButton.addEventListener('click', clearRecipe);

favoriteButton.addEventListener('click', function(){
    favoriteRecipe();
});

myFavoritesButton.addEventListener('click', function(){
    displayFavoritesView()
    displayFavorites();
});

goBackButton.addEventListener('click', function(){
    clearRecipe();
    goBack();
});


// Functions and Event Handlers

function createFavoriteRecipe(type, dish) {
    return {
        type: type,
        dish: dish,
        }
}

function getRandomIndex() {
    return Math.floor(Math.random() * window[currentRecipe.type].length);
}

function getInput() {
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].checked) {
            currentRecipe.type = inputs[i].value;
        }
    }
}

function getRandomRecipe(index) {
    currentRecipe.dish = window[currentRecipe.type][index];
    recipe.innerText = currentRecipe.dish;
}

function displayRecipe() {
    cookpot.classList.add('hidden');
    recipeView.classList.remove('hidden');
}


function clearRecipe() {
    currentRecipe.dish = ''
    clearInput();
    cookpot.classList.remove('hidden');
    recipeView.classList.add('hidden');
}

function favoriteRecipe() {
    var recipe = createFavoriteRecipe(currentRecipe.type, currentRecipe.dish);
    favoriteRecipes.push(recipe);
}

function displayFavoritesView() {
    mainPage.classList.add('hidden');
    favoritesPage.classList.remove('hidden');
    goBackButton.classList.remove('hidden');
    myFavoritesButton.classList.add('hidden');
}

function displayFavorites() {
    favoritesList.innerHTML = '';

    for (var i = 0; i < favoriteRecipes.length; i++){
        favoritesList.innerHTML += `<h2>${favoriteRecipes[i].dish}</h2>`
    }
}

function goBack() {
    clearInput();
    mainPage.classList.remove('hidden');
    favoritesPage.classList.add('hidden');
    goBackButton.classList.add('hidden');
    myFavoritesButton.classList.remove('hidden');
}

function clearInput() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = false;
    }
}