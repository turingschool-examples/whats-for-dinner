

var letsCookButton = document.querySelector('#lets-cook');

var cookpotView = document.querySelector('.cookpot-view');
var dishViewHidden = document.querySelector('.dish-view.hidden');

var displayedDish = document.querySelector('.dish-result');

letsCookButton.addEventListener('click', populateDish);



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


function populateDish() {

  cookpotView.classList.add('hidden');
  dishViewHidden.classList.remove('hidden');

  if (document.getElementById('side').checked) {
    displayedDish.innerText = `${sides[getRandomIndex(sides)]}!`
  } else if (document.getElementById('main').checked) {
    displayedDish.innerText = `${mains[getRandomIndex(mains)]}!`
  } else if (document.getElementById('dessert').checked) {
    displayedDish.innerText = `${desserts[getRandomIndex(desserts)]}!`
  } else if (document.getElementById('entire').checked) {
    displayedDish.innerText = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`;
    displayedDish.classList.add('entire-meal')
  }
};
