var buttonLetsCook = document.querySelector(".lets-cook-button");
var recipeBox = document.querySelector(".Recipe");


buttonLetsCook.addEventListener('click', generateRandomDish);


function randomDish(array){
return Math.floor(Math.random() * array.length);
}

function generateRandomDish(){
  var selectedDish = document.querySelector('input[name="dish"]:checked');
  var currentRandomDish = "";
  if (selectedDish.value === "side"){
    currentRandomDish = sides[randomDish(sides)];
    recipeBox.innerHTML = `<section class="recipe-container"><h1 class="should-make">You should make:</h1><h2 class="current-dish">${currentRandomDish}!</h2></section>`;
  } else if (selectedDish.value === "main dish"){
    currentRandomDish = mains[randomDish(mains)];
    recipeBox.innerHTML = `<section class="recipe-container"><h1 class="should-make">You should make:</h1><h2 class="current-dish">${currentRandomDish}!</h2></section>`;
  } else if (selectedDish.value === "dessert"){
    currentRandomDish = desserts[randomDish(desserts)];
    recipeBox.innerHTML = `<section class="recipe-container"><h1 class="should-make">You should make:</h1><h2 class="current-dish">${currentRandomDish}!</h2></section>`;
  }

}

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
];
