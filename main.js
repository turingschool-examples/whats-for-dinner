//global variables
var letsCookB = document.querySelector(".lets-cook");
var addRecipeB = document.querySelector(".add-recipe");
var form = document.querySelector("form");
// var log = document.querySelector("#log");
// var radioButtons = document.querySelectorAll("input[name="dish"]");

var sideRadio = document.querySelector("#side-dish");
var mainRadio = document.querySelector("#main-dish");
var dessertRadio = document.querySelector("#dessert-dish");
var mealRadio =  document.querySelector("#entire-meal");

var formOutput = document.querySelector(".form-output");
var formResult = document.querySelector(".form-result");
//var clearB = document.querySelector('.clear');
var cookpotIcon = document.querySelector(".cookpot-icon");



//event listeners
// letsCookB.addEventListener('click', displayRecipe)
// functions and event handlers

form.addEventListener("submit", displayDish);

//
function displayDish() {
  event.preventDefault();
  viewElement(formResult);
  hideElement(cookpotIcon);
  console.log("form has been submitted")
    if (sideRadio.checked ) {
       displayRandomSide()

     }
    else if (mainRadio.checked){
        displayRandomMain()
    }
    else if (dessertRadio.checked) {
        displayRandomDessert()
    }
};

//
// var selectedDish;
// for (const radioButton of radioButtons) {
//   if (radioButton.checked) {
//     selectedDish = radioButton.value;
//   }
// }
  // // show the output:
  // output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;


function displayRandomSide(){
  var dish = sides[getRandomIndex(sides)];
    formOutput.innerText = `${dish}!`
    console.log(dish);
}

function displayRandomMain(){
  var dish = mains[getRandomIndex(mains)];
    formOutput.innerText = `${dish}!`
    console.log(dish);
}

function displayRandomDessert() {
  var dish = desserts[getRandomIndex(desserts)];
    formOutput.innerText = `${dish}!`
    console.log(dish);
}

function viewElement(classToEdit) {
  classToEdit.classList.remove("hidden");
}

function hideElement(classToEdit) {
  classToEdit.classList.add("hidden");
}
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
