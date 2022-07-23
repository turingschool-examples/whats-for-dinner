var sideDishes = [
    "asaparugus",
    "baked beans",
    "french fries",
    "broccoli",
    "bread roll",
    "green beans",
    "mac and cheese",
    "mashed potatoes",
    "salad"
];

var mainDishes = [
    "chicken",
    "meatloaf",
    "burger",
    "chicken parmesan",
    "lasagna",
    "spaghetti",
    "fajita",
    "pizza",
    "bbq ribs"
];

var dessertDishes = [
    "cheesecake",
    "ice-cream",
    "apple pie",
    "chocolate cake",
    "brownie",
    "key-lime pie",
    "cookie",
    "banana pudding",
    "boston creme pie"
];

var currentFoodItem = "";


/*do i need to make a variable for each array since user will 
only select one at a time and will only spit out one random 
variable at a time?*/

//------------------------query selectors
var side = document.querySelector('#side');
var mainDish = document.querySelector('#main-dish');
var dessert = document.querySelector('#dessert');
var entireMeal = document.querySelector('#entire-meal');
var letsCookBtn = document.querySelector('.lets-cook');
var cookpot = document.querySelector('.cookpot');
var foodText = document.querySelector('.food-text');
var clearBtn = document.querySelector('clear-button')

//------------------------event listeners

letsCookBtn.addEventListener('click', cookDinner);
clearBtn.addEventListener('click', clearingButton);



//------------------------functions and event handlers 👇🏿
function randomFood(foodType) {
    if (foodType === 'side') {
       var sideItem = sideDishes[randomIndex(sideDishes)];
        return sideItem;
    } else if (foodType === 'main-dish') {
       var mainItem = mainDishes[randomIndex(mainDishes)];
        return mainItem;
    } else if (foodType === 'dessert') {
       var dessertItem = dessertDishes[randomIndex(dessertDishes)];
       return dessertItem;
    } else {
        return 'Not a valid option!'
    }
}

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function cookDinner(){ 
    cookpot.classList.add('hidden');
    foodText.classList.remove('hidden');
    var selectedDinnerItem = document.querySelector('input[name="dinner"]:checked').value;
        currentFoodItem = randomFood(selectedDinnerItem);
    console.log(currentFoodItem);
    foodText.innerText = `You should make: ${currentFoodItem}!`;
}

function clearingButton() {
    foodText.classList.add('hidden');
    cookpot.classList.remove('hidden');
}




// ------------------THINGS TO ADD
// add CLEAR button






  