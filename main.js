//query selectors 
var selectSide = document.querySelector("#side")
var selectMain = document.querySelector("#dish")
var selectDessert = document.querySelector("#dessert")
var letsCookButton = document.querySelector(".lets-cook-button")


//event listeners
letsCookButton.addEventListener('click', showMeal) 
//^^where radio buttons are 



//data model function- HMMM?    


// VARIABLES
//these will pull random values from my arrays 
var sideIndex = getRandomIndex(sides);
var mainIndex = getRandomIndex(mains);
var dessertIndex = getRandomIndex(desserts);

//FUNCTIONS:
//this will pull random item from array based on index variable for radio buttons 
function getRandomIndex(dishArray) {
    return Math.floor(Math.random() * dishArray.length);
  }




//radio buttons- trying with no query selectors
function showMeal() {
if(document.getElementById("side").checked)
    document.getElementById("side").innerHTML = getRandomIndex(sides);
    console.log(sides)
// else if (document.getElementById("main-dish").checked) {

// }
}


//arrays - how to access
var sides = [ "Miso Glazed Carrots","Coleslaw", "Garden Salad","Crispy Potatoes","Sweet Potato Tots", "Coconut Rice", "Caeser Salad","Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];
var mains = ["Spaghetti","Pineapple Curry","Shakshuka",  "Thai Yellow Curry","Bibimbap","Vegan Chicken Parmesean", "Butternut Squash Soup","BBQ Veggie Burgers","Ramen","Empanadas","Fried Rice","Sheet Pan Fajitas","Margarita Pizza"]
var desserts = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread","Peach Cobbler","Cheesecake",
"Funfetti Cake","Baklava","Flan","Macarons","Macaroons",
"Chocolate Cupcakes","Pavlova","Pumpkin Pie","Key Lime Pie",
"Tart Tatin", "Croissants","Eclairs"]