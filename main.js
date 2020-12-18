// get familiar with css syling calls
var sideDishes = [
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
  "Margarita Pizza"
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
]


var cookPotIcon = document.querySelector('.pot');
var cookButton = document.querySelector('.cook-button');

var clearButton = document.querySelector('.clear-button');
var recommend = document.querySelector('.recommend');
var recommendation = recommend.innerHTML;


// Event Listeners
cookButton.addEventListener('click', showMeal)
clearButton.addEventListener('click', clear)

//Event Handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showMeal() {
  cookPotIcon.classList.add('hidden');
  clearButton.classList.remove('hidden');
  recommend.classList.remove('hidden');
}

function clear() {
  cookPotIcon.classList.remove('hidden');
  clearButton.classList.add('hidden');
  recommend.classList.add('hidden')
}
