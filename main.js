var sideRadio = document.querySelector('#side');
var mainDishRadio = document.querySelector('#mainDish');
var dessertRadio = document.querySelector('#dessert');
var letsCookButton = document.querySelector('.lets-cook');
var mealToMake = document.querySelector('#suggested-dish');
var cookingPotImg= document.querySelector('.cooking-pot');
// var radioButtons = document.getElementsByName("dish");
var youShouldCook= document.querySelector('.what-to-cook');
var suggestedDish= document.querySelector('#suggested-dish');

letsCookButton.addEventListener('click', suggestRecipe);

function suggestRecipe() {
  event.preventDefault();
  if (sideRadio.checked) {
    youShouldCook.style.display = 'block';
    cookingPotImg.style.display = 'none';
    mealToMake.innerText =  pickRandomRecipe(sides) + "!";
  } else if (mainDishRadio.checked) {
    youShouldCook.style.display = 'block';
    cookingPotImg.style.display = 'none';
    mealToMake.innerText = pickRandomRecipe(mains) + "!";
  } else if(dessertRadio.checked){
    youShouldCook.style.display = 'block';
    cookingPotImg.style.display = 'none';
    mealToMake.innerText = pickRandomRecipe(desserts) + "!";
  };
};



function pickRandomRecipe(type) {
  var randomArrayIndex = Math.floor(Math.random()*type.length);
  return type[randomArrayIndex];
};
