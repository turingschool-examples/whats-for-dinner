//////////// DOM ELEMENTS  ////////////
var sideButton = document.querySelector('#side');
var mainDishButton = document.querySelector('#main-dish');
var dessertButton = document.querySelector('#dessert');
//var entireMealButton = document.querySelector('#entire-meal');
var letsCookButton = document.querySelector('#lets-cook');
var cookpotView = document.querySelector('#cookpot-view');
var youShouldMakeView = document.querySelector('#you-should-make');
var formOutput = document.querySelector('#form-output');
var clearButton = document.querySelector('#clear');
var viewFavoritesButton = document.querySelector('.view-favs');
var addToFavoritesButton = document.querySelector('.add-favorite');
var homeButton = document.querySelector('.go-home');
var leftBox = document.querySelector('.whats-cooking');
var rightBox = document.querySelector('.right-box')
var favRecipesBox = document.querySelector('.show-fav-recipes')

//////////// VARIABLES ////////////


//////////// EVENT LISTENERS ////////////
letsCookButton.addEventListener('click', displayRandomFood)
clearButton.addEventListener('click', clearForm)
viewFavoritesButton.addEventListener('click', viewFavoritesPage)
addToFavoritesButton.addEventListener('click', addToFavorites)
homeButton.addEventListener('click', goHome)

//////////// FUNCTIONS AND EVENT HANDLERS ////////////
function randomFoods(foodType) {
  return foodType[Math.floor(Math.random()*foodType.length)]
}

function displayRandomFood() {
  event.preventDefault();
  cookpotView.classList.add('hidden');
  youShouldMakeView.classList.remove('hidden');
  if(sideButton.checked) {
    var randomSide = randomFoods(sides);
    formOutput.innerText = `${randomSide}!`
  } else if (mainDishButton.checked){
    var randomMain = randomFoods(mains)
    formOutput.innerText = `${randomMain}!`
  } else if (dessertButton.checked){
    var randomDessert = randomFoods(desserts)
    formOutput.innerText = `${randomDessert}!`
  }
}

function clearForm() {
  cookpotView.classList.toggle('hidden');
  youShouldMakeView.classList.toggle('hidden');
  mainDishButton.checked = false
  dessertButton.checked = false
  sideButton.checked = false
}

function viewFavoritesPage() {
  leftBox.classList.add('hidden');
  rightBox.classList.add('hidden');
  favRecipesBox.classList.remove('hidden');
  homeButton.classList.remove('hidden')

  //page should display all of their favorite recipes in the ul
  //need to add li elements
}

function addToFavorites() {
  //when addToFavoritesButton is clicked, the current recipe should be added to the favorites array


}

function goHome() {
  leftBox.classList.remove('hidden');
  rightBox.classList.remove('hidden');
  favRecipesBox.classList.add('hidden');
  homeButton.classList.add('hidden')
}

function removeFavorite() {
  //Users should be able to remove a recipe from their list of favorites, by clicking a button.
  //change the DOM and data model
  //need to add this button to the html
}
