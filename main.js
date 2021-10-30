var sideArray = ['tater tots', 'brussel sprouts', 'caesar salad', 'garlic bread', 'hummus', 'macaroni and cheese', 'egg drop soup', 'fried rice'];
var mainArray = ['chicken fried steak', 'chicken nuggets', 'spaghetti', 'chicken pesto pasta', 'pizza', 'tacos', 'bologna sandwich'];
var dessertArray = ['carrot cake', 'pudding', 'yogurt', 'ice cream', 'fruit cocktail', 'pie'];

var entireMeal = document.querySelector('#entire-meal');
var side = document.querySelector('#side');
var mainDish = document.querySelector('#main-dish');
var dessert = document.querySelector('#dessert');
var foodItem = document.querySelector('.foodItem');
var suggestion = document.querySelector('h3');
var letsCookButton = document.querySelector('.letsCookButton');
var boxRightHidden = document.querySelector('.box-right-hidden');
var boxRight = document.querySelector('.box-right');
var boxLeft = document.querySelector('.box-left');
var stockPotImage = document.querySelector('.stockPotImg');
var clearButton = document.querySelector('.clear-button');

letsCookButton.addEventListener('click', letsCook);
clearButton.addEventListener('click', clearOption);
suggestion.classList.add('hidden');
clearButton.classList.add('hidden');
foodItem.classList.add('hidden');

function randomFood(array) {
    return array[Math.floor(Math.random() * array.length)];
};

function letsCook() {
    stockPotImage.classList.add('hidden');
    suggestion.classList.remove('hidden');
    clearButton.classList.remove('hidden');
    foodItem.classList.remove('hidden');

    if (side.checked) { 
    foodItem.innerHTML = `${randomFood(sideArray)}!`;
    } else if (mainDish.checked) {
    foodItem.innerHTML = `${randomFood(mainArray)}!`
    } else if (dessert.checked) {
    foodItem.innerHTML = `${randomFood(dessertArray)}!`
    } else if (entireMeal.checked) {
    foodItem.innerHTML = `A main course of ${randomFood(mainArray)} with a side of ${randomFood(sideArray)}, and ${randomFood(dessertArray)} for dessert!`
    } else {
        foodItem.innerHTML = 'Please make a valid selection'
    }
    
};

function clearOption() {
    stockPotImage.classList.remove('hidden');
    suggestion.classList.add('hidden');
    foodItem.classList.add('hidden');
    clearButton.classList.add('hidden');

};



  