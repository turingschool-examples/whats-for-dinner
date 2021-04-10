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

var cookpotCard = document.querySelector("#cookpot-card")

//Event listeners
letsCookButton.addEventListener("click", selectRandomDish)


//Event handlers/functions
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

function selectRandomDish() {
  var sideDish;
  var mainDish;
  var dessertDish;
  var entireMeal;
  if (sideRadio.checked) {
    preventDefault();
    hideCookpot();
    displayCookpotCard();
    sideDish = randomIndex(sides);
    cookpotCard.innerHTML = `<h4>You should make:</h4>
          <h1>${sideDish}</h1>`
  } else if (mainRadio.checked) {
    preventDefault();
    hideCookpot();
    displayCookpotCard();
    mainDish = randomIndex(mains);
    cookpotCard.innerHTML = `<h4>You should make:</h4>
          <h1>${mainDish}</h1>`
  } else if (dessertRadio.checked) {
    preventDefault();
    hideCookpot();
    displayCookpotCard();
    dessertDish = randomIndex(desserts);
    cookpotCard.innerHTML = `<h4>You should make:</h4>
          <h1>${dessertDish}</h1>`
  } else if (entireMealRadio.checked) {
    preventDefault();
    hideCookpot();
    displayCookpotCard();
    sideDish = randomIndex(sides);
    mainDish = randomIndex(mains);
    dessertDish = randomIndex(desserts);
    cookpotCard.innerHTML = `<h4>You should make:</h4>
          <h1>${mainDish} with a side of ${sideDish} and ${dessertDish} for dessert!</h1>`
  }
}
