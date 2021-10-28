var letsCookButton = document.querySelector('.lets-cook-button');
var potImage = document.querySelector('.pot-image')
var foodText = document.querySelector('.food-text')
var sideRadioButton = document.querySelector('.side-button')
var mainDishRadioButton = document.querySelector('.main-dish-button')
var dessertRadioButton = document.querySelector('.dessert-button')

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function displayRecipe() {
  if (sideRadioButton.checked === true) {
    var randomFoodItem = getRandomIndex(sides)
    foodText.innerText = randomFoodItem
  } else if (mainDishRadioButton.checked === true) {
    randomFoodItem = getRandomIndex(mainDishes)
    foodText.innerText = randomFoodItem
  } else if (dessertRadioButton.checked === true) {
    randomFoodItem = getRandomIndex(desserts)
    foodText.innerText = randomFoodItem
  }
  potImage.classList.add('hidden')
  foodText.classList.remove('hidden')
};




letsCookButton.addEventListener('click', displayRecipe)
