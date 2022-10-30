//**;* ${Data Model} *;**//
var sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caesar Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];
var mains = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empenadas", "Chicken Fried Rice", "Cheet Pan Fajitas", "Margarita Pizza"];
var desserts = ["Apple pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"];

//**;* ${Query Selectors[Methods Actually] & Event Listeners} *;**/
//**;* ${Query Selectors} *;**/
var addARecipeButton = document.querySelector(".name");
var clearButton = document.querySelector("#clear");

var sidesRadioButton = document.querySelector("#side");
var mainsRadioButton = document.querySelector("#main");
var dessertsRadioButton = document.querySelector("#dessert");
var entireMealRadioButton = document.querySelector("#entire-meal");
var letsCookButton = document.querySelector("#cookbutton");

var youShouldText = document.querySelector('#message');

var potIcon = document.querySelector('.front');
var potContents = document.querySelector('.back');

// **;* ${Event Listeners} *;**//
// sidesRadioButton.addEventListener('click', getRandomSide);
// mainsRadioButton.addEventListener('click', getRandomMain);
// dessertsRadioButton.addEventListener('click', getRandomDessert);
letsCookButton.addEventListener('click', function() {
    var menuItemString = whichButton();
    insertMealToDOM(menuItemString);
    showMealCardRandomText();
});

// document.getElementById("menuItem").addEventListener("click", whichButton);
document.getElementById("cookbutton").addEventListener("click", youShouldMake);
//
//grab radio button result when 'cookbutton' clicked (don't need to do anything, no eventListener)
//gather the value with querySelect

//pull random variable for chosen array-use randomIndex to get random food result 
//push/update data model(kinda)
//update DOM (.innerText)
//display (toggle hidden)

function getRandomIndex(food) {
    return Math.floor(Math.random() * food.length);
}

function whichButton() {
    event.preventDefault();
   if (sidesRadioButton.checked === true) {
        var sideIndexNum = getRandomIndex(sides);
        var chosenRandomSide = sides[sideIndexNum];
        console.log(chosenRandomSide);
        return chosenRandomSide;
    }
   if (mainsRadioButton.checked === true) {
        var mainIndexNum = getRandomIndex(mains);
        var chosenRandomMain = mains[mainIndexNum];
        console.log(chosenRandomMain);
        return chosenRandomMain;
    }
    if (dessertsRadioButton.checked === true) {
        var dessertIndexNum = getRandomIndex(desserts);
        var chosenRandomDessert = desserts[dessertIndexNum];
        console.log(chosenRandomDessert);
        return chosenRandomDessert;
    }
}

function insertMealToDOM(menuItemString){
    youShouldText.innerText = menuItemString;
}

//**;* card flip *;**//
function showCookPotIcon() {
    potIcon.classList.remove('hidden');
    potContents.classList.add('hidden');
}
function showMealCardRandomText() {
    potIcon.classList.add('hidden');
    potContents.classList.remove('hidden');
}
//**;* right card meal details *;**//

