var sides = [
    'Caeser Salad',
    'Coconut Rice',
    'Coleslaw',
    'Crispy Potatoes',
    'Garden Salad',
    'Garlic Butter Mushrooms',
    'Hush Puppies',
    'Miso Glazed Carrots',
    'Shrimp Summer Rolls',
    'Sweet Potato Tots'
];

var mains = [
    'BBQ Chicken Burgers',
    'Bibimbap',
    'Butternut Squash Soup',
    'Chicken Fried Rice',
    'Chicken Parmesean',
    'Empanadas',
    'Margarita Pizza',
    'Pineapple Chicken',
    'Ramen',
    'Shakshuka',
    'Sheet Pan Fajitas',
    'Spaghetti and Meatballs',
    'Thai Yellow Curry'
];

var desserts = [
    'Apple Pie',
    'Baklava',
    'Banana Bread',
    'Black Forest Cake',
    'Cheesecake',
    'Chocolate Cupcakes',
    'Croissants',
    'Eclairs',
    'Flan',
    'Funfetti Cake',
    'Key Lime Pie',
    'Lemon Meringue Pie',
    'Macarons',
    'Macaroons',
    'Pavlova',
    'Peach Cobbler',
    'Pumpkin Pie',
    'Tart Tatin'
];

var mealType;
var foodChoice = document.getElementsByName("lets-cook-radio");
var foodName = document.querySelector(".food-name")
var foodButton = document.querySelector('.lets-cook-btn')
var cookpotImg = document.querySelector(".cookpot-img")
var randomFood = document.querySelector(".random-meal")
var clearContent = document.querySelector('.clear-btn');

foodButton.addEventListener("click", displayRandomFood);
clearContent.addEventListener("click",showImage);

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
};

function hideImage() {
    if(randomFood.classList.contains('hidden')) {
        cookpotImg.classList.toggle("hidden");
        randomFood.classList.toggle("hidden");
    };
};

function displayRandomFood() {
    for(var i = 0; i < foodChoice.length; i++) {
        if(foodChoice[i].checked) {
            hideImage()
            mealType = eval(foodChoice[i].id)
            foodName.innerText = mealType[getRandomIndex(mealType)]+'!'
        };
    };
};

function showImage() {
    cookpotImg.classList.toggle("hidden");
    randomFood.classList.toggle("hidden");
};