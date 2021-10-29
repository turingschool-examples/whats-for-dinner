var letsCookButton = document.querySelector('.lets-cook-button');
var potImage = document.querySelector('.pot-image')
var foodText = document.querySelector('.food-text')
var sideRadioButton = document.querySelector('.side-button')
var mainDishRadioButton = document.querySelector('.main-dish-button')
var dessertRadioButton = document.querySelector('.dessert-button')
var entireMealRadioButton = document.querySelector('.entire-meal-button')
var favoriteButton = document.querySelector('.favorite-button')

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function displayRecipe() {
    foodText.innerHTML = ``
  if (sideRadioButton.checked === true) {
    foodText.innerText = getRandomIndex(sides)
  } else if (mainDishRadioButton.checked === true) {
    foodText.innerText = getRandomIndex(mainDishes)
  } else if (dessertRadioButton.checked === true) {
    foodText.innerText = getRandomIndex(mainDishes)
  } else if (entireMealRadioButton.checked === true) {
    foodText.innerHTML +=
    `<p class="you-should-make">You Should Make:</p>
     <p class="dishes">${getRandomIndex(mainDishes)} with a side of ${getRandomIndex(sides)} and ${getRandomIndex(desserts)} for dessert!
    </p>
    `
  }
  potImage.classList.add('hidden')
  foodText.classList.remove('hidden')
  favoriteButton.classList.remove('hidden')

};




letsCookButton.addEventListener('click', displayRecipe)
