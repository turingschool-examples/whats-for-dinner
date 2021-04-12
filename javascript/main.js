// Variables
  // Buttons
var cookBtn= document.querySelector('#cook-btn')
var clearBtn = document.querySelector('#clear-btn')
var recipeBtn = document.querySelector('#recipe-btn')
var loginBtn = document.querySelector('#login-btn')
var favoriteBtn = document.querySelector('#favorite-btn')
var viewFavoriteBtn = document.querySelector('#view-favorites-btn')
var deleteBtn = document.querySelector('#x-btn')
var homeBtn = document.querySelector('#home-btn')
  // Meal container
var mealContainer = document.querySelector('#meal-container')
      //radio buttons
var side = document.querySelector('#side')
var mainDish = document.querySelector('#main-dish')
var dessert = document.querySelector('#dessert')
var entireMeal = document.querySelector('#entire-meal')
  // Recipe Container
var recipeContainer = document.querySelector('#recipe-container')
var potLogo = document.querySelector('#pot')
var dish = document.querySelector('#dish')
var suggestion = document.querySelector('h3')
  // Add Recipe Form
var footer = document.querySelector('footer')
var addBtn = document.getElementById('add-btn')
var recipeName = document.getElementById('recipe-name')
var recipeType = document.getElementById('recipe-type')
  // Login Container 
var loginContainer = document.querySelector('#login-container')
var user = document.querySelector('#user')
var username = document.querySelector('#username')
var welcomeMsg = document.querySelector('#welcome')
  // Favorite Container
var recipeBox = document.querySelector('#favorites-container')
var faved = document.querySelector('#faved')
var miniContainer = document.querySelector('#mini-container')
var favoritesContainer = document.querySelector('#favorites-container')
  // Miscellaneous
var deleteAlert = document.querySelector('#removed-alert')

// Event Listeners
cookBtn.addEventListener('click', randomizeDish)
clearBtn.addEventListener('click', clearPage)
recipeBtn.addEventListener('click', showFooter)
addBtn.addEventListener('click', addRecipe)
loginBtn.addEventListener('click', showEverything)
favoriteBtn.addEventListener('click', favorite)
viewFavoriteBtn.addEventListener('click',viewFavorites)
homeBtn.addEventListener('click', viewHome)
favoritesContainer.addEventListener('dblclick', function(e) {deleteFavorite(e)})
deleteBtn.addEventListener('click', deleteRecipe)

// Event Handerlers
function randomizeDish() {
event.preventDefault()
if (!side.checked && !mainDish.checked && !dessert.checked && !entireMeal.checked) {
  hide(potLogo)
  show(dish)
} else if (side.checked && mainDish.checked && dessert.checked) {
  hide(deleteAlert)
  fadeAway(deleteAlert)
} else {
  hide(potLogo)
  hide(deleteAlert)
  show(dish)
  show(clearBtn)
  show(favoriteBtn)
  show(suggestion)
  show(deleteBtn)
  if (entireMeal.checked) {
    hide(deleteBtn)
    } 
  return side.checked ? dish.innerText = randomizeIndex(sides)
  : mainDish.checked ? dish.innerText = randomizeIndex(mains)
  : dessert.checked ? dish.innerText = randomizeIndex(desserts) 
  : entireMeal.checked ? dish.innerText = `${randomizeIndex(sides)} with a side of ${randomizeIndex(mains)} and ${randomizeIndex(desserts)} for dessert!` 
  : console.log('No Radio Selected')
  } 
}

function randomizeIndex(dishList) {
  return dishList[Math.floor(Math.random() * dishList.length)];
}

function clearPage() {
  if (dish.innerText !== 'Pick a dish!') {
  show(potLogo)
  hide(clearBtn)
  hide(suggestion)
  hide(favoriteBtn)
  hide(dish)
  }
}

function addRecipe(e) {
  e.preventDefault()
  if (recipeName.value === "") {
    recipeName.value = "Please fill this out"
  }
  if (recipeType.value.toLowerCase() === "side" ||
      recipeType.value.toLowerCase() === "main dish" ||
      recipeType.value.toLowerCase() === "dessert" 
      && recipeName.value !== ""
  ) {
    hide(potLogo)
    show(clearBtn)
    show(suggestion)
    show(dish)
    show(favoriteBtn)
    dish.innerText = recipeName.value
  }
  if (recipeType.value.toLowerCase() === "side") {
    sides.push(recipeName.value)
  } else if (recipeType.value.toLowerCase() === "main dish") {
    mains.push(recipeName.value)
  } else if (recipeType.value.toLowerCase() === "dessert") {
    desserts.push(recipeName.value)
  }
}

var click = 0
function showFooter() {
  show(footer) 
  click++
  if (click > 1) {
    click = 0
    hide(footer)
  }
}

function showEverything(e) {
  e.preventDefault()
  if(username.value) {
    recipeContainer.classList.add('id')
    show(mealContainer)
    show(recipeContainer)
    show(recipeBtn)
    show(cookBtn)
    show(potLogo)
    hide(loginContainer)
    user.innerText = username.value
    show(welcomeMsg) 
    show(viewFavoriteBtn)
  }
loginBtn.value = "Put your name in the form please, please!"
}

function favorite() {
  favoritedRecipes.push(dish.innerText)
  favoritesContainer.innerHTML += `<div id="mini-container" class="flex">
  <i id="x" class="x-btn fas fa-times fa-2x"></i>
  <p class="faved">${dish.innerText}</p>
</div>`
}



function deleteFavorite(e) {
  e.target.closest('div').remove()
}

function deleteRecipe() {
  hide(deleteBtn)
  hide(favoriteBtn)
  hide(suggestion)
  hide(clearBtn)
  hide(dish)
  show(potLogo)
  fadeAway(deleteAlert)
  show(deleteAlert)
  return side.checked ? sides.splice(sides.indexOf(dish.innerText), 1) 
  :  mainDish.checked ? mains.splice(mains.indexOf(mainDish.innerText), 1)
  :  dessert.checked ? desserts.splice(desserts.indexOf(dessert.innerText), 1)
  : console.log('No Radio Selected')
}




// Helpers
function hide(e) {
  e.classList.add('hidden')
}

function show(e) {
  e.classList.remove('hidden')
}

function fadeAway(e) {
  e.classList.toggle('fadeaway')
}

// View Functions
function viewFavorites() {
  hide(mealContainer)
  hide(recipeContainer)
  hide(viewFavoriteBtn)
  hide(recipeBtn)
  hide(cookBtn)
  hide(potLogo)
  hide(footer)
  show(recipeBox)
  show(homeBtn)
  show(welcomeMsg)
  welcomeMsg.innerText = 'Favorites'
}

function viewHome() {
  show(mealContainer)
  show(recipeContainer)
  show(recipeBtn)
  show(cookBtn)
  show(potLogo)
  show(viewFavoriteBtn)
  hide(homeBtn)
  hide(favoritesContainer)
  hide(welcomeMsg)
}