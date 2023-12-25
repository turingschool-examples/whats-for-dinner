//data model

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
    'Margarita Pizza'
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
];

var randomDish = '';
var entireMeal = {
    side: '',
    mainDish: '',
    dessert: ''
}

//query selectors
var cookButton = document.querySelector('.lets-cook');
var showDish = document.querySelector('div');
var radioButtons = document.getElementsByName('meal');

//event listeners
cookButton.addEventListener('click', checkRadioButtons);

//function
function checkRadioButtons() {
    for(var i = 0; i < radioButtons.length; i++){
        if(radioButtons[i].checked) {
            var selectedMeal = radioButtons[i].value
        }
    }
    if(selectedMeal === 'Side'){
        getRandomDish(sides)
    } else if(selectedMeal === 'Main Dish') {
        getRandomDish(mains)
    } else if(selectedMeal === 'Dessert') {
        getRandomDish(desserts)
    } else  if(selectedMeal === 'Entire Meal') {
        makeEntireMeal(sides, mains, desserts)
    } else {
        showDish.innerHTML = `
        <h4>Oops! Looks like you haven't selected any option. Please choose a dish category and try again.</h4>
        `
    }
};

function getRandomDish(dishes) {
    var randomIndex = Math.floor(Math.random() * dishes.length)
    randomDish = dishes[randomIndex]
    showRandomDish()
};

function showRandomDish() {
    showDish.innerHTML = `
    <p><em>You should make:</em></p>
    <h3>${randomDish}!</h3>
    `
};

function makeEntireMeal(sides, mains, desserts) {
    var randomIndex = Math.floor(Math.random() * sides.length)
    entireMeal.side = sides[randomIndex]
    randomIndex = Math.floor(Math.random() * mains.length)
    entireMeal.mainDish = mains[randomIndex]
    randomIndex = Math.floor(Math.random() * desserts.length)
    entireMeal.dessert = desserts[randomIndex]
    showEntireMeal()
};

function showEntireMeal() {
    showDish.innerHTML = `
    <p><em>You should make:</em></p>
    <h4>${entireMeal.mainDish} with a side of ${entireMeal.side} and ${entireMeal.dessert} for dessert!</h4>
    `
};









