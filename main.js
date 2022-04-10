var letsCookButton = document.querySelector('.lets-cook-button');
var radioButtons = document.querySelectorAll('input[name="food"]')

letsCookButton.addEventListener(event, findRadioValue)

var sidesArray = [
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

var mainsArray = [
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

var dessertsArray = [
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

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomSides() {
  var randomSides = sidesArray[getRandomIndex(sidesArray)];
  return randomSides;
}

function getRandomMains() {
  var randomMains = mainsArray[getRandomIndex(mainsArray)];
  return randomMains;
}

function getRandomDesserts() {
var randomDesserts = dessertsArray[getRandomIndex(dessertsArray)];
  return randomDesserts;
}

function findRadioValue() {
  for (i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked && radioButtons[i].value === 'dessert') {
    p.innerText = `${getRandomDesserts()}`
    }
  }
}
