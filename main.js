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
    changeView();
    mealToMake.innerText =  pickRandomRecipe(sides) + "!";
  } else if (mainDishRadio.checked) {
    changeView();
    mealToMake.innerText = pickRandomRecipe(mains) + "!";
  } else if(dessertRadio.checked){
    changeView();
    mealToMake.innerText = pickRandomRecipe(desserts) + "!";
  };
};

function changeView() {
  youShouldCook.style.display = 'flex';
  cookingPotImg.style.display = 'none';
}

function pickRandomRecipe(type) {
  var randomArrayIndex = Math.floor(Math.random()*type.length);
  return type[randomArrayIndex];
};
