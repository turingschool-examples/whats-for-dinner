var cookBtn = document.querySelector('.lets-cook-button');
var potImg = document.querySelector('.dinner-box');
var makeText = document.querySelector('.dinner-box2');

cookBtn.addEventListener('click', function() {
  hide(potImg)
  show(makeText)
});

function showFood() {

}

function hide(element) {
  element.classList.add('hide')
}

function show(element) {
  element.classList.remove('hide')
}
