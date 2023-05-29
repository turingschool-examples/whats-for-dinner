//Arrays of Dishes
 window.addEventListener('load', function() {

    var sides = ["Rice and Peas", "Fried Plantain", "Fried Dumpling", "Roti", "Rice", "Macaroni and Cheese"]

var mainDishes = ["Jerk Chicken", "Curry Goat", "Oxtail Stew", "Escovitch Fish", "Curry Beef",]

var desserts = ["Cookies and Cream Ice Cream", "Vanilla Ice Cream", "Apple Pie", "Chocolate Chip Cookies"]


//Query selectors
var letsCookButton = document.querySelector(".lets-cook-button");
var rightRectangleContainer = document.querySelector(".right-rectangle-container");
var sidesRadioButton = document.querySelector('input[type="radio"][name="food"][value="Side"]');
var mainDishRadioButton = document.querySelector('input[type="radio"][name="food"][value="Main Dish"]');
var dessertRadioButton = document.querySelector('input[type="radio"][name="food"][value="Dessert"]');
var rightRectangle = document.querySelector("right-rectangle")


//Event Listeners
letsCookButton.addEventListener("click", removeCookpotInDom);
letsCookButton.addEventListener("click", letsCookResponse);


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function generateRandomSides() {
    var randomSide = sides[getRandomIndex(sides)];
    return randomSide
}

function generateRandomMainDishes() {
    var randomMainDish = mainDishes[getRandomIndex(mainDishes)];
    return randomMainDish
}

function generateRandomDesserts() {
    var randomDessert = desserts[getRandomIndex(desserts)];
    return  randomDessert
}



function removeCookpotInDom() {
    var theCookpot = document.getElementsByClassName('right-rectangle-container')[0]
    
   theCookpot.style.backgroundImage = 'none';  
}


 function letsCookResponse() {
    if(sidesRadioButton.checked) {
      return rightRectangleContainer.textContent = `You should make: ${generateRandomSides()}`
    } else if(mainDishRadioButton.checked) {
       return rightRectangleContainer.textContent = `You should make: ${generateRandomMainDishes()}`
    } else {
      return rightRectangleContainer.textContent = `You should make:${generateRandomDesserts()}`
    }
 }

 })
