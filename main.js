var addRecipeB = document.querySelector(".add-recipe");
var form = document.querySelector("form");
var sideRadio = document.querySelector("#side-dish");
var mainRadio = document.querySelector("#main-dish");
var dessertRadio = document.querySelector("#dessert-dish");
var otherRadio =  document.querySelector("#added-dish");
var addedDishes = document.querySelector(".added-dish");
var formOutput = document.querySelector(".form-output");
var formResult = document.querySelector(".form-result");
var cookpotIcon = document.querySelector(".cookpot-icon");
var footer = document.querySelector("footer");
var addNewB = document.querySelector(".add-new");
var newDishType = document.querySelector(".user-input-type");
var newDish = document.querySelector(".user-input-dish");
var clear = document.querySelector(".clear");
var recipeForm = document.querySelector(".random-recipe-form");
var newForm = document.querySelector(".add-new-form");


form.addEventListener("submit", displayDish);
addRecipeB.addEventListener('click', showAddRecipeForm);
addNewB.addEventListener('click', addRecipe);
clear.addEventListener('click', clearResult);


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
    else if (otherRadio.checked) {
      displayRandomDish(otherDishes)
      }

};

function displayRandomDish(dishType){
  var dish = dishType[getRandomIndex(dishType)];
    formOutput.innerText = `${dish}!`
}

function showAddRecipeForm() {
   viewElement(footer);
}

function addRecipe() {
  event.preventDefault();
  saveRecipe();
  displayRecipe();
}

function saveRecipe() {
  if (newDishType.value.includes('ide')) {
    sides.unshift(newDish.value);
  }
  else if (newDishType.value.includes('ain')) {
    mains.unshift(newDish.value);
  }
  else if (newDishType.value.includes('essert')) {
    desserts.unshift(newDish.value);
  }
  else {
    otherDishes.unshift(newDish.value);
    viewElement(addedDishes)
  }
}

function displayRecipe() {
  formOutput.innerText = `${newDish.value}!`
  hideElement(cookpotIcon);
  viewElement(formResult);
  hideElement(footer);

}

function clearResult(){
  recipeForm.reset();
  hideElement(formResult);
  viewElement(cookpotIcon);
  newForm.reset();
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
