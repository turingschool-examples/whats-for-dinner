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
var paragraph1 = document.querySelector('.first-paragraph');
var paragraph2 = document.querySelector('.second-paragraph');
var cookButton = document.querySelector('#js-cook-btn');
var clearButton = document.querySelector('#js-clear-recipe-btn');
var addRecipeButton = document.querySelector('#js-add-recipe-btn');

var addNewRecipeForm = document.querySelector('#js-add-recipe-form');

//Add Event-Listeners
cookButton.addEventListener('click', showDish);
clearButton.addEventListener('click', hideDish);
addRecipeButton.addEventListener('click', addRecipe);


//functions below
function showDish(e){
  e.preventDefault();
  var side = getRandomDish(sides);
  var main = getRandomDish(mains); 
  var dessert = getRandomDish(desserts);

  potBox.classList.add("hide")
  paragraph1.innerHTML = `You should make: `;
  
  if(sideRadial.checked){
    paragraph2.innerHTML = `${side}`;
  } else if (mainDishRadial.checked) {
    paragraph2.innerHTML = `${main}`;
  } else if (dessertRadial.checked) {
    paragraph2.innerHTML = `${dessert}`;
  } else if(entireMealRadial.checked){
    paragraph2.innerHTML = `${main} with a side of ${side} and ${dessert} for dessert!`
  }
  clearButton.classList.remove("hide-element")
}

function hideDish() {
  clearButton.classList.add("hide-element")
  paragraph1.innerHTML = ``;
  paragraph2.innerHTML = ``;
}

function addRecipe(){
  addNewRecipeForm.classList.remove("hide-element");
}

function getRandomDish(dishType) {
  return dishType[Math.floor(Math.random() * dishType.length)];
};
