var btnAdd = document.querySelector('.add');
var btnSubmit = document.querySelector('.cook');
var radioVal = document.querySelectorAll('input[type="radio"]');
var pot = document.querySelector('.cookpot');
var insertText = document.querySelector('.text-hidden');
var boxImage = document.querySelector('.box');
var theSide = document.querySelector('.made-meals');



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


btnSubmit.addEventListener('click', potHide);


function getCheckedProperty() {
  var output = '';

  for (var i = 0; i < radioVal.length; i++) {
    if (radioVal[i].checked) {
      if (radioVal[i].value === 'Side') {
        output = getRandSide();
      } else if (radioVal[i].value === 'Main Dish') {
        output = getRandMain();
      } else if (radioVal[i].value === "Dessert") {
        output = getRandDessert();
      } else {
        output = getRandMain() + " with a side of " + getRandSide() + " and " + getRandDessert() + " for dessert!";
      }
    }
  }
  getFood(output);
}

function potHide() {
  event.preventDefault();
  pot.classList.add('hidden');
  insertText.classList.remove('hidden');
  getCheckedProperty();
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

function getFood(btnSide) {
  theSide.innerHTML = `You should make: <br>${btnSide}`;
  boxImage.classList.add('hidden');
  insertText.classList.remove('hidden');
}
