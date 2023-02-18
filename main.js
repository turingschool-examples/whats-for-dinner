// query selector variables 
var selectSide = document.querySelector("#side");
var letsCookButton = document.querySelector(".lets-cook-button");
var foodSelectionText = document.querySelector(".selection-text");

// eventListeners
letsCookButton.addEventListener("click", getDish );


function getDish() {
if (document.getElementById("side").checked === true) {
  foodSelectionText.innerText = getRandomIndex(sides)
} else if (document.getElementById("main-dish").checked === true) {
  foodSelectionText.innerHTML = getRandomIndex(mains)
} else if (document.getElementById("dessert").checked === true) {
  foodSelectionText.innerHTML = getRandomIndex(desserts)
}
}
       
function getRandomIndex(array) {
    return array[Math.floor(Math.random() * array.length)];
  }


// Arrays
var sides = ["Miso Glazed Carrots","Coleslaw","Garden Salad"]
var mains = ["Spaghetti and Meatballs","Pineapple Chicken","Shakshuka"]
var desserts = ["Apple Pie","Lemon Meringue Pie","Black Forest Cake"]
   
  







