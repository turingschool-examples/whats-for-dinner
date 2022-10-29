
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

var addARecipeButton =document.querySelector('.add-a-recipe')
var sideRadioButton = document.querySelector('#side')
var mainRadioButton = document.querySelector('#main-dish')
var dessertRadioButton = document.querySelector('#dessert')
var entireMealRadioButton = document.querySelector('#entire-meal')
var letsCookButton = document.querySelector('.lets-cook')
var cookPotBox = document.querySelector('.box-2')
var mealSuggestionBox = document.querySelector('.box-3')
var dish = document.querySelector('#dish')
var clearButton = document.querySelector('.clear')
var errorMessage = document.querySelector('.error-message1')
var addARecipeForm = document.querySelector('.add-a-recipe-form')
var addNewRecipeButton = document.querySelector('.add-recipe')


letsCookButton.addEventListener('click', showRandomMealType)
clearButton.addEventListener('click', clearButtonClicked)
addARecipeButton.addEventListener('click', showAddRecipeForm)
addNewRecipeButton.addEventListener('click', showNewlyAddedRecipe)

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function showAddRecipeForm() {
    addARecipeForm.classList.remove('hidden')
}

function showNewlyAddedRecipe() {
    clearErrorMessage()
    showSugestionBox(true)
    var newRecipeType = document.getElementById('add-recipe-type').value    
    var newRecipeName = document.getElementById('add-recipe-name').value
    dish.innerText = newRecipeName
    if(newRecipeType === 'main') {
        mains.push(newRecipeName)
    } else if(newRecipeType === 'side') {
        sides.push(newRecipeName)
    } else if(newRecipeType === 'dessert') {
        desserts.push(newRecipeName)
    } else {
        clearButtonClicked()
        showErrorMessage1()
    }
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
    clearErrorMessage()
    showSugestionBox(true)
    if (sideRadioButton.checked) {
        showRandomSide()
    } else if(mainRadioButton.checked) {
        showRandomMain()
    } else if(dessertRadioButton.checked) {
        showRandomDessert()
    } else if (entireMealRadioButton.checked){
        showRandomEntireMeal()
    } else {
        clearButtonClicked()
        showErrorMessage1()
    }
}
function showErrorMessage1() {
    errorMessage.classList.remove('hidden')
    addARecipeForm.classList.add('hidden')
}
function clearErrorMessage() {
    errorMessage.classList.add('hidden')
    addARecipeForm.classList.add('hidden')
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
    dish.innerText = `${main} with a side of ${side} and ${dessert} for dessert!`
}