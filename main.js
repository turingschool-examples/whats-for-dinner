//create variables for side, main, and desesert dishes
//add classlist for .hidden .add
//make pot image hidden when let's cook button is selected
//functions for when each of the radio button is selected
//make it possible to only select one radio button at a time
//create an event listener for each of the radio buttons when Let's cook button is selected
//create css classlist for checked and unchecked radio buttons.


/* <button class="add-recipe-button">ADD A RECIPE</button> */
var letsCookButton = document.querySelector('.lets-cook-button')
var radioButtons = document.querySelectorAll('input[name="options"]')
var cookPotImage = document.querySelector('.cook-pot-img')
var viewDishGenerated = document.querySelector('.dish-generated')

letsCookButton.addEventListener('click', renderRandomDish)

function renderRandomDish() {
cookPotImage.classList.add('hidden')
viewDishGenerated.classList.remove('hidden')
}
