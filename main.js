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
    'Hush Puppies'
]

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
    'Margarita Pizza'
]

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
]

var imageBox = document.querySelector('.image-box');
var toMake = document.querySelector('#dish-recommendation-box');
var letsCookButton = document.querySelector('.letscook-button');
var side = document.querySelector('#side');
var makeRecommendation = document.querySelector('.to-make-rec');

letsCookButton.addEventListener('click', showDish);

function hide(element) {
    element.classList.add("hidden");
}

function show(element) {
    element.classList.remove('hidden');
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function showDish() {
    hide(imageBox);
    show(toMake);   
    if(document.getElementById('side').checked === true) {
        makeRecommendation.innerText = sides[getRandomIndex(sides)] + `!`
    } else if (document.getElementById('main-dish').checked === true) {
        makeRecommendation.innerText = mains[getRandomIndex(mains)] + `!`
    } else if (document.getElementById('dessert').checked === true){ 
        makeRecommendation.innerText = desserts[getRandomIndex(desserts)] + `!`
    } else if (document.getElementById('entire-meal').checked){
        makeRecommendation.innerText = mains[getRandomIndex(mains)] + ' with a side of ' + sides[getRandomIndex(sides)] + ' and ' + desserts[getRandomIndex(desserts)] + ' for dessert!'
    }
}

