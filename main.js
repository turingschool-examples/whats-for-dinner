//Arrays containing sides, main entrees, and desserts

var sides = [
  "Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"
]
var mains = [
  "Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza"
]
var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
]


//Add Query-Selectors
var sideRadial = document.querySelector('#js-side');
var mainDishRadial = document.querySelector('#js-main-dish');
var dessertRadial = document.querySelector('#js-dessert');
var entireMealRadial = document.querySelector('#js-entire-meal');
var cookButton = document.querySelector('#js-cook-btn');
var addRecipeButton = document.querySelector('#js-add-recipe-btn');

//Add Event-Listeners
cookButton.addEventListener('click', showDish)

//I'm going to check what dish is passed into this function
//then I'm going to return a random slot from the array matching the dish-type
//then I'm going to remove the pot img
//then I'm going to display the text!

//var dishType = the value of the radial button selected

function showDish(dishType){

}








function getRandomElement(array) {
  return array[getRandomIndex(array)]
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};