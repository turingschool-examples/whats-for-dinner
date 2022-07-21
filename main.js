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
  var selectedDish = selectADish();
  console.log(selectedDish);
  if (selectedDish === "side") {
    getRandomSide(sides);
  } else if (selectedDish === "main") {
    getRandomMain(mains);
  } else if (selectedDish === "dessert") {
    getRandomDessert(desserts)
  }
}

function selectADish() {
  var input = document.querySelectorAll('input[name="dish"]');
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      return input[i].value;
    }
  }
}

function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomSide(array) {
  var sideIndex = getRandomNumber(array);
    for (var i = 0; i < sides.length; i++) {
    var sideDish = sides[sideIndex];
    console.log(sideDish)
    }
  }

function getRandomMain(array) {
  var mainIndex = getRandomNumber(array);
  for (var i = 0; i < mains.length; i++) {
    var mainDish = mains[mainIndex];
    console.log(mainDish)
  }
}

function getRandomDessert(array) {
  var dessertIndex = getRandomNumber(array);
  for (var i = 0; i < desserts.length; i++) {
  var dessertDish = desserts[dessertIndex];
  console.log(dessertDish)
  }
}

//click lets cook,
//take input value and generate the coresponding random index
//hide cookpot image, display array item at that index
