var sideDishes = ['Mashed Potatoes', 'Green Beans','Pasta', 'oranges', 'candy']
// mainDish array
// dessert array
// entire meal array

var cookButton = document.querySelector('#cook-button')
var sideButton = document.querySelector('#side')
var dishButton = document.querySelector('#main-dish')
var dessertButton = document.querySelector('#dessert')
var crockPot = document.querySelector('.cookPot')
var mainDish = document.querySelector('#entire-meal')

var renderHere = document.querySelector('.renderHere')

var inputArray = [
  sideButton,
  dishButton,
  dessertButton,
  mainDish
]

window.onload = function() {
  cookButton.disabled = true
}

sideButton.addEventListener('click', checkEnableCookButton)
dishButton.addEventListener('click', checkEnableCookButton)
dessertButton.addEventListener('click', checkEnableCookButton)
mainDish.addEventListener('click', checkEnableCookButton)
cookButton.addEventListener('click', hideLogo)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function hideLogo() {
  crockPot.classList.add('hidden')
  renderDish()
}

function checkEnableCookButton(event) {
  function checkInputValue(checkboxInput) {
    if (checkboxInput.checked === true) {
      cookButton.disabled = false
    }
  }
  inputArray.forEach(checkInputValue)

  if (sideButton.checked === false &&
    dishButton.checked === false &&
    dessertButton.checked === false &&
    mainDish.checked === false) {
      cookButton.disabled = true
  }

  disableOthercheckboxes(event)
}

function disableOthercheckboxes(event) {
  inputArray.forEach(function (input) {
    if(input !== event.target) {
      input.checked = false
    }
  })
}

function renderDish() {
  if (sideButton.checked === true) {
    var sideIndex = getRandomIndex(sideDishes)
    renderHere.innerText = sideDishes[sideIndex]
  }
  // if (mainDish)
  // if (dessert)
  // if (entire-meal)
}
