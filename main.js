// query selector variables 
var selectSide = document.querySelector("#side");
var letsCookButton = document.querySelector(".lets-cook-button");
var foodOutput = document.querySelector(".food-selection")
var foodOutputText = document.querySelector(".selection-text");
var crockPotImg = document.querySelector(".crockpot-img")

// eventListeners
letsCookButton.addEventListener("click", getDish );

// functions
function getDish() {
   if (document.getElementById("side").checked === true) {
  foodOutputText.innerText = `${getRandomIndex(sides)}!`
 } else if (document.getElementById("main-dish").checked === true) {
  foodOutputText.innerHTML = `${getRandomIndex(mains)}!`
 } else if (document.getElementById("dessert").checked === true) {
  foodOutputText.innerHTML = `${getRandomIndex(desserts)}!`
}
hideCrockPot()
}
       
function getRandomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function hideCrockPot() {
crockPotImg.style.visibility = "hidden"
foodOutput.style.visibility = "visible"
}

// Arrays
var sides = ["Miso Glazed Carrots","Coleslaw","Garden Salad"]
var mains = ["Spaghetti and Meatballs","Pineapple Chicken","Shakshuka"]
var desserts = ["Apple Pie","Lemon Meringue Pie","Black Forest Cake"]
   
  







