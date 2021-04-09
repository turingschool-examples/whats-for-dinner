//variables

var letsCookButton = ".lets-cook"
var transparentBoxRight = ".transparent-box-right"

var sidesArray = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"]
var mainArray = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean", "Butternut Squash SoupBBQ Chicken Burgers", "Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"]
var dessertArray = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"]

var recipe = ".recipe"
var cookpot = ".cookpot"
var hidden = "hidden"

// event listeners

letsCookButton.addEventListener("click", letsCook);

//functions

function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length);
};

function getRandomSide() {
	var randomSideIndex = getRandomIndex(sidesArray);
  return sidesArray[randomSideIndex];
}

function getRandomMain() {
	var randomMainIndex = getRandomIndex(mainArray);
  return mainArray[randomMainIndex];
}

function getRandomDessert() {
	var randomDessertIndex = getRandomIndex(dessertArray);
  return dessertArray[randomDessertIndex];
}

function letsCook() {
  cookpot.classList.add("hidden");
  recipe.classList.remove("hidden");
  var circleSide = document.getElementById("circle-side");
  var circleMain = document.getElementById("circle-main");
  var circleDessert = document.getElementById("circle-dessert");
  if (circleSide.checked === true) {
    getRandomSide()
  } else if (circleMain.checked === true) {
    getRandomMain()
  } else if (circleDessert.checked === true) {
    getRandomDessert()
  }
}
