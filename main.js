var cookButton = document.querySelector('#cook-button')
// var sideButton = document.querySelector()
// var dishButton = document.querySelector()
// var dessertButton = document.querySelector()
var crockPot = document.querySelector('.cookPot')
var results = document.querySelector('.results')



cookButton.addEventListener('click', showRecipe)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showRecipe() {
  console.log('it works')
  crockPot.classList.add('hidden')
}
