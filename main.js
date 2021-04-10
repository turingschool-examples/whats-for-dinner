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
  var side = getRandomDish(sides);
  var main = getRandomDish(mains); 
  var dessert = getRandomDish(desserts); 
  potBox.classList.add("hide")
  potBox.innerHTML = `<p class="first-paragraph">You should make:</p>`
  // sideRadial.checked ? food = getRandomDish(sides) :
  // mainDishRadial.checked ? food = getRandomDish(mains) :
  // dessertRadial.checked ? food = getRandomDish(desserts) :
  // entireMealRadial.checked ? console.log("Full meal") : console.log("Error"); 
  if(sideRadial.checked){
    food = side;
    potBox.innerHTML += `<p class="second-paragraph">${side}</p>`
  } else if (mainDishRadial.checked) {
    food = main;
    potBox.innerHTML += `<p class="second-paragraph">${main}</p>`
  } else if (dessertRadial.checked) {
    food = desserts;
    potBox.innerHTML += `<p class="second-paragraph">${dessert}</p>`
  } else if(entireMealRadial.checked){
    potBox.innerHTML += `<p class="second-paragraph">${main} with a side of ${side} and ${dessert} for dessert!</p>`
  }
}

function getRandomDish(dishType) {
  return dishType[Math.floor(Math.random() * dishType.length)];
};
