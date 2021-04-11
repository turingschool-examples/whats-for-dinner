// Variables
  // Buttons
var cookBtn= document.querySelector('.cook-btn')
  // Hide/Show
var potLogo = document.querySelector('.pot')
var dish = document.querySelector('.dish')
  //radio
var side = document.querySelector('.side')
var mainDish = document.querySelector('.main-dish')
var dessert = document.querySelector('.dessert')
var entireMeal = document.querySelector('.entire-meal')
 // Dish
var suggestion = document.querySelector('h3')
var clearBtn = document.querySelector('.clear-btn')
var recipeBtn = document.querySelector('.recipe-btn')
  // Add Recipe Form
var createBtn = document.getElementById('add-btn')
var recipeName = document.getElementById('recipe-name')
var recipeType = document.getElementById('recipe-type')
var footer = document.querySelector('footer')
var loginBtn = document.querySelector('#login-btn')
// to sort
var recipeContainer = document.querySelector('.recipe-container')
var mealContainer = document.querySelector('#meal-container')
var loginContainer = document.querySelector('#login-container')
var user = document.querySelector('#user')
var username = document.querySelector('#username')
var welcomeMsg = document.querySelector('#welcome')
var favoriteBtn = document.querySelector('#favorite-btn')
var viewFavoriteBtn = document.querySelector('.view-favorites-btn')
var recipeBox = document.querySelector('.favorites-container')
var faved = document.querySelector('.faved')
var miniContainer = document.querySelector('.mini-container')
var favoritesContainer = document.querySelector('.favorites-container')
var homeBtn = document.querySelector('.home-btn')
var deleteBtn = document.querySelector('#x-btn')


// Event Listeners
cookBtn.addEventListener('click', randomizeDish)
clearBtn.addEventListener('click', clearPage)
recipeBtn.addEventListener('click', showFooter)
createBtn.addEventListener('click', addRecipe)
loginBtn.addEventListener('click', showEverything)
favoriteBtn.addEventListener('click', favorite)
viewFavoriteBtn.addEventListener('click',viewFavorites)
homeBtn.addEventListener('click', viewHome)
favoritesContainer.addEventListener('click', function(e) {
  deleteFavorite(e)
})
deleteBtn.addEventListener('click', deleteRecipe)



// Event Handerlers
function randomizeDish() {
 event.preventDefault()
if (!sides.checked && !mainDish.checked && !dessert.checked && !entireMeal.checked) {
  hide(potLogo)
  show(dish)
} else {
hide(potLogo)
show(dish)
show(clearBtn)
show(favoriteBtn)
show(suggestion)
show(deleteBtn)
return side.checked ? dish.innerText = randomizeIndex(sides)
 : mainDish.checked ? dish.innerText = randomizeIndex(mains)
 : dessert.checked ? dish.innerText = randomizeIndex(desserts) 
 : entireMeal.checked ? dish.innerText = `${randomizeIndex(sides)} with a side of ${randomizeIndex(mains)} and ${randomizeIndex(desserts)} for dessert!` 
 : console.log('No Radio Selected')
  } 
}


function hide(e) {
  e.classList.add('hidden')
}

function show(e) {
  e.classList.remove('hidden')
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
  if (recipeName.value === "") {
    recipeName.value = "Please fill this out"
  }
  e.preventDefault()
  if (recipeType.value.toLowerCase() === "side" ||
      recipeType.value.toLowerCase() === "main dish" ||
      recipeType.value.toLowerCase() === "dessert" ||
      recipeType.value.toLowerCase() === "entire meal" 
      && recipeName.value !== ""
  ) {
    hide(potLogo)
    show(clearBtn)
    show(suggestion)
    show(dish)
    show(favoriteBtn)
    dish.innerText = recipeName.value
  }
}

function showFooter() {
  show(footer)
}

function showEverything(e) {
  e.preventDefault()
  // if(username.value) {
    recipeContainer.removeAttribute('id')
    show(mealContainer)
    show(recipeContainer)
    show(recipeBtn)
    show(cookBtn)
    show(potLogo)
    hide(loginContainer)
    user.innerText = username.value
    show(welcomeMsg) 
    show(viewFavoriteBtn)
  // }
// loginBtn.value = "Put your name in the form please, please!"
}

function favorite() {
  favoritedRecipes.push(dish.innerText)
  favoritesContainer.innerHTML += `<div class="mini-container flex">
  <i id="x" class="x-btn fas fa-times fa-2x"></i>
  <p class="faved">${dish.innerText}</p>
</div>`
}

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
  welcomeMsg.innerText = 'Favorites'
}

function viewHome() {
  show(mealContainer)
  show(recipeContainer)
  show(recipeBtn)
  show(cookBtn)
  show(potLogo)
  show(welcomeMsg) 
  show(viewFavoriteBtn)
  hide(loginContainer)
  hide(homeBtn)
  hide(favoritesContainer)
}

function deleteFavorite(e) {
  e.target.closest('div').remove()
}

function deleteRecipe() {
  recipeContainer.target.closest('.dish').remove()
}