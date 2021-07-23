// var cookBtn = document.querySelector('#lets-cook-btn');
// var textBox = document.querySelector('#result');

// cookBtn.addEventListener('click', getRadioValue)

// function getRadioValue() {
//   var radio = document.querySelector('meal-radio');
//   event.preventDefault();
//   for (i = 0; i < radio.length; i++){
//     if(radio[i].checked) 
//     document.getElementById("result").innerHTML = radio[i].value;
//     }
    
//   }

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
 "Margarita Pizza",
]

var desserts = [
 "Apple Pie",
 "Lemon Meringue Pie",
 "Black Forest Cake",
 "Banana Bread",
 "Peach Cobbler",
 "Cheesecake",
 "Funfetti Cake",
 "Flan",
 "Macarons",
 "Chocolate Cupcakes",
 "Pavlova",
 "Pumpkin Pie",
 "Key Lime Pie",
 "Tart Tatin",
 "Croissants",
 "Eclairs",
]


var result = document.querySelector('p');
var randomSide = sides[getRandomIndex(sides)];
var randomMain = mains[getRandomIndex(mains)];
var randomDessert = desserts[getRandomIndex(desserts)];

function fn1 () {
  event.preventDefault();
  var sideRadio = document.getElementById("side-radio");
  var mainRadio = document.getElementById("main-radio");
  var dessertRadio = document.getElementById("dessert-radio");

  if (sideRadio.checked === true) {
    result.innerText = randomSide;
} else if (mainRadio.checked === true) {
    result.innerText = randomMain;
 } else if (dessertRadio.checked === true) {
    result.innertText = randomDessert;
 }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
