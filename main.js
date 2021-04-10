//Arrays containing sides, main entrees, and desserts

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


//Add Query-Selectors
var sideRadial = document.querySelector('#js-side');
var mainDishRadial = document.querySelector('#js-main-dish');
var dessertRadial = document.querySelector('#js-dessert');
var entireMealRadial = document.querySelector('#js-entire-meal');


var potBox = document.querySelector('.meal-description');
var cookButton = document.querySelector('#js-cook-btn');
//var addRecipeButton = document.querySelector('#js-add-recipe-btn');

//Add Event-Listeners
cookButton.addEventListener('click', showDish)

//functions below
function showDish(e){
  e.preventDefault();
  // sideRadial.checked ? food = getRandomDish(sides) :
  // mainDishRadial.checked ? food = getRandomDish(mains) :
  // dessertRadial.checked ? food = getRandomDish(desserts) :
  // entireMealRadial.checked ? console.log("Full meal") : console.log("Error"); 
  if(sideRadial.checked){
    food = getRandomDish(sides);
    //potBox.innerHTML = `You should make: ${food}`
  } else if (mainDishRadial.checked) {
    food = getRandomDish(mains);
    //potBox.innerHTML = `You should make: ${food}`
  } else if (dessertRadial.checked) {
    food = getRandomDish(desserts);
    //potBox.innerHTML = `You should make: ${food}`
  } else if(entireMealRadial.checked){
    //potBox.innerHTML = `You should make: ${food}`
  }
  potBox.classList.add("hide")
  potBox.innerHTML = `You should make: ${food}`
}

function getRandomDish(dishType) {
  return dishType[Math.floor(Math.random() * dishType.length)];
};
