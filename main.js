// *** Selectors ***
// 1. Lets Cook Button
var letsCookBtn = document.querySelector(".cook-button");
// 2. Clear Button
var clearBtn = document.querySelector(".clear-button");
// 3. Crockpot Article
var crockpotArt = document.querySelector(".js-crockpot");
// 4. You should make article
var shouldMake = document.querySelector(".js-make");
// 5. Radio Group 
var radioBtns = document.querySelectorAll('input[name ="dishType"]');
// 6. Crockpot Article
var crockpotDisplay = document.querySelector('.js-crockpot');
// 7. You Should Make Article
var makeDisplay = document.querySelector('.js-make');
// 8. You should make selection
var makeText = document.querySelector('h1');


// *** Arrays ***
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
]

var mainDishes = [
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
    'Margarita Pizza'
]

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

// *** Event Listeners *** 
// 1. Lets cook button click
letsCookBtn.addEventListener('click', giveMakeSuggestion)

// 2. Clear buttton


// *** Functions ***

//1. randomize index number param - array
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
//2. radio button selection
function findMealType() {
    var mealType;
    for (var radioButton of radioBtns) {
        if (radioButton.checked) {
            mealType = radioButton.value
        }
    } 
     return mealType
}

// 3. Display Selection
function displayShouldMake(){
    crockpotDisplay.classList.add('hidden')
    makeDisplay.classList.remove('hidden')
}

function displayCrockpot(){
    crockpotDisplay.classList.remove('hidden')
    makeDisplay.classList.add('hidden')
} 

// ** Populate you should make
function giveMakeSuggestion() {
    var selectedType = findMealType()
    
    if (selectedType === 'dessert'){
        makeText.innerText = `${desserts[getRandomIndex(desserts)]}`
    } else if (selectedType === 'side'){
        makeText.innerText = `${randomSelection = sides[getRandomIndex(sides)]}`
    } else if (selectedType === 'main-dish'){
        makeText.innerHTML = `${mainDishes[getRandomIndex(mainDishes)]}`
    }
    displayShouldMake()
  
}
