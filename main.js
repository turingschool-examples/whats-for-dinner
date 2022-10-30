//**;* ${Data Model} *;**//
var sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caesar Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];
var mains = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empenadas", "Chicken Fried Rice", "Cheet Pan Fajitas", "Margarita Pizza"];
var desserts = ["Apple pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"];

//**;* ${Query Selectors} *;**/
// var addARecipeButton = document.querySelector(".name");
// var clearButton = document.querySelector();
var sidesRadioButton = document.querySelector("#Side");
var mainsRadioButton = document.querySelector("#Main");
var dessertsRadioButton = document.querySelector("#Dessert");
var entireMealRadioButton = document.querySelector("#Entire Meal");
var letsCookButton = document.querySelector("#cookButton");

//**;* ${Event Listeners} *;**//
sidesRadioButton.addEventListener('click', getRandomSide());
mainsRadioButton.addEventListener('click', getRandomMain());
dessertsRadioButton.addEventListener('click', getRandomDessert());
letsCookButton.addEventListener('click', youShouldMake());

//**;* ${Functions} *;**//
    //sides//
function getRandomIndex(food) {
    return Math.floor(Math.random() * food.length);
}
var randomSideNumber = getRandomIndex(sides);
var randomSide = sides[randomSideNumber];

function getRandomSide() {
    return randomSide;
}
    //mains//
var randomMainNumber = getRandomIndex(mains);
var randomMain = mains[randomMainNumber];
    
function getRandomMain() {
    
}
    //desserts//
var randomDessertNumber = getRandomIndex(desserts);
var randomDessert = desserts[randomDessertNumber];
    
function getRandomDessert() {
    
}
    // //entire meal//
    // function getRandomIndex(sides) {
    //     return Math.floor(Math.random() * sides.length);
    // }
    // var randomSideNumber = getRandomIndex(sides);
    // var randomSide = sides[randomSideNumber];
    
    // function showRandomSide() {
    
    // }
//**;* card flip *;**//
var potIcon = document.querySelector('.front');
var potContents = document.querySelector('.back');

function showCookPotIcon() {
//add front
    potIcon.classList.remove('hidden');
//hide back
    potContents.classList.add('hidden');
}

function showMealCardRandomText() {
    potIcon.classList.add('.hidden');
    potContents.classlist.remove('.hidden');
}
//add back
//hide front

//**;* right card recipe details *;**//
var youShouldText = document.querySelector('.message');
function youShouldMake() {
    showMealCardRandomText();
    youShouldText.innerText = `You should make: ${randomSide}!`
}