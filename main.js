// recipe Button
var recipeButton = document.querySelctor("#recipe-button")
// Radio Buttons (section1)
var entireRadio = document.querySelector("entire-meal")
var sideRadio = document.querySelector("#side")
var mainRadio = document.querySelctor("#main-dish")
var dessertRadio = document.querySelector("#dessert")
// let's cook Button (section1)
var letsCookButton = document.querySelector("#lets-cook-button"
// clear button (section 2)
var clearButton = document.querySelector("#clear")
// hidden values (section 2)
var shouldMake = document.querySelctor(".should-make-text-hidden")
var results = document.querySelctor(".random-meal-text-hidden")
var cookPotImg = document.querySelctor(".cookPotImg")
//store for items in array
var randomMeal = {
  sides: sides,
  mains: mains,
  desserts: desserts,
  entireMeal: [sides, mains, desserts]
}

//radio button checking



// event listeners
letsCookButton.addEventLister('click', () => {
  var selected = document.querySelector('input[type="radio"]:checked')

});

clearButton.addEventListener('click',)




// random number generator
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}



// functions


function hidden() {


}

function notHidden() {

}
