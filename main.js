//query selectors 
var selectSide = document.querySelector("#side")
var selectMain = document.querySelector("#dish")
var selectDessert = document.querySelector("#dessert")
var letsCookButton = document.querySelector(".lets-cook-button")
var shouldMake = document.querySelector(".should-make")

//event listeners
letsCookButton.addEventListener('click', showMeal) 


//data model function   
//arrays
var sides = [ "Miso Glazed Carrots","Coleslaw", "Garden Salad","Crispy Potatoes","Sweet Potato Tots", "Coconut Rice", "Caeser Salad","Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];
var mains = ["Spaghetti","Pineapple Curry","Shakshuka",  "Thai Yellow Curry","Bibimbap","Vegan Chicken Parmesean", "Butternut Squash Soup","BBQ Veggie Burgers","Ramen","Empanadas","Fried Rice","Sheet Pan Fajitas","Margarita Pizza"]
var desserts = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread","Peach Cobbler","Cheesecake",
"Funfetti Cake","Baklava","Flan","Macarons","Macaroons",
"Chocolate Cupcakes","Pavlova","Pumpkin Pie","Key Lime Pie",
"Tart Tatin", "Croissants","Eclairs"]

// VARIABLES
//these will pull random values from my arrays 
var sideDish = getRandomDish(sides);
var mainDish = getRandomDish(mains);
var dessertDish = getRandomDish(desserts);

//FUNCTIONS:
//this will pull random item from array based on index variable for radio buttons 
function getRandomDish(dishArray) {
    return dishArray[Math.floor(Math.random() * dishArray.length)];
  }

//radio buttons
function showMeal() {  
if (document.getElementById("side").checked) {
shouldMake.innerText = `You should make ${sideDish}.`
} else if (document.getElementById("main").checked) {
shouldMake.innerText = `You should make ${mainDish}.`
} else {
shouldMake.innerText = `You should make ${dessertDish}.`
}
}


//arrays 
