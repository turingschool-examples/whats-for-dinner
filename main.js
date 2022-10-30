//**;* ${Data Model} *;**//
var sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caesar Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];
var mains = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empenadas", "Chicken Fried Rice", "Cheet Pan Fajitas", "Margarita Pizza"];
var desserts = ["Apple pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"];

//**;* ${Query Selectors} *;**/
// var addARecipeButton = document.querySelector(".name");
// var clearButton = document.querySelector();
var sidesRadioButton = document.querySelector("#Side");
var mainsRadioButton = document.querySelector("#Main Dish");
var dessertsRadioButton = document.querySelector("#Dessert");
var entireMealRadioButton = document.querySelector("#Entire Meal");
var letsCookButton = document.querySelector("#cookButton");

//**;* ${Event Listeners} *;**//
sidesRadioButton.addEventListener('click', getRandomSide());
mainsRadioButton.addEventListener('click', getRandomMain());
dessertsRadioButton.addEventListener('click', getRandomDessert());

// letsCookButton.addEventListener('click', showRandomDishText());

//**;* ${Functions} *;**//
    //sides//
function getRandomIndex(sides) {
    return Math.floor(Math.random() * sides.length);
}
var randomSideNumber = getRandomIndex(sides);
var randomSide = sides[randomSideNumber];

function getRandomSide() {

}
    //mains//
function getRandomIndex(mains) {
        return Math.floor(Math.random() * mains.length);
    }
var randomMainNumber = getRandomIndex(mains);
var randomMain = mains[randomMainNumber];
    
function getRandomMain() {
    
}
    //desserts//
function getRandomIndex(desserts) {
        return Math.floor(Math.random() * desserts.length);
    }
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
var potContents = docuemnt.querySelector('.back');

// function showCookPotIcon() {
// //add front
//     potIcon.classList.remove('hidden');
// //hide back
//     potContents.classList.add('hidden');
// }

// function showMealCardRandomText() {
//     potIcon.classList.add('.hidden');
//     potContents.classlist.remove('.hidden');
// }
//add back
//hide front
function youShouldMake() {
    //var thing to be interpolalted
    //if event happens
    //show interpolated text `You should make: ${}!` or use .innerText?
}