var sideRadio = document.querySelector('#side')
var mainRadio = document.querySelector('#mainDish')
var dessertRadio = document.querySelector('#dessert')

var crockpot = 

var letsCookButton = document.querySelector('#letsCook')

letsCookButton.addEventListener('click', function(){
  createRecipe()
})
function displayRecipe(recipe){

}
function createRecipe(){
  var recipe;
  if(sideRadio.checked){
    recipe = getRandomElement(meal.desserts)
    displayRecipe(recipe)
  } else if(mainRadio.checked){
    recipe = getRandomElement(meal.desserts)
    displayRecipe(recipe)
  } else if (dessertRadio.checked){
    recipe = getRandomElement(meal.desserts)
    displayRecipe(recipe)
  }
}
function getRandomElement(array) {
  return array[getRandomIndex(array)]
};
// function createRecipe(){
//   var recipe = new Recipe(
//     getRandomIndex(meal.sides),
//     getRandomIndex(meal.mains),
//     getRandomIndex(meals.desserts)
//   )
//     console.log(recipe)
//   }

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
