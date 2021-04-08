
//////////// DOM ELEMENTS  ////////////
var sideButton = document.querySelector('#side')
var mainDishButton = document.querySelector('#main-dish')
var dessertButton = document.querySelector('#dessert')
//var entireMealButton = document.querySelector('#entire-meal')
var letsCookButton = document.querySelector('#lets-cook')
var cookpotView = document.querySelector('#cookpot-view')
var youShouldMakeView = document.querySelector('#you-should-make')
var formOutput = document.querySelector('#form-output')
var clearButton = document.querySelector('#clear')

//////////// VARIABLES ////////////


//////////// EVENT LISTENERS ////////////
letsCookButton.addEventListener('click', displayRandomFood)
clearButton.addEventListener('click', clearForm)

//////////// FUNCTIONS AND EVENT HANDLERS ////////////
function randomFoods(foodType) {
  return foodType[Math.floor(Math.random()*foodType.length)]
}

function displayRandomFood() {
  event.preventDefault();
  cookpotView.classList.add('hidden');
  youShouldMakeView.classList.remove('hidden');
  if(sideButton.checked) {
    var randomSide = randomFoods(sides);
    formOutput.innerText = `${randomSide}!`
  } else if (mainDishButton.checked){
    var randomMain = randomFoods(mains)
    formOutput.innerText = `${randomMain}!`
  } else if (dessertButton.checked){
    var randomDessert = randomFoods(desserts)
    formOutput.innerText = `${randomDessert}!`
  }
}

function clearForm() {
  cookpotView.classList.toggle('hidden');
  youShouldMakeView.classList.toggle('hidden');
  mainDishButton.checked = false
  dessertButton.checked = false
  sideButton.checked = false
}
