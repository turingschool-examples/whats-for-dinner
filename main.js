var cookBtn = document.querySelector('.lets-cook-button');
var potImg = document.querySelector('.dinner-box');
var makeText = document.querySelector('.dinner-box2');
var foodSuggestion = document.querySelector('.foodInput');
var allFood = document.querySelectorAll('.dish');
var specificSide = document.getElementById('side-dish')
var specificMain = document.getElementById('main-dish')
var specificDessert = document.getElementById('dessert-dish')
var specificEntire = document.getElementById('entire-meal')

cookBtn.addEventListener('click', function() {
  specificFood()
}, {once: false});

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function reveal() {
  hide(potImg)
  show(makeText)
  specificFood()
}

function nothingSelected() {
  show(potImg)
  hide(makeText)
}

function hide(element) {
  element.classList.add('hide')
}

function show(element) {
  element.classList.remove('hide')
}

function specificFood() {
    if (specificSide.checked === true) {
      foodSuggestion.innerText = side[getRandomIndex(side)]
      reveal()
    } else if (specificMain.checked === true) {
      foodSuggestion.innerText = main[getRandomIndex(main)]
      reveal()
    } else if (specificDessert.checked === true) {
      foodSuggestion.innerText = dessert[getRandomIndex(dessert)]
      reveal()
    } else if (specificEntire.checked === true) {
      foodSuggestion.innerHTML = `${main[getRandomIndex(main)]} with a side of ${side[getRandomIndex(side)]} and ${dessert[getRandomIndex(dessert)]}!`
      reveal()
    } else {
      nothingSelected()
    }
  }
