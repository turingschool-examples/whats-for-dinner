var navTitle = document.querySelector('.title')
var potIcon = document.querySelector('.stockpot-container')
var selectCont = document.querySelector('.selectContainer')
var selectTxt = document.querySelector('.selectText')
var radioButtons = document.getElementsByName('userSelect')
var sidesRad = document.querySelector('#sides')
var mainsRad = document.querySelector('#mains')
var dessertsRad = document.querySelector('#desserts')
var mealsRad = document.querySelector('#entireMeal')
var reset = document.querySelector('.button-container')
var letsCook = document.querySelector('.lets-cook')
var optionMenu = document.querySelector('.option-menu')
var addRecipe = document.querySelector('.add-recipe')
var recipeModal = document.querySelector('.modal-add-recipe')
var newRecipeAdd = document.querySelector('.add-recipe-button')
var newRecipeCancel = document.querySelector('.cancel-recipe-button')
var loginPage = document.querySelector('.landing-page')
var loginButton = document.querySelector('.userLogin')
var errorMessage = document.querySelector('.loginError')
var firstName = document.querySelector('.first-name')
var lastName = document.querySelector('.last-name')
var guestLoginButton = document.querySelector('.guestLogin')
var recipeName = document.querySelector('.name')
var recipeType = document.querySelector('.type')
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
letsCook.disabled = true

function buildArray(sideArr,mainArr,dessertArr) {
    var types = {
        sides: sideArr,
        mains: mainArr,
        desserts: dessertArr
    }
    return types
}

loginButton.addEventListener('click', userLogin)
guestLoginButton.addEventListener('click', guestLogin)
newRecipeCancel.addEventListener('click',addNewRecipe)
addRecipe.addEventListener('click',addNewRecipe)
newRecipeAdd.addEventListener('click',saveRecipe)
newRecipeCancel.addEventListener('click',cancelRecipe)
letsCook.addEventListener('click',cookSelection)
reset.addEventListener('click',resetSelection)
for(var i=0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click',radioSelect)
}

function guestLogin() {
    loginPage.classList.toggle('hidden')
    optionMenu.classList.toggle('hidden')
    navTitle.innerText = `Hi there! Let's get cookin'!`
}

function userLogin() {
    if(firstName.value.length > 0 || lastName.value.length > 0) {
        // loginPage.classList.toggle('hidden')
        loginPage.classList.add('runAnimationOut')
        optionMenu.classList.toggle('hidden')
        optionMenu.classList.add('runAnimation')
        addRecipe.classList.toggle('hidden')
        navTitle.innerText = `Hi ${firstName.value}! Let's get cookin'!`
    } else {
        errorMessage.classList.toggle('hidden')
    }
}

function addNewRecipe() {
    if(recipeModal.classList.contains('hidden')) {
        recipeModal.classList.remove('hidden')
        recipeModal.classList.add('animateDown')
    } else {
        recipeModal.classList.replace('animateUp','animateDown')
    }
}

function saveRecipe() {
    
    if(recipeType.value === "sides") {
        sides.push(recipeName.value)
    } else if(recipeType.value === "mains") {
        mains.push(recipeName.value)
    } else {
        desserts.push(recipeName.value)
    }
    
    recipeModal.classList.replace('animateDown','animateUp')
    recipeName.value = ""
    recipeType.value = "Side Dish"
}

function cancelRecipe() {
    recipeName.value = ""
    recipeType.value = "Side Dish"
    recipeModal.classList.replace('animateDown','animateUp')
}

function cookSelection() {
        if(selectCont.classList.contains('hidden')) {
            selectCont.classList.replace('hidden','runAnimation')
            potIcon.classList.add('runAnimationOut')
            reset.classList.replace('hidden','runAnimation') 
        } else {
            selectCont.classList.replace('runAnimationOut','runAnimation')
            potIcon.classList.replace('runAnimation','runAnimationOut')
            reset.classList.replace('runAnimationOut','runAnimation')
        }
        sidesRad.disabled = true
        mainsRad.disabled = true
        mealsRad.disabled = true
        dessertsRad.disabled = true
        letsCook.disabled = true
    }

function radioSelect(event) {
    selType = event.target.id
    potIcon.classList.replace('hidden','runAnimation')
    if(selType === "entireMeal") {
        displayEntireMeal(selType)
    } else {
    displayRandomSelection(selType)
    }
    letsCook.disabled = false
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
    potIcon.classList.replace('runAnimationOut','runAnimation')
    selectCont.classList.replace('runAnimation','runAnimationOut')
    reset.classList.replace('runAnimation','runAnimationOut')
    sidesRad.checked = false
    sidesRad.disabled = false
    mainsRad.checked = false
    mainsRad.disabled = false
    mealsRad.checked = false
    mealsRad.disabled = false
    dessertsRad.checked = false
    dessertsRad.disabled = false
    letsCook.disabled = true
}