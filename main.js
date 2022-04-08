// querySelector variables
var letsCookButton = document.querySelector(".cook");
var results = document.querySelector(".results");
var mealResults = document.querySelector(".mealresults");
var removeCookBoxLogo = document.querySelector("#cookpot");


// Global variables
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
  "Eclairs",
];

var foodsArrays = {
  sides: sides,
  mains: mains,
  desserts: desserts,
}

// addEventListener here
letsCookButton.addEventListener('click', removeLogo);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function hideCookpot() {
  removeCookBoxLogo.classList.add("hidden");
}

function getRandomElement(arr) {
  var randomIndex = getRandomIndex(arr);
  return arr[randomIndex];
}

function getCooking() {
    var radio = document.querySelector('input[type=radio]:checked');
    results.innerText = `You should make:`;
    if (radio.value === "meal") {
      mealResults.innerText = `${getRandomElement(foodsArrays.sides)} with a side of ${getRandomElement(foodsArrays.mains)} and ${getRandomElement(foodsArrays.desserts)} for dessert!`;
    } else {
      mealResults.innerText = `${getRandomElement(foodsArrays[radio.value])}!`;
    }
}

function removeLogo() {
  event.preventDefault();
  hideCookpot();
  getCooking();
}
