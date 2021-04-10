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

//var radios = document.querySelectorAll('');

var potBox = document.querySelector('.meal-description');


var cookButton = document.querySelector('#js-cook-btn');
//var addRecipeButton = document.querySelector('#js-add-recipe-btn');

//Add Event-Listeners
cookButton.addEventListener('click', showDish)

//I'm going to check what dish is passed into this function
//then I'm going to return a random slot from the array matching the dish-type
//then I'm going to remove the pot img
//then I'm going to display the text!

//var dishType = document.querySelector('input[name="menu-options"]:checked').value;

function showDish(e){
  e.preventDefault();
  //var dish = 'Peas!'
  //hide(potBox);
  var food = 'Prunes';

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
   

//getRandomDish(dishType);

}

function getRandomDish(dishType) {
  return dishType[Math.floor(Math.random() * dishType.length)];
};

// function hide(e){
//  e.classList.add("hide");
// }

// function show(e){
//   e.classList.remove("hide");
// }