
// *** Selectors ***
var letsCookBtn = document.querySelector(".cook-button");
var clearBtn = document.querySelector(".clear-button");
var radioBtns = document.getElementsByName('dish-type');
var crockpotImg = document.querySelector('.js-crockpot-pic');

var shouldMakeDisplay = document.querySelector('.js-output');
var outputText = document.querySelector('.js-output-text');

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
letsCookBtn.addEventListener('click', giveMakeSuggestion)
clearBtn.addEventListener('click', clearSelection)

// *** Functions ***

//1. randomize index number param - array
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}
//2. radio button selection
function findMealType() {
   var mealType;
    for (var i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
            mealType = radioBtns[i].value
        }    
    } return mealType
}

// 3. Display Selection
function displayShouldMake() {
    crockpotImg.classList.add('hidden')
    shouldMakeDisplay.classList.remove('hidden')
    clearBtn.classList.remove('hidden')
}

function displayCrockpot() {
    crockpotImg.classList.remove('hidden')
    shouldMakeDisplay.classList.add('hidden')
    clearBtn.classList.add('hidden')
}


function clearSelection(){
    displayCrockpot();
    clearRadioSelection() 
    outputText.innerText = '';
}

function clearRadioSelection() {
     for (var i = 0; i < radioBtns.length; i++) {
         if (radioBtns[i].checked) {
            radioBtns[i].checked = false;
         }    
     } 
 }


// ** Populate you should make
function giveMakeSuggestion() {
    var selectedType = findMealType()
    outputText.innerText ='';
    outputText.classList.remove('single-dish')
    outputText.classList.remove('entire-meal')
        
    if (selectedType === 'dessert') {
        outputText.innerText = `${desserts[getRandomIndex(desserts)]}!`
        outputText.classList.add('single-dish')
        displayShouldMake()
    } else if (selectedType === 'side') {
        outputText.innerText = `${randomSelection = sides[getRandomIndex(sides)]}!`
        outputText.classList.add('single-dish')
        displayShouldMake()
    } else if (selectedType === 'main-dish') {
        outputText.innerText = `${mainDishes[getRandomIndex(mainDishes)]}!`
        outputText.classList.add('single-dish')
        displayShouldMake()
    } else if (selectedType === 'entire-meal'){
        outputText.innerText = `${mainDishes[getRandomIndex(mainDishes)]} with a side of ${randomSelection = sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`
        outputText.classList.add('entire-meal')
        displayShouldMake()
    } else(
        displayCrockpot()
    )
}

