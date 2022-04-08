//Query Selector radio buttons

var sideButton = document.querySelector("#side");
var mainButton = document.querySelector("#mainDish");
var dessertButton = document.querySelector("#dessert");
var entireMealButton = document.querySelector("#entireMeal");

//Query selector other buttons

var cookButton = document.getElementById("letsCook");


//Dish arrays

var sidesArray = [
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

var mainsArray = [
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

var dessertArray = [
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

var radioArray = [
  sideButton,
  mainButton,
  dessertButton
]

//Event listeners and handlers


cookButton.addEventListener('click', checkRadioStatus);

function checkRadioStatus() {
  var sideDishStatus = document.getElementById('side');
  var mainDishStatus = document.getElementById('mainDish');
  var dessertStatus = document.getElementById('dessert');

  if (sideDishStatus.checked) {
    displaySide()
  } else if (mainDishStatus.checked) {
    displayMain()
  } else if (dessertStatus.checked) {
    displayDessert()
  }
}

//DOM display functions

function displaySide() {
document.querySelector('h4').innerHTML = `${randomSide}`;
document.querySelector('svg').style.display = "none";
document.querySelector('.selected-Dish').style.display = "block";
}

function displayMain() {
document.querySelector('h4').innerHTML = `${randomMain}`;
document.querySelector('svg').style.display = "none";
document.querySelector('.selected-Dish').style.display = "block";
}

function displayDessert() {
document.querySelector('h4').innerHTML = `${randomDessert}`;
document.querySelector('svg').style.display = "none";
document.querySelector('.selected-Dish').style.display = "block";
}




//Access random Element

var randomSide = sidesArray[Math.floor(Math.random() * sidesArray.length)];
var randomMain = mainsArray[Math.floor(Math.random() * mainsArray.length)];
var randomDessert = dessertArray[Math.floor(Math.random() * dessertArray.length)];
