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
var suggestion = document.querySelector('h3')



// Event Listeners
cookButton.addEventListener('click', randomizeDish)

// Event Handerlers
function randomizeDish(e) {
e.preventDefault()
hide(potLogo)
reveal(suggestion)
reveal(dish)
return side.checked ? dish.innerText = randomizeIndex(sides)
 : mainDish.checked ? dish.innerText = randomizeIndex(mains)
 : dessert.checked ? dish.innerText = randomizeIndex(desserts) 
 : dish.innerText = `${randomizeIndex(sides)} with a side of ${randomizeIndex(mains)} and ${randomizeIndex(desserts)} for dessert!`
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
