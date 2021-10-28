var letsCookButton = document.querySelector('.lets-cook-button');
var potImage = document.querySelector('.pot-image')
var foodText = document.querySelector('.food-text')
var sideRadioButton = document.querySelector('.side-button')
var mainDishRadioButton = document.querySelector('.main-dish-button')
var dessertRadioButton = document.querySelector('.dessert-button')
var entireMealRadioButton = document.querySelector('.entire-meal-button')


function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function displayRecipe() {
  if (sideRadioButton.checked === true) {
    // var randomFoodItem = getRandomIndex(sides)
    foodText.innerText = getRandomIndex(sides)
  } else if (mainDishRadioButton.checked === true) {
    randomFoodItem = getRandomIndex(mainDishes)
    foodText.innerText = randomFoodItem
  } else if (dessertRadioButton.checked === true) {
    randomFoodItem = getRandomIndex(desserts)
    foodText.innerText = randomFoodItem
  } else if (entireMealRadioButton.checked === true) {
    foodText.innerText = `You Should Make: ${getRandomIndex(mainDishes)} with a side of ${getRandomIndex(sides)} and ${getRandomIndex(desserts)} for dessert!`
  }
  potImage.classList.add('hidden')
  foodText.classList.remove('hidden')
};




letsCookButton.addEventListener('click', displayRecipe)
