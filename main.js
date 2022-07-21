var letsCookButton = document.querySelector(".lets-cook");

var sides = [
  "Miso Glazed Carrot",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
]
var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
]
var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
]

letsCookButton.addEventListener("click", displayADish);

function displayADish() {
  var inputSide = document.querySelector("#side");
  var inputMain = document.querySelector("#main");
  var inputDessert = document.querySelector("#dessert");
  if (inputSide.value === "side") {
    getRandomSide(sides);
  } else if (inputMain.value === "main") {
    getRandomMain(mains);
  } else if (inputDessert.value === "dessert") {
    getRandomDesert(desserts);
  }
}

function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomSide(array) {
  var sideIndex = getRandomNumber(array);
    for (var i = 0; i < sides.length; i++) {
      console.log(sides[sideIndex])
    }
  }


function getRandomMain(array) {
  var mainIndex = getRandomNumber(array);
  for (var i = 0; i < mains.length; i++) {
    console.log(mains[mainIndex])
  }
}

function getRandomDessert(array) {
  var dessertIndex = getRandomNumber(array);
  for (var i = 0; i < desserts.length; i++) {
    console.log(desserts[dessertIndex])
  }
}

console.log

//click lets cook,
//take input value and generate the coresponding random index
//hide cookpot image, display array item at that index
