// Variables
  // Buttons
var cookButton = document.querySelector('.cook-btn')
  // Hide/Show
var potLogo = document.querySelector('.pot')
var dish = document.querySelector('.dish')
  //radio
var side = document.querySelector('.side')
var mainDish = document.querySelector('.main-dish')
var dessert = document.querySelector('.dessert')
var entireMeal = document.querySelector('.entire-meal')



// Event Listeners
cookButton.addEventListener('click', randomizeDish)

// Event Handerlers
function randomizeDish(e) {
e.preventDefault()
hide(potLogo)
reveal(dish)
if (side.checked) {
  dish.innerText = randomizeIndex(sides)
  } else if (mainDish.checked) {
    dish.innerText = randomizeIndex(mains)
  } else if (dessert.checked) {
    dish.innerText = randomizeIndex(desserts)
  }
}

function hide(e) {
  e.classList.add('hidden')
}

function reveal(e) {
  e.classList.remove('hidden')
}

function randomizeIndex(dishList) {
  return dishList[Math.floor(Math.random() * dishList.length)];
}
