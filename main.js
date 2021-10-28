var letsCookButton = document.querySelector('.lets-cook-button');
var potImage = document.querySelector('.pot-image')
var foodText = document.querySelector('.food-text')
var sideRadioButton = document.querySelector('.side-button')

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

function displayRecipe() {
  if (sideRadioButton.checked === true) {
    var randomSide = getRandomIndex(sides)
    foodText.innerText = randomSide
  }
  potImage.classList.add('hidden')
  foodText.classList.remove('hidden')

};


letsCookButton.addEventListener('click', displayRecipe)
