//arraysAndVariables
var sides = ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad', 'Crispy Potatoes', 'Sweet Potato Tots', 'Coconut Rice', 'Caeser Salad', 'Shrimp Summer Rolls', 'Garlic Butter Mushrooms', 'Hush Puppies']

var mains = [ 'Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka', 'Thai Yellow Curry', 'Bibimbap', 'Chicken Parmesean', 'Butternut Squash Soup', 'BBQ Chicken Burgers', 'Ramen', 'Empanadas','Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza']

var desserts = ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake', 'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake', 'Baklava', 'Flan', 'Macarons', 'Macaroons', 'Chocolate Cupcakes', 'Pavlova', 'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs' ]

var favoriteRecipes = []


//querySelectors
//buttons
var sideButton = document.querySelector('#side-radio')
var mainButton = document.querySelector('#main-radio')
var dessertButton = document.querySelector('#dessert-radio')
var entireButton = document.querySelector('#entire-radio')
var letsCookButton = document.querySelector('#lets-cook-button')
var viewFavoritesButton = document.querySelector('#view-favorites-button')
var backToMainButton = document.querySelector('#back-to-main-button')
//display
var cookpotDisplay = document.querySelector('#cookpot-display')
var mealDisplayBox = document.querySelector('#meal-display')
var mealDisplayName = document.querySelector('#meal-display-name')
var favoritesDisplay = document.querySelector('.favorites-page')
var mealSelectorDisplay = document.querySelector('.what-are-you-looking-for')
var youShouldMakeDisplay = document.querySelector('.cookpot')

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



//functions
function getRandomMeal(mealArray) {
    return Math.floor(Math.random() * mealArray.length)
}

function randomizeMeal(mealArray) {
    var randomMealNumber = getRandomMeal(mealArray)
    var mealName = mealArray[randomMealNumber]
    mealDisplayName.innerText = mealName
}

function checkRadio() {
    if (sideButton.checked === true) {
        randomizeMeal(sides)
    } else if (mainButton.checked === true) {
        randomizeMeal(mains)
    } else if (dessertButton.checked === true) {
        randomizeMeal(desserts)
    } else {
        return 'Please make a selection.'
    }
}

function toggleCookpotDisplay() {
    mealDisplayBox.classList.toggle('hidden')
    cookpotDisplay.classList.toggle('hidden')
}

function toggleFavoriteDisplay() {
    favoritesDisplay.classList.toggle('hidden')
    mealSelectorDisplay.classList.toggle('hidden')
    youShouldMakeDisplay.classList.toggle('hidden')

}
