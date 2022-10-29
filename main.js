//1 - Create Data model to hold all of the dishes in 3 array: side, main, dessert
var sidesArray = [
    ' Miso Glazed Carrots', 
    ' Coleslaw', 
    ' Garden Salad', 
    ' Crispy Potatoes', 
    ' Sweet Potato Tots', 
    ' Coconut Rice', 
    ' Caeser Salad', 
    ' Shrimp Summer Rolls', 
    ' Garlic Butter Mushrooms', 
    ' Hush Puppies',
];
var mainsArray = [
    ' Spaghetti and Meatballs', 
    ' Pineapple Chicken', 
    ' Shakshuka', 
    ' Thai Yellow Curry', 
    ' Bibimbap', 
    ' Chicken Parmesean', 
    ' Butternut Squash Soup', 
    ' BBQ Chicken Burgers', 
    ' Ramen', 
    ' Empanadas', 
    ' Chicken Fried Rice', 
    ' Sheet Pan Fajitas', 
    ' Margarita Pizza', 
];
var dessertsArray = [
    ' Apple Pie', 
    ' Lemon Meringue Pie', 
    ' Black Forest Cake', 
    ' Banana Bread', 
    ' Peach Cobbler', 
    ' Cheesecake', 
    ' Funfetti Cake', 
    ' Baklava', 
    ' Flan', 
    ' Macarons', 
    ' Macaroons', 
    ' Chocolate Cupcakes', 
    ' Pavlova', 
    ' Pumpkin Pie', 
    ' Key Lime Pie', 
    ' Tart Tatin', 
    ' Croissants', 
    ' Eclairs', 
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
var clearButton = document.querySelector('.clear-btn');
var clearButtonContainer = document.querySelector('.clear-btn-container');
//suggestions
var potBlock = document.querySelector('.pot-block');
var potImage = document.querySelector('.pot');
var youShouldMakeContent = document.querySelector('.suggest');
var centered = document.querySelector('.centered')
var dishToMake = document.querySelector('.suggestion');


//event listeners

letsCookBtn.addEventListener('click', function(event) {
    event.preventDefault();
    displayDish(checkRadioValues());
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
        return dishToCook;
    } else if(mainButton.checked) {
        dishToCook = randomizeSelecton(mainsArray);
        console.log("Main: ", dishToCook);
        return dishToCook;
    }else if(dessertButton.checked) {
        dishToCook = randomizeSelecton(dessertsArray);
        console.log("Dessert: ", dishToCook);
        return dishToCook;
    }else if(entireMealButton.checked) {
        mealToCook.push(randomizeSelecton(sidesArray));
        mealToCook.push(randomizeSelecton(mainsArray));
        mealToCook.push(randomizeSelecton(dessertsArray));
        console.log("Meal: ", mealToCook);
        return mealToCook;
    }
    //else statement for errors

}
function randomizeSelecton(array) {
    return getRandomArrayElement(array);
    }

function displayDish(selection) {
    mealToCook = [];
    dishToMake.innerText = "";
    potImage.classList.add('hidden');
    youShouldMakeContent.classList.add('recipe-block');
    youShouldMakeContent.classList.remove('hidden');
    clearButtonContainer.classList.remove('hidden');
    if (selection.length === 3) {
        dishToMake.innerText = `${selection[1]} with a side of ${selection[0]} and ${selection[2]} for dessert`;
    } else {
        dishToMake.innerText = `${selection}`;
    }
}