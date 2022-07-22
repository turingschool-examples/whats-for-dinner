// Array of side
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
  "Hush Puppies",
  "Truffle Fries",
];
// Array of Main Dish
var mainDishes = [
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
  "Crispy Basil Chicken",
];
// Array of Desserts
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
  "Eclairs",
];

// Variables
var cookButton = document.querySelector(".cook");
var hideImage = document.querySelector(".cook-pot-card");
var cookPotImage = document.querySelector(".cook-pot");
var random = "";

// Event Listeners
cookButton.addEventListener("click", updateToCook);

// Functions
function updateToCook() {
  var selectDish = document.querySelector('input[name="dish"]:checked').value;
  if (selectDish === "Side") {
    random = sides[getRandomIndex(sides)];
    displayWhatToMake();
  } else if (selectDish === "Main Dish") {
    random = mainDishes[getRandomIndex(mainDishes)];
    displayWhatToMake();
  } else if (selectDish === "Dessert") {
    random = desserts[getRandomIndex(desserts)];
    displayWhatToMake();
  } else {
    displayEntireMeal();
  }
}

function displayWhatToMake() {
  cookPotImage.classList.add("hidden");
  hideImage.innerHTML = "";
  hideImage.innerHTML += `
  <div class="shouldMake"><p class="shouldMakeText"">You should make:</p>
  <p class="dish">${random}!</p></div>
  <div class="clear">
    <button onclick="hideCard()" class="clearButton">CLEAR</button>
    </div>`;
}

function displayEntireMeal() {
  cookPotImage.classList.add("hidden");
  hideImage.innerHTML = "";
  hideImage.innerHTML += `
  <div class="shouldMake"><p class="shouldMakeText"">You should make:</p>
  <p class="dish">${mainDishes[getRandomIndex(mainDishes)]} with a side of ${
    sides[getRandomIndex(sides)]
  } and ${desserts[getRandomIndex(desserts)]} for dessert!</p></div>
  <div class="clear">
    <button onclick="hideCard()" class="clearButton">CLEAR</button>
    </div>`;
}

function hideCard() {
  clearButton = document.querySelector(".clearButton");
  var whatToMake = document.querySelector(".shouldMake");
  whatToMake.classList.add("hidden");
  clearButton.classList.add("hidden");
  hideImage.innerHTML += `<img class="cook-pot" src="assets/cookpot.svg" />`;
}

// Random querySelector
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
