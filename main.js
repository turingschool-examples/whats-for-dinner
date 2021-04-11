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

function populateDish(dish) {
  cookpotCard.innerHTML = `<h4>You should make:</h4>
        <p class="insert">${dish}</p>`
}

function populateMeal(side, main, dessert) {
  cookpotCard.innerHTML = `<h4>You should make:</h4>
        <p class="insert">${main} with a side of ${side} and ${dessert} for dessert!</p>`
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
    populateDish(sideDish);
    // cookpotCard.innerHTML = `<h4>You should make:</h4>
    //       <p class="insert">${sideDish}</p>`
  } else if (mainRadio.checked) {
    preventDefault();
    hideCookpot();
    displayCookpotCard();
    mainDish = randomIndex(mains);
    populateDish(mainDish);
    // cookpotCard.innerHTML = `<h4>You should make:</h4>
    //       <p class="insert">${mainDish}</p>`
  } else if (dessertRadio.checked) {
    preventDefault();
    hideCookpot();
    displayCookpotCard();
    dessertDish = randomIndex(desserts);
    populateDish(dessertDish);
    // cookpotCard.innerHTML = `<h4>You should make:</h4>
    //       <p class="insert">${dessertDish}</p>`
  } else if (entireMealRadio.checked) {
    preventDefault();
    hideCookpot();
    displayCookpotCard();
    sideDish = randomIndex(sides);
    mainDish = randomIndex(mains);
    dessertDish = randomIndex(desserts);
    populateMeal(sideDish, mainDish, dessertDish);
    // cookpotCard.innerHTML = `<h4>You should make:</h4>
    //       <p class="insert">${mainDish} with a side of ${sideDish} and ${dessertDish} for dessert!</p>`
  }
}
