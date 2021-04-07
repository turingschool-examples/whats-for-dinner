//Query Selectors
var sideRadio = document.querySelector('#side')
var mainRadio = document.querySelector('#mainDish')
var dessertRadio = document.querySelector('#dessert')

var footer = document.querySelector('#foot')

var main = document.querySelector('main')

var recipeType = document.querySelector('#recipeType')
var recipeName = document.querySelector('#recipeName')

var addRecipeButton = document.querySelector('#addRecipe')
var letsCookButton = document.querySelector('#letsCook')
var addNewButton = document.querySelector('#addNew')
var viewFavoritesButton = document.querySelector('#viewFavorites')



var favoriteBtn = document.querySelector('#favorite') //query selector for button added to DOM through displayRecipe()
var rightArticle = document.querySelector('.right') // query selector for parent of display-card
// rightArticle.addEventListener('click', addFavorite) // eventlistener for container of parent of display-card
//event.target to see where teh click is
// if event.target.classname === 'favorite){
  //do this
  
var hideSection = document.querySelector('.main-section')
window.addEventListener('load', pageLoad)
function pageLoad(){
  console.log('page loaded')
}




hideSection.classList.remove('hidden')


  //Event Listeners
  letsCookButton.addEventListener('click', createRecipe);
  addRecipeButton.addEventListener('click', displayForm);
  addNewButton.addEventListener('click', addRecipe)
  
  var displayCard = document.querySelector('.display-card') // query selector for display-card
  displayCard.addEventListener('click', addFavorite)

//Event handlers
function addFavorite(recipe){
  hideSection.classList.toggle('hidden')
  console.log('before reassignment: ', recipe)
  var newRecipe = recipe
  console.log('after reassignemnt: ', newRecipe)
  if(event.target.className === 'favoriteBtn') {
    console.log('inside if: ', newRecipe)
  } else if(event.target.className === 'addNewButton'){
    console.log('addNewButton clicked')
  }
}

function displayRecipe(recipe){
  event.preventDefault()
  displayCard.innerHTML = `
  <p>You should make:</p>
  <h2>${recipe}</h2>
  <button class="favoriteBtn" id="favorite">Favorite</button>
  <button class="addNewButton" id="viewFavorites">View Favorites</button> 
  `
  addFavorite(recipe)
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
