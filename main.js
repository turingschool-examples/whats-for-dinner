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
//this will trigger the output to display:
letsCookBtn.addEventListener("click", generateRandom1)
// clearBtn.addEventListener("click", clearOutput)

//FUNCTIONS:
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}
//NEW FUNCTION:
//get the chooser that's selected:
function generateRandom1(event) {
  for (var i = 0; i < allChoosers.length; i++) {
    if (allChoosers[i].checked) {
      var dishType = allChoosers[i].id
      if (dishType === "sides") {
        recommendedRecipe = sides[getRandomIndex(sides)]
        renderRecipe()
      } else if (dishType === "mains") {
        recommendedRecipe = mains[getRandomIndex(mains)]
        renderRecipe()
      } else if (dishType === "desserts") {
        recommendedRecipe = desserts[getRandomIndex(desserts)]
        renderRecipe()
      } else if (dishType === "entire-meal") {
        var wholeMeal = {
          main: mains[getRandomIndex(mains)],
          side: sides[getRandomIndex(sides)],
          dessert: desserts[getRandomIndex(desserts)]
        }
          recommendedRecipe = `${wholeMeal.main} with a side of ${wholeMeal.side} and ${wholeMeal.dessert} for dessert!`
          renderRecipe()
      }
    }
  }
}

function renderRecipe() {
  outputBox.classList.remove("hidden")
  outputBoxMain.classList.add("hidden")
  results.innerText = recommendedRecipe
}
//
// function clearOutput() {
//   results.innerText = ""
//
