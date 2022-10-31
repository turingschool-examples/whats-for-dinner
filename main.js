var letsCookButton = document.querySelector(".lets-cook");

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
  var selectedType = selectAType();
  var retrievedDish = retrieveADish(selectedType);
  var suggestedDish = document.querySelector(".suggestions");
  suggestedDish.innerHTML =
      `<h3 class="you-should-make">You should make:</h3>
      <section class="dish">${retrievedDish}!</section>`
}

function selectAType() {
  var input = document.querySelectorAll('input[name="dish"]');
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      return input[i].value;
    }
  }
}

function retrieveADish(selectedType) {
  if (selectedType === "side") {
    var sideDish = getRandomSide(sides);
    return sideDish;
  } else if (selectedType === "main") {
    var mainDish = getRandomMain(mains);
    return mainDish;
  } else if (selectedType === "dessert") {
    var dessertDish = getRandomDessert(desserts);
    return dessertDish;
  } else if (selectedType === "meal") {
    var entireMeal = `${getRandomMain(mains)} with a side of ${getRandomSide(sides)} and ${getRandomDessert(desserts)} for dessert`;
    return entireMeal
  }
}

function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomSide(array) {
  var sideIndex = getRandomNumber(array);
    for (var i = 0; i < sides.length; i++) {
    return sides[sideIndex];
    }
  }

function getRandomMain(array) {
  var mainIndex = getRandomNumber(array);
  for (var i = 0; i < mains.length; i++) {
    return mains[mainIndex];
  }
}

function getRandomDessert(array) {
  var dessertIndex = getRandomNumber(array);
  for (var i = 0; i < desserts.length; i++) {
  return desserts[dessertIndex];
  }
}
