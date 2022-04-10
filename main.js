//query selectors go here 🤡
//buttons
var btnAdd = document.querySelector('.add');
var btnSubmit = document.querySelector('.cook');
var radioVal = document.querySelector('input[name="food"]:checked');
var pot = document.querySelector('.cookpot');
var insertText = document.querySelector('.text');

//document.query each radio button
// var sides = document.querySelector()
// array list here

var sidesArr = [
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
];

var mainsArr = [
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
];

var dessertsArr = [
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
];





//event listeners go here 🤮
// btnAdd.addEventListener('click', randomFood)

btnSubmit.addEventListener('click', potHide);

//functions go here




//Really solid function to work with so here we are utilizing it again

function potHide() {
  event.preventDefault();
  pot.classList.remove('hidden');
  insertText.classList.add('hidden');
}



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function getRandSide() {
  var randSide = sidesArr[getRandomIndex(sidesArr)];
  return randSide;
}

function getRandMain() {
  var randMain = mainsArr[getRandomIndex(mainsArr)];
  return randMain;
}

function getRandDessert() {
  var randDess = dessertsArr[getRandomIndex(dessertsArr)];
  return randDess;
}



//functions to randomize all the food
