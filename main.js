//1 - Create Data model to hold all of the dishes in 3 array: side, main, dessert
var sidesArray = [
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
var mainsArray = [
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
var dessertsArray = [
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
var dishToCook;
var mealToCook = [];


//querySelects

//radio buttons
var sideButton = document.querySelector('#side');
var mainButton = document.querySelector('#main-dish');
var dessertButton = document.querySelector('#dessert');
var entireMealButton = document.querySelector('#entire-meal');
//action buttons
var letsCookBtn = document.querySelector('.lets-cook-btn');


//event listeners

letsCookBtn.addEventListener('click', function(event) {
    event.preventDefault();
    checkRadioValues();
    displayDish();
});

//function
function getRandomArrayElement(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function checkRadioValues() {

    if(sideButton.checked) {
        dishToCook = randomizeSelecton(sidesArray);
        console.log("Side: ", dishToCook);
    } else if(mainButton.checked) {
        dishToCook = randomizeSelecton(mainsArray);
        console.log("Main: ", dishToCook);
    }else if(dessertButton.checked) {
        dishToCook = randomizeSelecton(dessertsArray);
        console.log("Dessert: ", dishToCook);
    }else if(entireMealButton.checked) {
        mealToCook.push(randomizeSelecton(sidesArray));
        mealToCook.push(randomizeSelecton(mainsArray));
        mealToCook.push(randomizeSelecton(dessertsArray));
        console.log("Meal: ", mealToCook);
    }
    //else statement for errors

}
function randomizeSelecton(array) {
    return getRandomArrayElement(array);

    }



function displayDish() {
        //interpolate dishToCook into innerText
        //hide pot
        //unhide
}

//


    
    //function that randomizes array index from selected array and display that element in the right hand box
     //query select lets cook button in HTML
    //query select radio buttons
    //differernt function for each radio button?
    //event listener for lets cook button
    //read user selection
    //insert HTML for innerText/innerHTML for array element selected to display it on page
    //query select crockpot image to hide/reveal
    //check radio button default functionality to override

    //EMF (CYA 1) -
    // how to incorporate classes, if desired: a meal class that takes in randomized values to return an array of 3 dishes to plug into  

    //prevent default on Let's Cook button (because it is on a form and will refresh the page)
    //radio button default value for if it's checked. you dont need an event listener
    //querySelect button. radioButtonSelection() If: radiobutton.checked === true