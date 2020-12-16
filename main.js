var sideRadio = document.querySelector('#side');
var mainDishRadio = document.querySelector('#mainDish');
var dessertRadio = document.querySelector('#dessert');
var letsCookButton = document.querySelector('.lets-cook');


letsCookButton.addEventListener('click', suggestRecipe);

function suggestRecipe() {
  if (sideRadio.checked) {
    pickRandomRecipe(sides)
  } else if (mainDishRadio.checked) {
    pickRandomRecipe(mains)
  } else if(dessertRadio.checked){
    pickRandomRecipe(desserts)
  }

  event.preventDefault();
}

function pickRandomRecipe(type) {
  var randomArrayIndex = Math.floor(Math.random()*type.length)
  var suggestedMeal = type[randomArrayIndex]
}
