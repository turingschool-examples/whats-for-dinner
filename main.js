var potIcon = document.querySelector('.stockPot')
var selectHdr = document.querySelector('.selectHeader')
var selectTxt = document.querySelector('.selectText')
var radioButtons = document.getElementsByName('userSelect')
var sidesRad = document.querySelector('#sides')
var reset = document.querySelector('.reset')
var letsCook = document.querySelector('.lets-cook')
var addRecipe = document.querySelector('.add-recipe')
var recipeModal = document.querySelector('.modal-add-recipe')
var newRecipeAdd = document.querySelector('.add-recipe-button')
var newRecipeCancel = document.querySelector('.cancel-recipe-button')
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
    'Eclairs'
]

var selectionType = buildArray(sides,mains,desserts)

function buildArray(sideArr,mainArr,dessertArr) {
    var types = {
        sides: sideArr,
        mains: mainArr,
        desserts: dessertArr
    }
    return types
}

newRecipeCancel.addEventListener('click',addNewRecipe)
addRecipe.addEventListener('click',addNewRecipe)
letsCook.addEventListener('click',cookSelection)
reset.addEventListener('click',resetSelection)
for(var i=0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click',radioSelect)
}

function addNewRecipe() {
    recipeModal.classList.toggle('hidden')
}

function cookSelection() {
    potIcon.classList.add('hidden')
    if(selectHdr.classList.contains('hidden')=== true && selectTxt.classList.contains('hidden')=== true) {
        selectHdr.classList.replace('hidden','runAnimation')
        selectTxt.classList.replace('hidden','runAnimation')
        reset.classList.remove('hidden')
    }
}

function radioSelect(event) {
    selType = event.target.id
    potIcon.classList.replace('hidden','runAnimation')
    selectHdr.classList.add('hidden')
    selectTxt.classList.add('hidden')
    if(selType === "entireMeal") {
        displayEntireMeal(selType)
    } else {
    displayRandomSelection(selType)
    }
}

function displayEntireMeal() {
    var sideSelection = sides[randomIntGen(sides.length)]
    var mainSelection = mains[randomIntGen(mains.length)]
    var dessertSelection = desserts[randomIntGen(desserts.length)]
    selectTxt.innerText = `${mainSelection} with a side of ${sideSelection} and ${dessertSelection} for dessert!`
}

function displayRandomSelection(arrayName) {
    var array = selectionType[arrayName]
    var selection = array[randomIntGen(array.length)]
    selectTxt.innerText = `${selection}!`
}

function randomIntGen(max) {
    var randomInt = Math.floor(Math.random() * max)
    return randomInt
}

function resetSelection() {
    potIcon.classList.remove('hidden')
    selectHdr.classList.add('hidden')
    selectTxt.classList.add('hidden')
    reset.classList.add('hidden')
    sidesRad.checked = true
}