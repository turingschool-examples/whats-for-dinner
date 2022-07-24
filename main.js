var cookPotContainer = document.querySelector(".Cook-pot-container")
var letsCookButton = document.querySelector("button")

var currentMeal



letsCookButton.addEventListener(`click`, showRandomMeal)

class Meal{
  constructor(sides, mains, desserts){
    this.sides = sides
    this.mains = mains
    this.desserts = desserts
  }
}

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
  if (selectedMeal === `mains`){
    currentMeal = getRandomMeal(mains)
    displayMeals()
  }
  if(selectedMeal === `desserts`){
    currentMeal = getRandomMeal(desserts)
    displayMeals()
  }
}

 function displayMeals(){
  cookPotContainer.innerHTML = " "
  cookPotContainer.innerHTML += `
  <p> You should make: </p>
  <br>
  <h1> ${currentMeal} </h1> `
}
