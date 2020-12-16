var sideRadio = document.querySelector('#side');
var mainDishRadio = document.querySelector('#mainDish');
var dessertRadio = document.querySelector('#dessert');
var letsCookButton = document.querySelector('.lets-cook');


letsCookButton.addEventListener('click', suggestRecipe);

function suggestRecipe() {

  console.log(sideRadio, mainDish, dessertRadio);
  console.log(sideRadio.checked)
  event.preventDefault();
}
