var sides = [
    "Miso Glazed Carrots", 
    "Coleslaw", 
    "Garden Salad", 
    "Crispy Potatoes", 
    "Sweet Potato Tots", 
    "Coconut Rice", 
    "Caesar Salad", 
    "Shrimp Summer Rolls", 
    "Garlic Butter Mushrooms"]

var mainDishes = [
    "Spaghetti and Meatballs", 
    "Pineapple Chicken", 
    "Shakshuka", 
    "Thai Yellow Curry", 
    "Bibmbap", 
    "Shrimp Alfredo Fettucine", 
    "Chicken Parmesean", 
    "Butternut Squash Soup", 
    "BBQ Chicken Burgers", 
    "Ramen", "Empanadas", 
    "Chicken Fried Rice", 
    "Sheet Pan Fajitas", 
    "Margarita Pizza"]

var desserts = [
    "Apple Pie", 
    "Lemon Meringue Pie", 
    "Black Forest Cake", 
    "Banana Bread", 
    "Peach Cobbler", 
    "Best Chocolate Cake Ever", 
    "Cheesecake", 
    "Funfetti Cake", 
    "Baklava", 
    "Flan", 
    "Macarons", 
    "Macaroons", 
    "Chocolate Cupcakes", 
    "Pavlova", "Pumpkin Pie", 
    "Key Lime Pie", 
    "Tart Tatin", 
    "Croissants", 
    "Eclairs"]

// DOM Elements
letsCookButton = document.querySelector(".cook-button")
resultFood = document.getElementById("result-text")
clearButton = document.querySelector(".empty-out")

// Event Listeners
letsCookButton.addEventListener("click", generateRandomFood)
clearButton.addEventListener("click",displayCookPot)

// Functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
function changeDisplay() {
    document.querySelector(".start").classList.add("hidden")
    document.querySelector(".results").classList.remove("hidden")
}

function displayCookPot() {
    document.querySelector(".start").classList.remove("hidden")
    document.querySelector(".results").classList.add("hidden")
    clearRadio()
}

function clearRadio() {
    document.querySelector('#side').checked = false
    document.querySelector('#main-dish').checked = false
    document.querySelector('#dessert').checked = false
    document.querySelector('#entire-meal').checked = false
}

function generateRandomFood() {
    if (document.getElementById("side").checked) {
        changeDisplay()
        resultFood.innerText = `${sides[getRandomIndex(sides)]}`
    } else if (document.getElementById("main-dish").checked) {
        changeDisplay()
        resultFood.innerText = `${mainDishes[getRandomIndex(mainDishes)]}!`
    } else if (document.getElementById("dessert").checked) {
        changeDisplay()
        resultFood.innerText = `${desserts[getRandomIndex(desserts)]}`
    } else if (document.getElementById("entire-meal").checked) {
        changeDisplay()
        resultFood.innerText = `${mainDishes[getRandomIndex(mainDishes)]} with a side of ${sides[getRandomIndex(sides)]} for dessert!`
    }

}