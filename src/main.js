//Query Selectors
var sideRadio = document.querySelector('#side')
var mainRadio = document.querySelector('#mainDish')
var dessertRadio = document.querySelector('#dessert')

var footer = document.querySelector('#foot')
var crockpot = document.querySelector('div')

var main = document.querySelector('main')

var recipeType = document.querySelector('#recipeType')
var recipeName = document.querySelector('#recipeName')

var addRecipeButton = document.querySelector('#addRecipe')
var letsCookButton = document.querySelector('#letsCook')
var addNewButton = document.querySelector('#addNew')
var viewFavoritesButton = document.querySelector('#viewFavorites')
var favoriteButton = document.querySelector('#favorite')

//Event Listeners
letsCookButton.addEventListener('click', createRecipe);
addRecipeButton.addEventListener('click', displayForm);
addNewButton.addEventListener('click', addRecipe)
// viewFavoritesButton.addEventListener('click', addFavorite, false);

//Event handlers
function addFavorite(){

}

function displayRecipe(recipe){
  event.preventDefault()
  crockpot.innerHTML = `<div>
  <p>You should make:</p>
  <h2>${recipe}</h2>
  <button id="favorite">Favorite</button>
  <button id="viewFavorites">View Favorites</button>
  </div>`
}

function addRecipe(){
  event.preventDefault()
  
  if(recipeType.value === 'Side'){
    meal.sides.push(recipeName.value)
  } else if (recipeType.value === 'Main Dish'){
    meal.mains.push(recipeName.value)
  } else if (recipeType.value === 'Dessert'){
    meal.desserts.push(recipeName.value)
  } else {
    var type = recipeType.value
    meal.type = [recipeName.value]
  }
  displayRecipe(recipeName.value)
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
function displayForm(){
  footer.classList.toggle('hidden')
}

function getRandomElement(array) {
  return array[getRandomIndex(array)]
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
