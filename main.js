var cookBtn = document.querySelector('.lets-cook-button');
var potImg = document.querySelector('.dinner-box');
var makeText = document.querySelector('.dinner-box2');
var foodSuggestion = document.querySelector('.size');
var allFood = document.querySelectorAll('.dish');

cookBtn.addEventListener('click', function() {
  hide(potImg)
  show(makeText)
  specificFood()
}, {once: false}); //can only click once

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// function random(dish) {
//   foodSuggestion.innerText = dish[getRandomIndex(dish)]
//   console.log(allFood);
// }

function hide(element) {
  element.classList.add('hide')
}

function show(element) {
  element.classList.remove('hide')
}

function specificFood() {
  var specificSide = document.getElementById('side-dish') // access id when user clicks
  var specificMain = document.getElementById('main-dish')
  var specificDessert = document.getElementById('dessert-dish')
  var specificEntire = document.getElementById('entire-meal')
    if (specificSide.checked === true) {
      foodSuggestion.innerText = side[getRandomIndex(side)]
    } else if (specificMain.checked === true) {
      foodSuggestion.innerText = main[getRandomIndex(main)]
    } else if (specificDessert.checked === true) {
      foodSuggestion.innerText = dessert[getRandomIndex(dessert)]
    } else if (specificEntire.checked === true) {
      foodSuggestion.innerHTML = `${main[getRandomIndex(main)]} with a side of ${side[getRandomIndex(side)]} and ${dessert[getRandomIndex(dessert)]}!`
    }
  }
