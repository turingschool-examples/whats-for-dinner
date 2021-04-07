//Query Selectors
var sideRadio = document.querySelector('#side')
var mainRadio = document.querySelector('#mainDish')
var dessertRadio = document.querySelector('#dessert')

var crockpot = document.querySelector('div')

var letsCookButton = document.querySelector('#letsCook')

//Event Listeners
letsCookButton.addEventListener('click', function(){
  createRecipe()
})

//Event handlers
function displayRecipe(recipe){
  crockpot.innerHTML = `<div>
  <p>You should make:</p>
  <h2>${recipe}</h2>
  </div>`
}
function createRecipe(){
  if(sideRadio.checked){
    recipe = getRandomElement(meal.sides)
    displayRecipe(recipe)
  } else if(mainRadio.checked){
    recipe = getRandomElement(meal.mains)
    displayRecipe(recipe)
  } else if (dessertRadio.checked){
    recipe = getRandomElement(meal.desserts)
    displayRecipe(recipe)
  }
}

function getRandomElement(array) {
  return array[getRandomIndex(array)]
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
