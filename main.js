//global variables
var addRecipeB = document.querySelector(".add-recipe");
var form = document.querySelector("form");
var sideRadio = document.querySelector("#side-dish");
var mainRadio = document.querySelector("#main-dish");
var dessertRadio = document.querySelector("#dessert-dish");
var mealRadio =  document.querySelector("#entire-meal");
var formOutput = document.querySelector(".form-output");
var formResult = document.querySelector(".form-result");
var cookpotIcon = document.querySelector(".cookpot-icon");

//event listeners

form.addEventListener("submit", displayDish);
addRecipeB.addEventListener('click', openAddRecipeForm);


// functions and even handlers
//
function displayDish() {
  event.preventDefault();
  viewElement(formResult);
  hideElement(cookpotIcon);
    if (sideRadio.checked ) {
      displayRandomDish(sides)
      }
    else if (mainRadio.checked){
      displayRandomDish(mains)
      }
    else if (dessertRadio.checked) {
      displayRandomDish(desserts)
      }
};

function displayRandomDish(dishType){
  var dish = dishType[getRandomIndex(dishType)];
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

//
// var selectedDish;
// for (const radioButton of radioButtons) {
//   if (radioButton.checked) {
//     selectedDish = radioButton.value;
//   }
// }
  // // show the output:
  // output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;

//
// function displayRandomSide(){
//   var dish = sides[getRandomIndex(sides)];
//     formOutput.innerText = `${dish}!`
//     console.log(dish);
// }
//
// function displayRandomMain(){
//   var dish = mains[getRandomIndex(mains)];
//     formOutput.innerText = `${dish}!`
//     console.log(dish);
// }
//
// function displayRandomDessert() {
//   var dish = desserts[getRandomIndex(desserts)];
//     formOutput.innerText = `${dish}!`
//     console.log(dish);
// }
