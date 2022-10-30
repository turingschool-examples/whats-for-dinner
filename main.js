var sides = [
    "Shishito Peppers",
    "Agadashi Tofu",
    "Vegtable Tempura",
    "Grilled Trumpet Mushrooms",
    "Edamame"
]

var mainDishes = [
    "Bento Box",
    "Curry",
    "Chicken Katsu",
    "Teriyaki Bowl",
    "Sahshimi Platter"
]

var desserts = [
    "Strawberry Mochi",
    "Green Tea Ice Cream",
    "Red Bean Bun",
    "Rice Pudding"
]



var cookButton = document.querySelector('.cook-button')
var cookPotImage = document.querySelector('#cookPotImg')
var results = document.querySelector('.results-display')
var displayResult = document.querySelector('.display-result')
var clearButton = document.querySelector('.clear-button')
var cookPotCard = document.querySelector('.pot-image') 
var loginButton = document.querySelector('.login-button')
var loginPage = document.querySelector('.login-page')
var mainPage = document.querySelector('.main-page')
var userNameInput = document.querySelector('.user-name')
var topOfPage = document.querySelector('.header')
var mainPageHeader = document.querySelector('.header')
var addRecipeButton = document.querySelector('.add-recipe')
var sideSelector = document.querySelector('#side')
var mainDishSelector = document.querySelector('#main-dish')
var dessertSelector = document.querySelector('#dessert')


cookButton.addEventListener('click', selectDish)
loginButton.addEventListener('click', goToMainPage)
clearButton.addEventListener('click', clearDish)


function changeCookPotBox() {
    cookPotImage.classList.add('hidden')
    results.classList.remove('hidden')
    displayResult.classList.remove('hidden')
    clearButton.classList.remove('hidden')
  }

function selectDish() {
changeCookPotBox();
if (sideSelector.checked) {
displayResult.innerHTML= `${sides[getRandomIndex(sides)]}`
} else if (mainDishSelector.checked) {
    displayResult.innerHTML= `${mainDishes[getRandomIndex(mainDishes)]}`
} else if (dessertSelector.checked) { 
    displayResult.innerHTML= `${desserts[getRandomIndex(desserts)]}`
    }
}

function clearDish() {
  cookPotImage.classList.remove('hidden')
  results.classList.add('hidden')
  displayResult.classList.add('hidden')
    clearButton.classList.add('hidden')

}

function goToMainPage() {
    loginPage.classList.add('hidden')
    mainPage.classList.remove('hidden')
    mainPageHeader.classList.remove('hidden')
    addRecipeButton.classList.remove('hidden')
    

    topOfPage.innerHTML += `
    <h1 class="title">What dish you looking for, ${userNameInput.value}?</h1>
    `
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
 }

