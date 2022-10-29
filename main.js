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
//error-handling
var errorMessages = document.querySelectorAll('.error-messages')

//event listeners
letsCookBtn.addEventListener('click', function(event) {
    event.preventDefault();
    displayDish(checkRadioValues());
});
clearButton.addEventListener('click', reset);

//function
function getRandomArrayElement(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function checkRadioValues() {
    errorMessages[0].classList.add('hidden');
    errorMessages[1].classList.add('hidden');
    if(sideButton.checked) {
        dishToCook = randomizeSelecton(sidesArray);
        return dishToCook;
    } else if(mainButton.checked) {
        dishToCook = randomizeSelecton(mainsArray);
        return dishToCook;
    }else if(dessertButton.checked) {
        dishToCook = randomizeSelecton(dessertsArray);
        return dishToCook;
    }else if(entireMealButton.checked) {
        mealToCook.push(randomizeSelecton(sidesArray));
        mealToCook.push(randomizeSelecton(mainsArray));
        mealToCook.push(randomizeSelecton(dessertsArray));
        return mealToCook;
    } else {
        for(var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].classList.remove('hidden');
        }
    }    
}
function randomizeSelecton(array) {
    return getRandomArrayElement(array);
    }
function displayDish(selection) {
    mealToCook = [];
    dishToMake.innerText = "";
    potImage.classList.remove('pot-error');

    potImage.classList.add('hidden');
    dishToMake.classList.remove('hidden');
    centered.classList.remove('hidden');
    clearButtonContainer.classList.remove('hidden');
    if(!selection){
        potImage.classList.remove('hidden');
        potImage.classList.add('pot-error');
        centered.classList.add('hidden');
        clearButtonContainer.classList.add('hidden');
    } else if(selection.length === 3) {
        dishToMake.innerText = `${selection[1]} with a side of ${selection[0]} and ${selection[2]} for dessert`;
    } else {
        dishToMake.innerText = `${selection}`;
    }
}

function reset() {
    potImage.classList.remove('hidden');
    potImage.classList.remove('pot-error');
    centered.classList.add('hidden');
    clearButtonContainer.classList.add('hidden');
}