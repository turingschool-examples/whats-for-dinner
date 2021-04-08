
//right box displays a random dish from that array
//cookpot icon disappears

//////////// DOM ELEMENTS  ////////////
var sideButton = document.querySelector('#side')
var mainDishButton = document.querySelector('#main-dish')
var dessertButton = document.querySelector('#dessert')
//var entireMealButton = document.querySelector('#entire-meal')
var letsCookButton = document.querySelector('#lets-cook')
var cookpotView = document.querySelector('#cookpot-view')
var youShouldMakeView = document.querySelector('#you-should-make')
var formOutput = document.querySelector('#form-output')

//////////// VARIABLES ////////////


//////////// EVENT LISTENERS ////////////
letsCookButton.addEventListener('click', displayRandomFood)

//////////// FUNCTIONS AND EVENT HANDLERS ////////////
function displayRandomFood() {
  event.preventDefault();
  cookpotView.classList.toggle('hidden');
  youShouldMakeView.classList.toggle('hidden');
  if(sideButton.checked=== true) {
    var randomSide = randomFoods(sides);
    formOutput.innerText = `${randomSide}!`
  } else if (mainDishButton.checked === true){
    var randomMain = randomFoods(mains)
    formOutput.innerText = `${randomMain}!`
  } else if (dessertButton.checked === true){
    var randomDessert = randomFoods(desserts)
    formOutput.innerText = `${randomDessert}!`
  }
}

function randomFoods(foodType) {
  return foodType[Math.floor(Math.random()*foodType.length)]
}
