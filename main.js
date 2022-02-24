var letsCookButton = document.querySelector('#lets-cook-button');
var clearButton = document.querySelector('#clear-button')
var cookpotView = document.querySelector('.cookpot-view');
var dishViewHidden = document.querySelector('.dish-view.hidden');
var displayedDish = document.querySelector('.dish-result');


letsCookButton.addEventListener('click', populateDish);
clearButton.addEventListener('click', clearDish);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function populateDish() {
  if (document.getElementById('side').checked) {
    displayedDish.innerText = `${sides[getRandomIndex(sides)]}!`
    displayedDish.classList.remove('entire-meal')
    cookpotView.classList.add('hidden');
    dishViewHidden.classList.remove('hidden');
  } else if (document.getElementById('main').checked) {
    displayedDish.innerText = `${mains[getRandomIndex(mains)]}!`
    displayedDish.classList.remove('entire-meal')
    cookpotView.classList.add('hidden');
    dishViewHidden.classList.remove('hidden');
  } else if (document.getElementById('dessert').checked) {
    displayedDish.innerText = `${desserts[getRandomIndex(desserts)]}!`
    displayedDish.classList.remove('entire-meal')
    cookpotView.classList.add('hidden');
    dishViewHidden.classList.remove('hidden');
  } else if (document.getElementById('entire').checked) {
    displayedDish.innerText = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`;
    displayedDish.classList.add('entire-meal')
    cookpotView.classList.add('hidden');
    dishViewHidden.classList.remove('hidden');
  } else {
    alert("Pick an option!")
  }
};

function clearDish() {
  dishViewHidden.classList.add('hidden')
  cookpotView.classList.remove('hidden')
};
