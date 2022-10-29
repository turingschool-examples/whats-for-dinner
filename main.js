// arrays for all three types of dishes
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
]

// button variables
var sideDishesButton = document.querySelector("#side-dish");
var mainDishesButton = document.querySelector("#main-dish");
var dessertDishesButton = document.querySelector("#dessert-dish");
var mealsButton = document.querySelector("#entire-meal");
var letsCookButton = document.querySelector("#lets-cook-button");
var addRecipesButton = document.querySelector("#add-recipe-button");

// other variables
var cookpotImage = document.querySelector(".cookpot-image");
var recipeBox = document.querySelector(".recipe");
var recipeText = document.querySelector(".recipe-text");

// event listeners
letsCookButton.addEventListener("click", getRecipe)

// functions
function getRandomizedRecipe(array) {
    var index = Math.floor(Math.random() * array.length);
    return array[index]
}

function hideOrShowImage(hide, show) {
    hide.classList.add("hidden");
    show.classList.remove("hidden");
}

function getRecipe() {
    hideOrShowImage(cookpotImage, recipeBox);
    var newRecipe = '';
    if (sideDishesButton.checked) {
      newRecipe = getRandomizedRecipe(sides);
    } else if (mainDishesButton.checked) {
      newRecipe = getRandomizedRecipe(mains);
    } else if (dessertDishesButton.checked) {
      newRecipe = getRandomizedRecipe(desserts);
    }
    recipeText.innerText = newRecipe;
}
