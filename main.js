var cookBtn = document.querySelector('.lets-cook-button');
var potImg = document.querySelector('.pot');
var makeText = document.querySelector('You-Should-Make');

cookBtn.addEventListener('click', function() {
  hide(potImg)
  show(makeText)
});

function showFood() {

}

function hide(element) {
  element.classList.add('hide')
}
