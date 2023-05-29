//Arrays of Dishes
var sides = ["Rice and Peas", "Fried Plantain", "Fried Dumpling", "Roti", "Rice", "Macaroni and Cheese"]

var mainDishes = ["Jerk Chicken", "Curry Goat", "Oxtail Stew", "Escovitch Fish", "Curry Beef",]

var dessert = ["Cookies and Cream Ice Cream", "Vanilla Ice Cream", "Apple Pie", "Chocolate Chip Cookies"]


//Query selectors
var letsCookButton = document.querySelector(".lets-cook-button");
var rightRectangleContainer = document.querySelector(".right-rectangle-container");
var sidesRadioButton = document.querySelector('input[type="radio"][name="food"][value="Side"]');
var mainDishRadioButton = document.querySelector('input[type="radio"][name="food"][value="Main Dish"]');
var dessertRadioButton = document.querySelector('input[type="radio"][name="food"][value="Dessert"]');


//Event Listeners
letsCookButton.addEventListener("click", removeCookpotInDom);
rightRectangleContainer.addEventListener("change", function);
sidesRadioButton.addEventListener("change", function),
mainDishRadioButton.addEventListener("change", function),
dessertRadioButton.addEventListener("change", function),

//Remove CSS Properties




function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function generateRandomSides () {
    var randomSides = sides[getRandomIndex(sides)];
    return randomSides
}

function generateRandomMainDishes() {
    var randomMainDishes = sides[getRandomIndex(mainDishes)];
    return randomMainDishes
}

function generateRandomDessert() {
    var randomDessert = dessert[getRandomIndex(dessert)];
    return  randomDessert
}



// The functions above will generate random dishes

// when button is clicked two events will happen
// EVENT 1: remove background image of cookpot in DOM everytime

//EVENT 2: post in the element class right-rectangle

function removeCookpotInDom() {
    var theCookpot = document.getElementById('right-rectangle-ID')
    
   return theCookpot.style.removeProperty('background-image');
}


function letsCookResponse () {
    if(document.querySelector('input[type="radio"][name="food"][value="Side"]')) 
    return 
}