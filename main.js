//create variables for side, main, and desesert dishes
//add classlist for .hidden .add
//make pot image hidden when let's cook button is selected
//functions for when each of the radio button is selected
//make it possible to only select one radio button at a time
//create an event listener for each of the radio buttons when Let's cook button is selected
//create css classlist for checked and unchecked radio buttons.
var side = [
  "mashed potatoes",
  "mac & cheese",
  "veggies",
  "white rice",
  "brown rice",
  "baked brusell sprouts",
  "green beans",
  "corn",
  "baked potato",
  "ceasar salad",
  "fruit salad"
]

var mainDish = [
  "turky and gravy",
  "steak",
  "fried chicken",
  "grilled chicken",
  "lemon baked salmon",
  "grilled shrimp",
  "bacon wrapped scallop"
]

var dessert = [
  "lemon cake",
  "chantilly cake",
  "tiramisu cake",
  "mochi donut",
  "macaroons"
]


/* <button class="add-recipe-button">ADD A RECIPE</button> */
var letsCookButton = document.querySelector('.lets-cook-button')
var radioButtons = document.querySelectorAll('input[name="options"]')
var cookPotImage = document.querySelector('.cook-pot-img')
var viewDishGenerated = document.querySelector('.dish-generated')
var itemGenerated = document.querySelector('.item-generated')

letsCookButton.addEventListener('click', renderRandomDish)

function getRandomIndex(array) {
  return Math.floor(Math.random() * (array.length))
}

function renderRandomDish() {
  randomSide = side[getRandomIndex(side)]
  randomMainDish = mainDish[getRandomIndex(mainDish)]
  randomDessert = dessert[getRandomIndex(dessert)]
  cookPotImage.classList.add('hidden')
  viewDishGenerated.classList.remove('hidden')
  itemGenerated.innerText = randomSide.toUpperCase(randomSide)+"!"
  console.log(randomSide)
}
