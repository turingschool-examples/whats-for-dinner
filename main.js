var sideRadioBtn = document.getElementById('sideRadioBtn')
var mainDishRadioBtn = document.getElementById('mainDishRadioBtn')
var dessertRadioBtn = document.getElementById('dessertRadioBtn')
var entireMealRadioBtn = document.getElementById('entireMealRadioBtn')
var letsCookBtn = document.querySelector('.lets-cook-btn')
var cookpotImage = document.querySelector('.cookpot-image')
var recipeOption = document.querySelector('.results-box')
var deleteButton = document.querySelector('.deleteBtn')
var recipeForm = document.querySelector('.new-recipe-form')
var randomDish = document.querySelector('.randomDish')
var messageBox = document.querySelector('.message-box')

var sides = [
  'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies',
]

var mains = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza',
]

var desserts = [
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs',
]

var currentRecipe
var entireMeal = []

letsCookBtn.addEventListener('click', displayRecipe)
deleteButton.addEventListener('click', deleteRecipe)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function displayRecipe() {
  
  var sideDish = getRandomIndex(sides)
  var mainDish = getRandomIndex(mains)
  var dessertDish = getRandomIndex(desserts)
  cookpotImage.classList.add('hidden')
  messageBox.classList.remove('hidden')
  if (sideRadioBtn.checked) {
      currentRecipe = `${sides[sideDish]}!`
  } else if (mainDishRadioBtn.checked) {
      currentRecipe = `${mains[mainDish]}!`
  } else if (dessertRadioBtn.checked) {
      currentRecipe = `${desserts[dessertDish]}!`
  } else if (entireMealRadioBtn.checked) {
      currentRecipe = `${mains[mainDish]} with a side of ${sides[sideDish]} and ${desserts[dessertDish]} for dessert!`
      entireMeal.push(currentRecipe)
  }
  randomDish.innerText = ''
  randomDish.innerText += currentRecipe
}

function deleteRecipe() {
  messageBox.classList.add('hidden')
  cookpotImage.classList.remove('hidden')
  var sideDelete = sides.indexOf(currentRecipe)
  var mainDelete = mains.indexOf(currentRecipe)
  var dessertDelete = desserts.indexOf(currentRecipe)
  var mealDelete = entireMeal.indexOf(currentRecipe)
  console.log(sideDelete)
  if (sideDelete >= -1) {
    sides.splice(sideDelete,1)
  } else if (mainDelete >= -1) {
    mains.splice(mainDelete,1)
  } else if (dessertDelete >= -1) {
    desserts.splice(dessertDelete,1) 
  } else if (mealDelete >= -1) {
    entireMeal.splice(mealDelete,1)
  }
  alert('This recipe has been deleted!')
}





