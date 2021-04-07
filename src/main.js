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

var displayCard = document.querySelector('.display-card') // query selector for display-card

var hideSection = document.querySelector('.main-section')
var hideFavorite = document.querySelector('.favorite-section')

//Event Listeners
letsCookButton.addEventListener('click', createRecipe);
addRecipeButton.addEventListener('click', displayForm);
addNewButton.addEventListener('click', addRecipe)

displayCard.addEventListener('click', addFavorite)

window.addEventListener('load', pageLoad)

//Event handlers
function pageLoad(){
  console.log('page loaded')
  // hideFavorite.classList.add('hidden')
}

function display(){
  console.log('display function test')
  hideSection.innerHTML = `<div>
  <p ondblclick="remove(this)">${meal.favoritedRecipes}</p>
  <button class="go-home" id="goHome">Home</button>
  </div>
  `
  hideFavorite.classList.remove('hidden')
}

function addFavorite(recipe){
  // console.log('recipe variable outside if statement: ', recipe)
  if(event.target.className === 'favoriteBtn') {
    // console.log('recipe variable INSIDE if statement: ', recipe)
    // meal.favoritedRecipes.push('test meal push')
    console.log(recipe)
  } else if(event.target.className === 'viewFavorites'){
    display(recipe)
    console.log('view favorites buton clicked')
  }
}

function displayRecipe(recipe){
  event.preventDefault()
  displayCard.innerHTML = `
  <p>You should make:</p>
  <h2>${recipe}</h2>
  <button class="favoriteBtn" id="favorite">Favorite</button>
  <button class="viewFavorites" id="viewFavorites">View Favorites</button> 
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
function remove(el) {
  var element = el;
  element.remove();
}