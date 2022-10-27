var displayUser = document.querySelector('#user-input')
var addRecipeButton = document.querySelector('.add-button')
var loginPage = document.querySelector('#page-login')
var loginBox = document.querySelector('#login-box')
var loginButton = document.querySelector('.login-button')
var loginMessage = document.querySelector('.login-message')
var mainPage = document.querySelector('.main-page')
var sideRadio = document.querySelector('#side-radio')
var mainDishRadio = document.querySelector('#main-dish-radio')
var dessertRadio = document.querySelector('#dessert-radio')
var entireMealRadio = document.querySelector('#entire-meal-radio')
var potImage = document.querySelector('.pot-svg')
var choiceDisplay = document.querySelector('#choice-results')
var clearButton = document.querySelector('#clear-results')
var letsCookButton = document.querySelector('.lets-cook-button')
var mealMessage = document.querySelector('.meal-message')
var entireMealMessage = document.querySelector('#entire-meal-results')
var errorMessageDisplay = document.querySelector('.error-message')
var errorLoginMessage = document.querySelector('.login-error')
var makeMessage =document.querySelector('#make-message')

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
    'Hush Puppies'
];

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
    'Margarita Pizza',
];

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
    'Eclairs',
]

var savedRecipes = []



loginButton.addEventListener('click', toMainPage)
letsCookButton.addEventListener('click', displayMeals)
clearButton.addEventListener('click', clearMealMessage)



function getRandomIndex(array) {
    var randomArray = Math.floor(Math.random() * array.length);
    return array[randomArray]
}

function toMainPage(event) {
    event.preventDefault()
    console.log(loginBox.value)
    loginPage.classList.add('hidden')
    mainPage.classList.remove('hidden')
    addRecipeButton.classList.remove('hidden')
    displayUser.classList.remove('hidden')
    displayUser.innerText = `Let's get cooking, ${loginBox.value}!`
    if (loginBox.value === "") {
        displayUser.classList.add('hidden')
        mainPage.classList.add('hidden')
        loginPage.classList.remove('hidden')
        addRecipeButton.classList.add('hidden')
        loginMessage.innerText = "Please add your name!"
        document.getElementById('log-message').style.color = "#ff0000"
        
    }
}

function clearMealMessage(event) {
    event.preventDefault()
    potImage.classList.remove('hidden')
    mealMessage.classList.add('hidden')
}

function displayMeals(event) {
    event.preventDefault()
    potImage.classList.add('hidden')
    mealMessage.classList.remove('hidden')
    document.getElementById('choice-results').style.color = "black"
    var checkedRadio = document.querySelector('input[name="meals"]:checked');
    var sideDish = getRandomIndex(sides)
    var mainDish = getRandomIndex(mains)
    var dessertDish = getRandomIndex(desserts)
    if (checkedRadio === null) {
        makeMessage.classList.add('hidden')
        clearButton.classList.add('hidden')
        document.getElementById('choice-results').style.color = "#ff0000"
        choiceDisplay.innerText = "Please make a choice!!"
    }
    if (checkedRadio.value === "side") {
        choiceDisplay.innerText = getRandomIndex(sides)
        clearButton.classList.remove('hidden')
    }
    if (checkedRadio.value === "main-dish") {
        choiceDisplay.innerText = getRandomIndex(mains)
        clearButton.classList.remove('hidden')
    }
    if (checkedRadio.value === "dessert") {
        choiceDisplay.innerText = getRandomIndex(desserts)
        clearButton.classList.remove('hidden')
    }
    if (checkedRadio.value === "entire-meal") {
        clearButton.classList.remove('hidden')
        choiceDisplay.innerText = `${mainDish} with a side of ${sideDish} and ${dessertDish} for dessert!`
    }       
}

function loginErrorMessage() {
    
}







