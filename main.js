var cookButton = document.querySelector('.cook-button')
var rightBox = document.querySelector('.right-box')
var sideButton = document.getElementById('sides')
var mainDishButton = document.getElementById('main-dish')
var dessertButton = document.getElementById('desserts')
var entireMealButton = document.getElementById('entire-meal')
var deleteButton = document.querySelector('.delete-recipe')

var currentFood;
var entireMeal = [];

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
        entireMeal.push(currentFood)
    }
    rightBox.innerHTML = `<h3><em>You should make:</em></h3><h4>${currentFood}</h4>`
    deleteButton.classList.remove('hidden')   
}  

function deleteRecipe(event) {
    event.preventDefault()
    var sidesIndex = sides.indexOf(currentFood)
    var mainsIndex = mains.indexOf(currentFood)
    var dessertsIndex = mains.indexOf(currentFood)
    var entireMealIndex = entireMeal.indexOf(currentFood)
    if (sidesIndex > -1) {
        sides.splice(sidesIndex, 1)
    }
    if (mainsIndex > -1) {
        mains.splice(mainsIndex, 1)
    }
    if (dessertsIndex > - 1) {
        desserts.splice(dessertsIndex, 1)
    }
    if (entireMealIndex > -1) {
        entireMeal.splice(entireMealIndex, 1)
    }
    rightBox.innerHTML = `<img class="cookpot" src="assets/cookpot.svg" alt="Place to cook food!">`
    alert("Your meal will be deleted!")
    deleteButton.classList.add('hidden')
}
