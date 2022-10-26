var displayUser = document.querySelector('#user-input')
var addRecipeButton = document.querySelector('.add-button')
var loginPage = document.querySelector('#page-login')
var loginBox = document.querySelector('#login-box')
var loginButton = document.querySelector('.login-button')
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



function getRandomIndex(array) {
    var randomArray = Math.floor(Math.random() * array.length);
    return array[randomArray]
  }



function toMainPage(event) {
    event.preventDefault()
    loginPage.classList.add('hidden')
    mainPage.classList.remove('hidden')
    addRecipeButton.classList.remove('hidden')
}


function displayMeals(event) {
    event.preventDefault()
    console.log(event.target)
    potImage.classList.add('hidden')
    mealMessage.classList.remove('hidden')
    choiceDisplay.innerHTML= ""
    if(sideRadio.checked === true) {
        choiceDisplay.innerText = getRandomIndex(sides)
    }
    console.log(choiceDisplay)
}
