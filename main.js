<<<<<<< Updated upstream
=======
// Query Selectors
// Display
var selections = document.getElementsByClassName('food-generator');
// Button
var sidesButton = document.querySelector('#side-dish');
var mainsButton = document.querySelector('#main-dish');
var dessertsButton = document.querySelector('#dessert');
var entireMealButton = document.querySelector('#entire-meal');
var radioBtns = document.querySelectorAll('.radio')
var letsCookBtn = document.querySelector('#lets-cook')
var clearBtn = document.querySelector('#clear-btn')
// Result
var alert = document.querySelector('.alert')
var mealIntro = document.querySelector('.intro-to-meal')
var foodResult = document.querySelector('.food-result')
var potImage = document.querySelector('.result-img')

//Event Listeners
letsCookBtn.addEventListener('click', cookThis);
clearBtn.addEventListener('click', clearForm)

//Global Variables
var sideDishes = [ 
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
var mainDishes = [
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
    'Eclairs'
];
var entireMeal = [] 

//Functions
function cookThis() {
    event.preventDefault()
    var randomSideDish = Math.floor(Math.random() * sideDishes.length);
    var randomMainDish = Math.floor(Math.random() * mainDishes.length);
    var randomDessert = Math.floor(Math.random() * desserts.length);

    if (sidesButton.checked) {
        alert.classList.add('hidden')
        foodResult.innerText = `${sideDishes[randomSideDish]}!`
    } else if (mainsButton.checked) {
        alert.classList.add('hidden')
        foodResult.innerText = `${mainDishes[randomMainDish]}!`
    } else if (dessertsButton.checked) {
        alert.classList.add('hidden')
        foodResult.innerText = `${desserts[randomDessert]}!`
    } else if (entireMealButton.checked) {
        alert.classList.add('hidden')
        foodResult.innerText = `${mainDishes[randomMainDish]} with a side of ${sideDishes[randomSideDish]} and ${desserts[randomDessert]} for dessert!`
    } else {
        alert.classList.remove('hidden')
        selections.reset()
    }
    potImage.classList.add('hidden')
    mealIntro.classList.remove('hidden')
    foodResult.classList.remove('hidden')
    clearBtn.classList.remove('hidden')
}

function clearForm() {
    potImage.classList.remove('hidden')
    mealIntro.classList.add('hidden')
    foodResult.classList.add('hidden')
    clearBtn.classList.add('hidden')
    radioBtns.input.checked === false;
}  

>>>>>>> Stashed changes
