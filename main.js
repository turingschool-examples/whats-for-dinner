//Data
var sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"];

var mains = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"];

var desserts = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"];


//DOM Variables
var sideRadio = document.querySelector("#side");
var mainRadio = document.querySelector("#main-dish");
var dessertRadio = document.querySelector("#dessert");
var entireMealRadio = document.querySelector("#entire-meal");
var letsCookButton = document.querySelector("#lets-cook");

var cookpotImage = document.querySelector("#cookpot");

var cookpotCard = document.querySelector("#cookpot-card");

//Event Listeners
letsCookButton.addEventListener("click", selectRandomDish);


//Event Handlers/Functions
function preventDefault() {
  event.preventDefault()
}

function randomIndex(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function hideCookpot() {
  cookpotImage.classList.add("hidden");
}

function displayCookpotCard() {
  cookpotCard.classList.remove("hidden");
}

function populateDish(dish) {
  preventDefault();
  hideCookpot();
  displayCookpotCard();
  cookpotCard.innerHTML = `<h4>You should make:</h4>
        <p class="insert">${dish}!</p>`
}

function populateMeal(side, main, dessert) {
  preventDefault();
  hideCookpot();
  displayCookpotCard();
  cookpotCard.innerHTML = `<h4>You should make:</h4>
        <p class="insert-meal">${main} with a side of ${side} and ${dessert} for dessert!</p>`
}

function selectRandomDish() {
  var sideDish, mainDish, dessertDish, entireMeal;
  if (sideRadio.checked) {
    sideDish = randomIndex(sides);
    populateDish(sideDish);
  } else if (mainRadio.checked) {
    mainDish = randomIndex(mains);
    populateDish(mainDish);
  } else if (dessertRadio.checked) {
    dessertDish = randomIndex(desserts);
    populateDish(dessertDish);
  } else if (entireMealRadio.checked) {
    sideDish = randomIndex(sides);
    mainDish = randomIndex(mains);
    dessertDish = randomIndex(desserts);
    populateMeal(sideDish, mainDish, dessertDish);
  }
}
