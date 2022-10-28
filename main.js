// Intermediate CSS
// Do some research and determine how to make your app respond to the user’s screen size.
// Layout and spacing should adapt to mobile, tablet, desktop and extra large screens.
// Add a loading animation when a user clicks the “Let’s Cook” button to simulate searching for a recipe. Hint - You will need to use CSS Keyframes, and a Javascript timeout function for this.
// Make your buttons grow in size or change color when the user hovers over them, enticing them to click the dang thing.
// When the recipe appears, the text should fade in.
// Remember your user experience and animate these things in gradually. Timing is everything!

var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies']

var mains = [
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
    'Margarita Pizza']

var desserts = [
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
    'Eclairs']


var sideRadioButton = document.querySelector('#side')
var mainRadioButton = document.querySelector('#main-dish')
var dessertRadioButton = document.querySelector('#dessert')
var entireMealRadioButton = document.querySelector('#entire-meal')
var letsCookButton = document.querySelector('.lets-cook')
var cookPotBox = document.querySelector('.box-2')
var mealSuggestionBox = document.querySelector('.box-3')
var dish = document.querySelector('#dish')
var clearButton = document.querySelector('.clear')

letsCookButton.addEventListener('click', showRandomMealType)
clearButton.addEventListener('click', clearButtonClicked)

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function clearButtonClicked() {
    showSugestionBox(false)
}

function showSugestionBox(show) {
    if(show === true) {
        mealSuggestionBox.classList.remove('hidden')
        cookPotBox.classList.add('hidden')
    } else {
        mealSuggestionBox.classList.add('hidden')
        cookPotBox.classList.remove('hidden')
        }
}
function showRandomMealType(event) {
    event.preventDefault()
    showSugestionBox(true)
    if (sideRadioButton.checked === true) {
        showRandomSide()
    } else if(mainRadioButton.checked === true) {
        showRandomMain()
    } else if(dessertRadioButton.checked === true) {
        showRandomDessert()
    } else {
        showRandomEntireMeal()
    }
}
function showRandomSide() {
    dish.innerText = ""
    var sideRadioButton = getRandomIndex(sides)
    side = sides[sideRadioButton]
    dish.innerText = `${side}!`
}
function showRandomMain() {
    dish.innerText = ""
    var mainRadioButton = getRandomIndex(mains)
    main = mains[mainRadioButton]
    dish.innerText = `${main}!`
}
function showRandomDessert() {
    dish.innerText = ""
    var dessertRadioButton = getRandomIndex(desserts)
    dessert = desserts[dessertRadioButton]
    dish.innerText = `${dessert}!`
}

function showRandomEntireMeal() {
    dish.innerText = ""
    var sideRadioButton = getRandomIndex(sides)
    side = sides[sideRadioButton]
    var mainRadioButton = getRandomIndex(mains)
    main = mains[mainRadioButton]
    var dessertRadioButton = getRandomIndex(desserts)
    dessert = desserts[dessertRadioButton]
    dish.innerText = `${side}, 
    ${main}, 
    ${dessert}!`
}