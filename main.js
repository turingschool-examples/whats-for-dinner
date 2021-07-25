// var cookingPot.querySelector()
// we are going to have 2 helper functions
// 1 function is going to be "hide" and the other is going to be "show"
// google - javascrip - "classList.add" and "classList.remove"
// google - css = display: none
// google - event.default


// querySelector ⬇️
var sideDishInput = document.querySelector('#sideDish');
var mainDishInput = document.querySelector('#mainDish');
var dessertsInput = document.querySelector('#desserts');
var entireMealInput = document.querySelector('#entireMeal');
var letsCookBtn = document.querySelector('#letsCookBtn');
var cookPotImage = document.querySelector('img');
var displayRecipe = document.querySelector('#displayRecipe');
var youShouldMakeText = document.querySelector('#recipeText');
var deleteDishBtn = document.querySelector('#removeRecipe');


// EventListeners ⬇️
letsCookBtn.addEventListener('click', getDish);
deleteDishBtn.addEventListener('click', deleteDish)



// Functions ⬇️
function getRandomFoodIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function getDish() {
  event.preventDefault();
  if(sideDishInput.checked === true) {
    displayRecipe.innerText = sides[getRandomFoodIndex(sides)];
  } else if(mainDishInput.checked === true) {
    displayRecipe.innerText = mains[getRandomFoodIndex(mains)];
  } else if(dessertsInput.checked === true) {
    displayRecipe.innerText = desserts[getRandomFoodIndex(desserts)];
  } else if(entireMealInput.checked === true) {
    displayRecipe.innerText = `${mains[getRandomFoodIndex(mains)]}, with a side of ${sides[getRandomFoodIndex(sides)]} and ${desserts[getRandomFoodIndex(desserts)]} for dessert!`
  }
  letsCookBtn.disabled = true;
  hideImg();
  showRecipe();
}


function hideImg() {
  cookPotImage.classList.add('hidden');
}



function showRecipe() {
  youShouldMakeText.classList.remove('hidden');
  displayRecipe.classList.remove('hidden');
  deleteDishBtn.classList.remove('hidden');
}

function deleteDish() {
  youShouldMakeText.classList.add('hidden');
  displayRecipe.classList.add('hidden');
  cookPotImage.classList.remove('hidden');
  deleteDishBtn.classList.add('hidden');
  letsCookBtn.disabled = false;
}

// if(sideDishRadioBtn.checked) {
//   // statment of sidedish array will come here
// }
// var letsCookBtn = document.querySelector('#letsCookBtn');
//
// letsCookBtn.addEventListener('click', test);
//
// var test1 = document.querySelector('#test1')
//
// function test() {
//   event.preventDefault();
//   sideDishRadioBtn.value;
//   console.log(sideDishRadioBtn.value);
//   console.log("It Works!", test1.value);
// }
