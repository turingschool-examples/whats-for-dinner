// querySelector variables
// var randomSide = document.querySelector("#side");
// var randomMainDish = document.querySelector("#main");
// var randomDessert = document.querySelector("#dessert");
var letsCookButton = document.querySelector(".cook");
var results = document.querySelector(".results");
var mealResults = document.querySelector(".mealresults");
var removeCookBoxLogo = document.querySelector("#cookpot");


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
  "Hush Puppies",
];
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
  "Margarita Pizza",
];
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
  "Eclairs",
];

// addEventListener here
letsCookButton.addEventListener('click', removeLogo);



// functions & event handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// random Side, Main Dish, Dessert
function hideCookpot() {
  removeCookBoxLogo.classList.add("hidden");
}


function getCooking() {
    var radio = document.querySelector('input[type=radio]:checked');
    var randomMealIndex = getRandomIndex(foodsArrays[radio.value]);
    results.innerText = `You should make: `;
    mealResults.innerText = `${foodsArrays[radio.value][randomMealIndex]}!`;
}

function entireMeal() {
  var radio = document.querySelector('input[type=radio]:checked');
  var randomMealIndex = getRandomIndex(foodsArrays[radio.value]);
  results.innerText = `You should make: `;
  mealResults.innerText = `${foodsArrays[radio.sides][radio.mains][radio.desserts][randomMealIndex]}!`;
}


function removeLogo() {
  event.preventDefault();
  hideCookpot();
  getCooking();
  entireMeal();
}

var foodsArrays = {
  sides: sides,
  mains: mains,
  desserts: desserts,
  meal: meal,
}


// document.getElementById('#side').onclick = function() {
//     var radio = document.querySelector('input[type=radio]:checked');
//     radio.checked = true;
// }
