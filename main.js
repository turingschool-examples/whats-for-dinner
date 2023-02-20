
var selectSide = document.querySelector("#side")
var selectMain = document.querySelector("#dish")
var selectDessert = document.querySelector("#dessert")
var letsCookButton = document.querySelector(".lets-cook-button")
var shouldMake = document.querySelector(".should-make")
var cookpotImg = document.querySelector("img")

letsCookButton.addEventListener('click', hidePot)
letsCookButton.addEventListener('click', showMeal) 

var sides = [ "Miso Glazed Carrots","Coleslaw", "Garden Salad","Crispy Potatoes","Sweet Potato Tots", "Coconut Rice", "Caeser Salad","Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];
var mains = ["Spaghetti","Pineapple Curry","Shakshuka",  "Thai Yellow Curry","Bibimbap","Vegan Chicken Parmesean", "Butternut Squash Soup","BBQ Veggie Burgers","Ramen","Empanadas","Fried Rice","Sheet Pan Fajitas","Margarita Pizza"]
var desserts = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread","Peach Cobbler","Cheesecake",
"Funfetti Cake","Baklava","Flan","Macarons","Macaroons","Chocolate Cupcakes","Pavlova","Pumpkin Pie","Key Lime Pie",
"Tart Tatin", "Croissants","Eclairs"]

var sideDish = getRandomDish(sides);
var mainDish = getRandomDish(mains);
var dessertDish = getRandomDish(desserts);

function hidePot () {
    shouldMake.classList.remove('hidden')
    cookpotImg.classList.add('hidden')
    
}

function getRandomDish(dishArray) {
    return dishArray[Math.floor(Math.random() * dishArray.length)];
  }

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


// CYOA

//QUERY SELECTORS
// var dontLikeButton = document.querySelector(".dont-like")
// window.addEventListener("load", dontLikeRemove)
// dontLikeButton.addEventListener("click", dontLikeRemove)
// dontLikeButton.addEventListener("click", deleteAlert)

//FUNCTIONS
// shows button:
// function dontLikeAdd () {
//     dontLikeButton.classList.remove('hidden')
// }

//deleting recipe: 
// function deleteRecipe (event) {
// }

//shows alert:
// function deleteAlert (){
//     window.alert ("This recipe has been deleted.")
// }