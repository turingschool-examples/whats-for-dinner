var sideRadio = document.querySelector('#side');
var mainDishRadio = document.querySelector('#mainDish');
var dessertRadio = document.querySelector('#dessert');
var letsCookButton = document.querySelector('.lets-cook');
var mealToMake = document.querySelector('.suggested-dish');
var cookingPotImg= document.querySelector('.cooking-pot')

letsCookButton.addEventListener('click', suggestRecipe);

function suggestRecipe() {
  event.preventDefault();
  if (sideRadio.checked) {
    cookingPotImg.style.display = 'none'
    mealToMake.innerText = pickRandomRecipe(sides)
  } else if (mainDishRadio.checked) {
    cookingPotImg.style.display = 'none'
    mealToMake.innerText = pickRandomRecipe(mains)
  } else if(dessertRadio.checked){
    cookingPotImg.style.display = 'none'
    mealToMake.innerText = pickRandomRecipe(desserts)
  }
}

function pickRandomRecipe(type) {
  var randomArrayIndex = Math.floor(Math.random()*type.length)
  return type[randomArrayIndex]
}
