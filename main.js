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

function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomSide(array) {
  var sideIndex = getRandomNumber(array);
  console.log(sideIndex);
}

function getRandomMain(array) {
  var mainIndex = getRandomNumber(array);
  console.log(mainIndex);
}

function getRandomDessert(array) {
  var dessertIndex = getRandomNumber(array);
  console.log(dessertIndex);
}

getRandomSide(sides);
getRandomMain(mains);
getRandomDessert(desserts);

//click lets cook,
//take input value and generate the coresponding random index
//hide cookpot image, display array item at that index
