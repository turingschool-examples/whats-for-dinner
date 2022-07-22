//arrays of dishes here:
var sides = ['Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caesar Salad',
'Shrimp Summer Rolls',
'Stuffed Mushrooms',
'Hush Puppies',
'Watermelon-Feta Salad',
'Avocado-Grapefruit Salad',
'Garlic Mashed Potatoes',
'Balsamic Brussels Sprouts',
'Minestrone Soup',
'Mulligatawny Soup']
var desserts = ["Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cherry Cake",
"Banana Bread",
"Peach Cobbler",
"Strawberry Cheesecake",
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
"Chocolate Croissants",
"Eclairs",
"Strawberry-Basil Ice Cream",
"Ice Cream Sandwiches",
"Panna Cotta"]
var mains = ["Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Chicken Curry",
"Bibimbap",
"Chicken Parmesan",
"Butternut Mushroom Risotto",
"BBQ Chicken Burgers",
"Ramen",
"Steak Burritos",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza",
"Korean Glazed Meatloaf",
"Cajun Salmon"]

//selectors:
var resultsText = document.querySelector("#results")
var outputBox = document.querySelector("#output-box")
var outputBoxMain = document.querySelector("#output-box-main")
var cornerAddBtn = document.querySelector("#corner-add-button")
var letsCookBtn = document.querySelector("#lets-cook")
var clearBtn = document.querySelector("#clear-btn")
var sideChooser = document.getElementById("sides")
var mainChooser = document.querySelector("#mains")
var dessertChooser = document.querySelector("#desserts")
var wholeMealChooser = document.querySelector("#entire-meal")
var allChoosers = [sideChooser, mainChooser, dessertChooser, wholeMealChooser]
var recommendedRecipe
//EVENT LISTENERS:
//add event listener to each radio button:
for (var i = 0; i < allChoosers.length; i++) {
  allChoosers[i].addEventListener("input", generateRandom)
}

//this will trigger the output to display:
letsCookBtn.addEventListener("click", displayRandom)
// clearBtn.addEventListener("click", clearOutput)


//FUNCTIONS:
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function generateRandom(event) {
  var dishType = event.target.id
  if (dishType === "entire-meal") {
    var wholeMeal = { main: mains[getRandomIndex(mains)],
      side: sides[getRandomIndex(sides)],
      dessert: desserts[getRandomIndex(desserts)] }
      recommendedRecipe = `${wholeMeal.main} with a side of ${wholeMeal.side}
      and ${wholeMeal.dessert} for dessert!`
    } else if (dishType === "sides") {
      recommendedRecipe = sides[getRandomIndex(sides)]
    } else if (dishType === "mains") {
      recommendedRecipe = mains[getRandomIndex(mains)]
    } else if (dishType === "desserts") {
      recommendedRecipe = desserts[getRandomIndex(desserts)]
    }
  }
  //need to refactor so that button click is what triggers generation and rendering of results

function displayRandom() {
  outputBox.classList.remove("hidden")
  outputBoxMain.classList.add("hidden")
  results.innerText = recommendedRecipe

  //hide output box main
  //unhide output box hidden
  //add results of generateRandom
}

//find out which radio btn user clicked on
//assign that to a variable (userSelection)
// that selection will determine which random thing is generated
