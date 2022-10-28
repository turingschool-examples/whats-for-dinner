// Query Selectors
var selections = document.getElementsByClassName('food-category');
var sidesButton = document.querySelector('#side-dish');
var mainsButton = document.querySelector('#main-dish');
var dessertsButton = document.querySelector('#dessert');
var entireMealButton = document.querySelector('#entire-meal');
var letsCookBtn = document.querySelector('#lets-cook')

//Event Listeners
// selections.addEventListener('change', selectCategory);
letsCookBtn.addEventListener('click', cookThis);
// sidesButton.addEventListener('click')

//Global Variables
var sideDishes = [ //randomize
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
];
var mainDishes = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesan',
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
    'Eclairs'
];
var entireMeal = [] //else; random

// if a sidesButton is selected; iterate over the sidesDishes Array.
// else if mainsButton to iterate over mainDishes
// else if dessertsButton to iterate over desserts
// else iterate an object with 3 different properties.
// function randomFood(foodCategory)
//     var randomDish = Math.floor(Math.random() * array.length);
//     return 

function cookThis() {
    event.preventDefault()
    var randomSideDish = Math.floor(Math.random() * sideDishes.length);
    console.log('sideDish: ', randomSideDish)
    var randomMainDish = Math.floor(Math.random() * mainDishes.length);
    console.log('mainDish: ', randomMainDish)
    var randomDessert = Math.floor(Math.random() * desserts.length);
    console.log('dessert: ', randomDessert)
    if (sidesButton.checked) {
        return sideDishes[randomSideDish]
    } else if (mainsButton.checked) {
        console.log('cookm MAIN: ', mainDishes[randomMainDish])
    } else if (dessertsButton.checked) {
        console.log('cookm SWEETS: ', desserts[randomDessert])
    } else {
        console.log('FOOOOOOOOOOOD!')
    }
}

// function selectCategory() {
//     for(var i = 0; i < selections.length; i++) {
//         console.log(selections)
//     }
// }

//create a function 
//radio button
//random message will invoke 
//2 conditionals to access 2 arrays. .innerText and hide and show in the same function.

//create an array that all arrays
    //create var names of all other array. = to each arrays.