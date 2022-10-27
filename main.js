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
var entireMealMessage = document.querySelector('#entire-meal-results')

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
    potImage.classList.add('hidden')
    mealMessage.classList.remove('hidden')
    var checkedRadio = document.querySelector('input[name="meals"]:checked').value;
    var sideDish = getRandomIndex(sides)
    var mainDish = getRandomIndex(mains)
    var dessertDish = getRandomIndex(desserts)
    choiceDisplay.innerHTML = " "
    if (checkedRadio === "side") {
        choiceDisplay.innerText = getRandomIndex(sides)
    }
    if (checkedRadio === "main-dish") {
        choiceDisplay.innerText = getRandomIndex(mains)
    }
    if (checkedRadio === "dessert") {
        choiceDisplay.innerText = getRandomIndex(desserts)
    }
    if (checkedRadio === "entire-meal") {
        entireMealMessage.innerHTML = " "
        entireMealMessage.innerHTML =  
        `<h2>${sideDish}</h2>
        <h2>${mainDish}</h2>
        <h2>${dessertDish}</h2>`
    }
}

    function entireMealDisplay() {

        entireMealMessage.innerHTML = " "
        entireMealMessage.innerHTML = entireMealMessage + 
        `<h2>${sideDish}</h2
        <h2>${mainDish}</h2>
        <h2>${dessertDish}</h2>`
        
}
