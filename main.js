var letsCookButton = document.querySelector('#lets-cook');

var cookpotView = document.querySelector('.cookpot-view');

var dishViewHidden = document.querySelector('.dish-view.hidden');


letsCookButton.addEventListener('click', populateDish);




function populateDish() {
  cookpotView.className = 'cookpot-view hidden';
  dishViewHidden.className = 'dish-view';
};
