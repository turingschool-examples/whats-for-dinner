var sideDishes = [
    'Cheesy Garlic Bread',
    'Ceasar Salad',
    'Roasted Vegetable',
    'Polenta',
]
var mainDishes = [
    'Four Cheese Lasagna',
    'Chicken Rossoto',
    'Sun Dried Tomato Pizza',
    'Braised Chicken',
]

var desserts = [
    'Gelato',
    'Tiramisu',
    'Panna Cotta',
    'Biscotti',
]

var entireMeals = [
    meal1 = {
        main: mainDishes[0],
        side: sideDishes[0],
        dessert: desserts[0],
    },
    meal2 = {
        main: mainDishes[1],
        side: sideDishes[1],
        dessert: desserts[1],
    },
]
var letsCookButton = document.querySelector('.lets-cook-button')
var cookingPotImg = document.querySelector('#cooking-pot-img')
var mealSuggestion = document.querySelector('.box-meal')
var renderedMeal = document.querySelector('#rendered-meal')
var userInput = document.getElementsByName('dish')
var radioButtons = document.getElementsByTagName('input')
var inputArray = Array.from(userInput);
var radioButtonsArray = Array.from(radioButtons);

letsCookButton.addEventListener('click', renderRandomDish)
radioButtonsArray.forEach(button => {
    button.addEventListener('click', getRadioValue)
});

function getRadioValue() {
   for (var i=0; i<userInput.length; i++) {
    if(userInput[i].checked) {
        var selectedArray = userInput[i].value
        return selectedArray
    }
   }
}

function getRandomIndex(dishesArray) {
    return Math.floor(Math.random() * dishesArray.length);
}

function getRandomDish(selectedArray) {
    if(selectedArray !== entireMeals) {
        var randomIndex = getRandomIndex(selectedArray)
        var indexItem = selectedArray[randomIndex]
        return indexItem;
    }
    else {
        var randomIndex = getRandomIndex(entireMeals)
        var indexObj = entireMeals[randomIndex]
        var selectedMeal = `Main: ${indexObj.main}\nSide: ${indexObj.side}\nDessert: ${indexObj.dessert}`;
        return selectedMeal
    }
}

function toggleMealClass() {
    mealSuggestion.classList.toggle('hidden')
    cookingPotImg.classList.toggle('hidden')
}
function renderRandomDish() {
    var selectedArray = getRadioValue()
    if (selectedArray) {
        var dishesArray;
        switch (selectedArray) {
            case 'Side':
                dishesArray = sideDishes
                break;
            case 'Dessert':
                dishesArray = desserts
                break;
            case 'Main Dish':
                dishesArray = mainDishes
                break;
            case 'Entire Meal':
                dishesArray = entireMeals
                break;
            default:
                break;
        }
        var randomDish = getRandomDish(dishesArray);
        renderedMeal.innerText = randomDish;
        toggleMealClass();
    }
   
}
