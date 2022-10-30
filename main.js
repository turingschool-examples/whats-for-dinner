var letsCookButton = document.querySelector('.cook-button')
var potImage = document.querySelector('.image')
var chosenOption = document.querySelector('.chosen-dish')
var radioButtons = document.querySelectorAll('input[name="choose-one"]')
var favoriteButton = document.querySelector('#favorite-button')
var viewFavoritesButton = document.querySelector('#view-favorites')
var dishOption = document.querySelector('.dish-option')
var selectBox = document.querySelector('.select-box')
var dishBox = document.querySelector('.dish-box')
var favoritesWindow = document.querySelector('.favorites-screen')
var savedFavoritesSection = document.querySelector('.saved-favorites')
var returnToMainButton = document.querySelector('.return-main')

var sides = [
  'Fresh green beans',
  'Sauteed zucchini and squash',
  'Fruit salad',
  'Roasted veggies',
  'Garden salad',
  'Mashed potatoes',
  'White rice',
  "Mexican corn off the cob"
];

var mainDishes = [
  'Pesto Pasta with Chicken',
  'Stuffed Green Peppers',
  'Rib Eye Roast',
  'Deep Fried Turkey',
  'Meatball Stroganoff',
  'Meatloaf',
  'Rigatoni Florentine',
  'Bourbon Glazed Ham'
]

var desserts = [
  'Chocolate chip cookies',
  'Apple pie',
  'Cheesecake',
  'Pecan pie',
  'Carrot cake',
  'Ice cream',
  'Boston cream pie',
  'Banana pudding',
]

var favorites = [];

letsCookButton.addEventListener('click', generateRandomOption)
letsCookButton.addEventListener('click', changeDisplay)
chosenOption.addEventListener('click', function(event){
  saveToFavorites(event)
})
viewFavoritesButton.addEventListener('click', showFavoritesWindow)
viewFavoritesButton.addEventListener('click', showSavedFavorites)
returnToMainButton.addEventListener('click', returnToMain)

function getRandomIndex(array) {
  var newRandomIndex = Math.floor(Math.random() * array.length);
  return array[newRandomIndex]
}

function changeDisplay(){
  potImage.classList.add('hidden')
  chosenOption.classList.remove('hidden')
  viewFavoritesButton.classList.remove('hidden')
}

function generateRandomOption(){
  var selectedDish;
  chosenOption.innerHTML = ''
  for (let i = 0; i < radioButtons.length; i++){
    if (radioButtons[i].checked){
      selectedDish = radioButtons[i].value
    }
  }
  if(selectedDish === 'Sides'){
    chosenOption.innerHTML +=
    `<em class="you-should-make">You Should Make:</em>
     <h1 class="dish-option">${getRandomIndex(sides)}!</h1>
     <button class="save-dish">Favorite</button>
    `
  } else if (selectedDish === 'main-dishes'){
    chosenOption.innerHTML +=
    `<em class="you-should-make">You Should Make:</em>
     <h1 class="dish-option">${getRandomIndex(mainDishes)}!</h1>
     <button class="save-dish">Favorite</button>
    `
  } else if (selectedDish === 'dessert'){
    chosenOption.innerHTML +=
    `<em class="you-should-make">You Should Make:</em>
     <h1 class="dish-option">${getRandomIndex(desserts)}!</h1
     <button class="save-dish">Favorite</button>
    `
  }
}

function saveToFavorites(event){
  if (event.target.classList.contains('save-dish')){
    favorites.push(event.target.previousElementSibling.innerText)
    alert('Saved to Favorites')
  }
}

function showFavoritesWindow(){
  selectBox.classList.add('hidden')
  dishBox.classList.add('hidden')
  viewFavoritesButton.classList.add('hidden')
  favoritesWindow.classList.remove('hidden')
}

function showSavedFavorites(){
  savedFavoritesSection.innerHTML = ''
  for (var i = 0; i < favorites.length; i++){
    savedFavoritesSection.innerHTML += `
     <h2>${favorites[i]}</h2>
    `
  }
}

function returnToMain(){
  selectBox.classList.remove('hidden')
  dishBox.classList.remove('hidden')
  viewFavoritesButton.classList.remove('hidden')
  favoritesWindow.classList.add('hidden')
}
