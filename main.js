var cookPotContainer = document.querySelector(".Cook-pot-container")
var letsCookButton = document.querySelector("button")

var currentMeal
var side
var main
var dessert

letsCookButton.addEventListener(`click`, showRandomMeal)

function getRandomMeal(array) {
  var printArray = Math.floor(Math.random() * array.length);
  return array[printArray]
}

function showRandomMeal() {
  var selectedMeal = document.querySelector(`input[name = meal]:checked`).value
  if (selectedMeal === `sides`) {
    currentMeal = getRandomMeal(sides)
    displayMeals()
  }
  if (selectedMeal === `mains`) {
    currentMeal = getRandomMeal(mains)
    displayMeals()
  }
  if (selectedMeal === `desserts`) {
    currentMeal = getRandomMeal(desserts)
    displayMeals()
  }
  if (selectedMeal === `entire`) {
    side = getRandomMeal(sides);
    main = getRandomMeal(mains);
    dessert = getRandomMeal(desserts);
    displayEntireMeal()
  }
}

function displayMeals() {
  cookPotContainer.innerHTML = " "
  cookPotContainer.innerHTML += `
    <p> You should make: </p>
    <h1 class ="mealDisplay"> ${currentMeal}!</h1> `
}

function displayEntireMeal() {
  cookPotContainer.innerHTML = " "
  cookPotContainer.innerHTML += `
    <p> You should make: </p>
    <h1 class ="mealDisplay"> ${main} with a side of ${side} and ${dessert} for dessert!</h1> `
}
