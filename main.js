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



//query selectors
var cookButton = document.querySelector('button');
var showDish = document.querySelector('div');
var radioButtons = document.getElementsByName('meal')

//event listeners
cookButton.addEventListener('click', checkRadioButtons)




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
    } else {
        console.log('NOPE')
    }
}

function getRandomDish(dishes) {
    var randomIndex = Math.floor(Math.random() * dishes.length)
    var randomDish = dishes[randomIndex]
    console.log(randomDish)
};







