//query selectors go here 🤡
//buttons
var btnAdd = document.querySelector('.add');
var btnSubmit = document.querySelector('.cook');
var radioVal = document.querySelectorAll('input[type="radio"]');
var pot = document.querySelector('.cookpot');
var insertText = document.querySelector('.text-hidden');

// var radioVal = document.getElementsByName('food');
var boxImage = document.querySelector('.box');

var theSide = document.querySelector('.generated-meals');



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
// btnSubmit.addEventListener('click', getRandSide);



btnSubmit.addEventListener('click', potHide);
// btnSubmit.addEventListener('click', getFood);
//functions go here
// btnSubmit.addEventListener('click', console.log(radioVal));




//Hide the page

function getCheckedProperty() {
  var output = '';

  for (var i = 0; i < radioVal.length; i++) {
    if (radioVal[i].checked) {
      console.log(radioVal[i].value);
      if (radioVal[i].value === 'Side') {
          output = getRandSide()
          getFood(output);
      } else if (radioVal[i].value === 'Main Dish') {
        output = getRandMain()
        getFood(output);
      } else if (radioVal[i].value === "Dessert") {
        output = getRandDessert();
        getFood(output);
      }
    }
  }
}

function potHide() {
  event.preventDefault();
  pot.classList.add('hidden');
  insertText.classList.remove('hidden');
  getCheckedProperty();
}

//randomize food functions

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



//workable functions for buttons

function getFood(btnSide) {
  // var btnSide = getRandSide();
  theSide.innerText = `${btnSide}`;
  boxImage.classList.add('hidden');
  insertText.classList.remove('hidden');

}
