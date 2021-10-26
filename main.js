var randomSide = document.querySelector('#side');
var randomMainDish = document.querySelector('#main-dish');
var randomDessert = document.querySelector('#dessert');
var entireMeal = document.querySelector('#entire-meal');

function getRandomItem(array) {
    return Math.floor(Math.random() * array.length)
};

randomSide.addEventListener('click', getRandomSide);
randomMainDish.addEventListener('click', getRandomMainDish);
randomDessert.addEventListener('click', getRandomDessert);
entireMeal.addEventListener('click', getEntireMeal);
