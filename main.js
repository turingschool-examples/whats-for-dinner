var radio = document.querySelector('.meal')

var letsCookButton = document.querySelector('#letsCook')

letsCookButton.addEventListener('click', function(){
  createRecipe()
})

function createRecipe(meal){
  var recipe = new Recipe(meal)
  console.log('recipe: ', recipe)
  console.log('object into array: ', meal)
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
