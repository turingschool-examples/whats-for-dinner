//-------------QUERY SELECTORS----------------------//
var sideSelector = document.querySelector("#side");
var mainDishSelector = document.querySelector("#main-dish");
var dessertSelector = document.querySelector("#dessert");
var entireMealSelector = document.querySelector("entireMealSelector");
var clearButton = document.querySelector("#clear-button");


//--------ARRAY VALUES--------------------------//

var side = [
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

var mainDish = [
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
];

var dessert = [
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

//-------Functions-------------------//
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function generateRandomDish() {
  var randomSide = side[getRandomIndex(side)];
  var randomMainDish = mainDish[getRandomIndex(mainDish)]
  var randomDessert = dessert[getRandomIndex(randomDessert)]
};
