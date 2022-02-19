

var letsCookButton = document.querySelector('#lets-cook');

var cookpotView = document.querySelector('.cookpot-view');
var dishViewHidden = document.querySelector('.dish-view.hidden');

var displayedDish = document.querySelector('.dish-result');

letsCookButton.addEventListener('click', populateDish);



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


function populateDish() {
  if (document.getElementById('side').checked) {
    dishResult = sides[getRandomIndex(sides)];
  } else if (document.getElementById('main').checked) {
    dishResult = mains[getRandomIndex(mains)];
  } else if (document.getElementById('dessert').checked) {
    dishResult = desserts[getRandomIndex(desserts)];
  };
  cookpotView.className = 'cookpot-view hidden';
  dishViewHidden.className = 'dish-view';
  displayedDish.innerText = `${dishResult}!`;
};
