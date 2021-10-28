var sides = [
'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
]

var mains = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
]

var desserts = [
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
]

var letsCookButton = document.querySelector('#lets-cook')
var cookpot = document.querySelector('.cookpot-view')
var mealView = document.querySelector('.meal-view')
var meal = document.querySelector('.meal')

function getRandomIndex(array) {
  return Math.floor(Math.random() * (array.length))
}

randomSide = sides[getRandomIndex(sides)]
randomMain = mains[getRandomIndex(mains)]
randomDessert = desserts[getRandomIndex(desserts)]

letsCookButton.addEventListener('click', hidePot)

function hidePot() {
  event.preventDefault();
  cookpot.classList.add('hidden')
  displayMeal()
}

function displayMeal() {
  mealView.classList.remove('hidden')
  var mealsFormValue = document.querySelector('input[name="dishes"]:checked').value;
  console.log(mealsFormValue)
  if (mealsFormValue === 'side') {
    meal.innerText = randomSide
  } else if (mealsFormValue === 'mainDish') {
    meal.innerText = randomMain
  } else if (mealsFormValue === 'dessert') {
    meal.innerText = randomDessert
  }
}
