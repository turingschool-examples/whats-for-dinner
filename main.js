var cookpot = document.querySelector('#cookpot');
var letsCookButton = document.querySelector('#lets-cook');
var currentRecipe = document.querySelector('#current-recipe');
var recipeTitle = document.querySelector('.recipe-title');
var radioButton1 = document.querySelector('#radio-button1');
var radioButton2 = document.querySelector('#radio-button2');
var radioButton3 = document.querySelector('#radio-button3');
var radioButton4 = document.querySelector('#radio-button4');
var sideRadioButton = document.querySelectorAll('#side');
var mainDishRadioButton = document.querySelectorAll('#main-dish');
var dessertRadioButton = document.querySelectorAll('#dessert');
var entireMealRadioButton = document.querySelectorAll('#entire-meal');

var sides = [
'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies',
];
var mains = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza',
];
var desserts = [
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs',
];

letsCookButton.addEventListener('click', letsCook);

radioButton1.addEventListener('click', function () {
    sideRadioButton.checked = true
})

radioButton2.addEventListener('click', function () {
    mainDishRadioButton.checked = true
})

radioButton3.addEventListener('click', function () {
    dessertRadioButton.checked = true
})

radioButton4.addEventListener('click', function () {
    entireMealRadioButton.checked = true
})

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function hide(element) {
    element.classList.add('hidden');
}
  
function show(element) {
    element.classList.remove('hidden');
}

function getRandomSide() {
    return getRandomIndex(sides);
}

function getRandomMain() {
    return getRandomIndex(mains);
}

function getRandomDessert() {
    return getRandomIndex(desserts);
}

function uncheckRadioButtons () {
    sideRadioButton.checked = false
    mainDishRadioButton.checked = false;
    dessertRadioButton.checked = false;
    entireMealRadioButton.checked = false;
}

function makeRecipeTitleBig () {
    recipeTitle.classList.add('recipe-title');
    recipeTitle.classList.remove('entire-recipe-title')
}

function makeRecipeTitleSmall () {
    recipeTitle.classList.remove('recipe-title');
    recipeTitle.classList.add('entire-recipe-title')
}

function letsCook() {
    hide(cookpot);
    show(currentRecipe);

    if(sideRadioButton.checked === true) {
        recipeTitle.innerText = `${sides[getRandomSide()]}!`;
        makeRecipeTitleBig()
    } else if(mainDishRadioButton.checked === true) {
        recipeTitle.innerText = `${mains[getRandomMain()]}!`;
        makeRecipeTitleBig()
    } else if(dessertRadioButton.checked === true) {
        recipeTitle.innerText = `${desserts[getRandomDessert()]}!`;
        makeRecipeTitleBig()
    } else if(entireMealRadioButton.checked === true) {
        recipeTitle.innerText = `${mains[getRandomMain()]} with a side of ${sides[getRandomSide()]} and ${desserts[getRandomDessert()]} for dessert!`;
        makeRecipeTitleSmall()
    } else {
        recipeTitle.innerText = "Please make a selection."
    }
    uncheckRadioButtons()
}