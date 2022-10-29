//arraysAndVariables
var sides = ['miso glazed carrots', 'coleslaw', 'garden salad', 'crispy potatoes', 'sweet potato tots', 'coconut rice', 'caeser salad', 'shrimp summer rolls', 'garlic butter mushrooms', 'hush puppies']

var mains = [ 'spaghetti and meatballs', 'pineapple chicken', 'shakshuka', 'thai yellow curry', 'bibimbap', 'chicken parmesean', 'butternut squash soup', 'bbq chicken burgers', 'ramen', 'empanadas', 'chicken fried rice', 'sheet pan fajitas', 'margarita pizza']

var desserts = ['apple pie', 'lemon meringue pie', 'black forest cake', 'banana bread', 'peach cobbler', 'cheesecake', 'funfetti cake', 'baklava', 'flan', 'macarons', 'macaroons', 'chocolate cupcakes', 'pavlova', 'pumpkin pie', 'key lime pie', 'tart tatin', 'croissants', 'eclairs' ]

var mealName
var favoriteMeals = []

//querySelectors
//buttons
var sideButton = document.querySelector('#side-radio')
var mainButton = document.querySelector('#main-radio')
var dessertButton = document.querySelector('#dessert-radio')
var entireButton = document.querySelector('#entire-radio')
var letsCookButton = document.querySelector('#lets-cook-button')
var viewFavoritesButton = document.querySelector('#view-favorites-button')
var backToMainButton = document.querySelector('#back-to-main-button')
var addFavoriteButton = document.querySelector('#add-favorite-button')
var removeRecipeButton = document.querySelector('#remove-recipe-button')
//display
var cookpotDisplay = document.querySelector('#cookpot-display')
var mealDisplayBox = document.querySelector('#meal-display')
var mealDisplayName = document.querySelector('#meal-display-name')
var mealSelectorDisplay = document.querySelector('.what-are-you-looking-for')
var youShouldMakeDisplay = document.querySelector('.cookpot')
var removeInput = document.querySelector('#remove-recipe-input')
var favoritesDisplay = document.querySelector('#favorites-page')
var favoritesNameDisplay = document.querySelector('#favorites-display')

//eventListeners
letsCookButton.addEventListener('click', function() {
    checkRadio()
    toggleCookpotDisplay()
})

viewFavoritesButton.addEventListener('click', function() {
    toggleFavoriteDisplay()
})

backToMainButton.addEventListener('click', function() {
    toggleFavoriteDisplay()
})

addFavoriteButton.addEventListener('click', function() {
    addFavorite()
    displayFavorites()
})

removeRecipeButton.addEventListener('click', function() {
    // toggleRemoveInput()
    deleteRecipe()
})

//functions
function getRandomMeal(mealArray) {
    return Math.floor(Math.random() * mealArray.length)
}

function randomizeMeal(mealArray) {
    var randomMealNumber = getRandomMeal(mealArray)
    mealName = mealArray[randomMealNumber]
    mealDisplayName.innerText = mealName[0].toUpperCase() + mealName.slice(1)
}

function toggleCookpotDisplay() {
    mealDisplayBox.classList.toggle('hidden')
    cookpotDisplay.classList.toggle('hidden')
}

function toggleFavoriteDisplay() {
    favoritesDisplay.classList.toggle('hidden')
    mealSelectorDisplay.classList.toggle('hidden')
    youShouldMakeDisplay.classList.toggle('hidden')
    backToMainButton.classList.toggle('hidden')

}

function checkRadio() {
    if (sideButton.checked === true) {
        randomizeMeal(sides)
    } else if (mainButton.checked === true) {
        randomizeMeal(mains)
    } else if (dessertButton.checked === true) {
        randomizeMeal(desserts)
    } else {
        mealDisplayName.innerText = "Please select a meal"
    }
}

function addFavorite() {
    favoriteMeals.push(mealName[0].toUpperCase() + mealName.slice(1))
}
        
function displayFavorites() {
    favoritesNameDisplay.innerText = favoriteMeals.join(', ')
}    
        
function deleteRecipe() {
    removeInput.classList.toggle('hidden')
    var lowerCaseInput = removeInput.value
    var input = lowerCaseInput[0].toUpperCase() + lowerCaseInput.slice(1)
    for (var i = 0; i < favoriteMeals.length; i++) {
        if  (favoriteMeals[i] === input) {
            favoriteMeals.splice(i, 1)
            displayFavorites()
            removeInput.value = ''
        } 
    }
}