// QUERY SELECTOR VARIABLES go here 👇
var sideButton = document.querySelector('#side')
var mainButton = document.querySelector('#main')
var dessertButton = document.querySelector('#dessert')
var mealButton = document.querySelector('#meal')
var letsCookButton = document.querySelector('.lets-cook')

var potImage = document.querySelector('.pot-image')
var randomText = document.querySelector('.random-text')
var clearButton = document.querySelector('.clear-button')

// DATA MODEL 👇
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
var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesan',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza'
]
var desserts = [
    'Desserts',
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
var meals = [];

//EVENT LISTENERS HERE! 👇 TELLING COMPUTER TO LISTEN TO CLICK:
letsCookButton.addEventListener('click',generateRandomDish, showPrompt)
clearButton.addEventListener('click',clearPrompt)

// FUNCTIONS AND EVENT HANDLERS GO HERE 👇 
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

//Variables:
var randomSides = sides[getRandomIndex(sides)];
var randomSides = sides[getRandomIndex(sides)];
var randomMains = mains[getRandomIndex(mains)];
var randomDesserts = desserts[getRandomIndex(desserts)];

function generateRandomSide(event) {
    event.preventDefault();
    randomText.innerHTML = `<section class="prompt">
        <h3>You should make</h3>
        <h1>${randomSides}!</h1>
        </section>`; 
}

function generateRandomMain(event) {
    event.preventDefault();
    randomText.innerHTML = `<section class="prompt">
        <h3>You should make</h3>
        <h1>${randomMains}!</h1>
        </section>`; 
}

function generateRandomDessert(event) {
    event.preventDefault();
    randomText.innerHTML = `<section class="prompt">
        <h3>You should make</h3>
        <h1>${randomDesserts}!</h1> 
        </section>`;
}

function generateRandomMeal(event) {
    event.preventDefault();
    randomText.innerHTML = `<section class="prompt">
        <h3>You should make</h3>
        <h1>${randomMains} with a side of ${randomSides} and ${randomDesserts} for dessert!</h1>
        </section>`;
}
    
function generateRandomDish(event) {
    event.preventDefault(); 
    if (sideButton.checked) {
        generateRandomSide(event)
        showPrompt(event)
        clearButton.classList.remove('hidden')
    } else if (mainButton.checked) {
        generateRandomMain(event)
        showPrompt(event)
        clearButton.classList.remove('hidden')
    } else if (dessertButton.checked) {
        generateRandomDessert(event)
        showPrompt(event)
        clearButton.classList.remove('hidden')
    } else if (mealButton.checked) {
        generateRandomMeal(event) 
        meals.push(randomText.innerHTML)
        showPrompt(event)
        clearButton.classList.remove('hidden')
    } else {
        potImage.classList.remove('hidden');
    }
 }

 function showPrompt(event) {
    event.preventDefault()
    potImage.classList.toggle('hidden');
    randomText.classList.toggle("hidden");
 }

function clearPrompt() {
    potImage.classList.remove('hidden');
    randomText.classList.add("hidden");
    clearButton.classList.add('hidden')
}
 //should create a clear button click, to clear words and reset it

