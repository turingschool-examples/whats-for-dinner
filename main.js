//query selectors 
var selectSide = document.querySelector("#side")
var selectMain = document.querySelector("#dish")
var selectDessert = document.querySelector("#dessert")
var letsCookButton = document.querySelector(".lets-cook-button")
var shouldMake = document.querySelector(".should-make")
var cookpotImg = document.querySelector("img")
var dontLikeButton = document.querySelector(".dont-like")

//event listeners
letsCookButton.addEventListener('click', hidePot, dontLikeAdd)
letsCookButton.addEventListener('click', showMeal) 
// window.addEventListener("load", dontLikeRemove)
// dontLikeButton.addEventListener("click", dontLikeRemove)
// dontLikeButton.addEventListener("click", deleteAlert)

  
//arrays
var sides = [ "Miso Glazed Carrots","Coleslaw", "Garden Salad","Crispy Potatoes","Sweet Potato Tots", "Coconut Rice", "Caeser Salad","Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];
var mains = ["Spaghetti","Pineapple Curry","Shakshuka",  "Thai Yellow Curry","Bibimbap","Vegan Chicken Parmesean", "Butternut Squash Soup","BBQ Veggie Burgers","Ramen","Empanadas","Fried Rice","Sheet Pan Fajitas","Margarita Pizza"]
var desserts = ["Apple Pie", "Lemon Meringue Pie"]

// VARIABLES
//these will pull random values from my arrays 
var sideDish = getRandomDish(sides);
var mainDish = getRandomDish(mains);
var dessertDish = getRandomDish(desserts);


//FUNCTIONS:
// hides cookpot
function hidePot () {
    shouldMake.classList.remove('hidden')
    cookpotImg.classList.add('hidden')
    
}
// shows button:

function dontLikeAdd () {
    dontLikeButton.classList.remove('hidden')
}

// function dontLikeAdd () {
//     dontLikeButton.classList.add('hidden')
//     dontLikeButton.classList.remove('hidden')
// }

//this will pull random item from array based on index variable for radio buttons 
function getRandomDish(dishArray) {
    return dishArray[Math.floor(Math.random() * dishArray.length)];
  }

//radio buttons
function showMeal(event) {  
event.preventDefault()
cookpotImg.classList.add('hidden')
shouldMake.classList.remove('hidden')
if (document.getElementById("side").checked) {
shouldMake.innerText = `You should make:
${sideDish}`
} else if (document.getElementById("main").checked) {
shouldMake.innerText = `You should make:
${mainDish}`
} else {
shouldMake.innerText = `You should make:
${dessertDish}`
}
}

//deleting recipe 
function deleteRecipe (event) {
   
}

function deleteAlert (){
    window.alert ("This recipe has been deleted.")
}