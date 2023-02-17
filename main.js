var cookButton = document.querySelector('.cook-button')
var rightBox = document.querySelector('.right-box')
var sideButton = document.getElementById('sides')
var mainDishButton = document.getElementById('main-dish')
var dessertButton = document.getElementById('desserts')
var entireMealButton = document.getElementById('entire-meal')
var deleteButton = document.querySelector('.delete-meal')

var currentFood;
var randomMainDish = getRandomIndex(mains)
var randomSide = getRandomIndex(sides)
var randomDessert = getRandomIndex(desserts)

cookButton.addEventListener('click', displayFood)
deleteButton.addEventListener('click', deleteRecipe)

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  };

function displayFood(event) {
    event.preventDefault()
    var randomMainDish = getRandomIndex(mains)
    var randomSide = getRandomIndex(sides)
    var randomDessert = getRandomIndex(desserts)
    if (sideButton.checked) {
        currentFood = sides[randomSide]
    } else if (mainDishButton.checked) {
        currentFood = mains[randomMainDish]
    } else if (dessertButton.checked) {
        currentFood = desserts[randomDessert]
    } else if (entireMealButton.checked) {
        currentFood = `${mains[randomMainDish]} with a side of ${sides[randomSide]} and ${desserts[randomDessert]} for dessert!`
    }
    rightBox.innerHTML = `<h3><em>You should make:</em></h3><h4>${currentFood}</h4>`
}  

