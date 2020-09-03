var sideSelect = document.querySelector(".side-select");
var mainDishSelect = document.querySelector(".main-dish-select");
var dessertSelect = document.querySelector(".dessert-select");
var letsCookButton = document.querySelector(".lets-cook-button");
var resultBox = document.querySelector(".result-box");
var cookPotIcon = document.querySelector(".cook-pot-icon");

letsCookButton.addEventListener("click", displayRandomDish);

function displayRandomDish() {
  if (sideSelect.checked === true) {
    var randomSide = getRandomIndex(sides);
    displayDish(randomSide);
  }
}

function displayDish(dish) {
  cookPotIcon.classList.add("hidden");
  var singleDishBlock =
  `<div>
    <h4>You should make:</h4>
    <h1>${dish}</h1>
    </div>`
  resultBox.insertAdjacentHTML('afterbegin', singleDishBlock);
}

function getRandomIndex(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}






var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
];
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
  "Margarita Pizza",
];
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
];
