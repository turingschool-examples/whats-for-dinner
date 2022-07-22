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
var cornerAddBtn = document.querySelector("#corner-add-button")
var letsCookBtn = document.querySelector("#lets-cook")
var clearBtn = document.querySelector("#clear-btn")
var sideChooser = document.querySelector("#side")
var mainChooser = document.querySelector("#main-dish")
var dessertChooser = document.querySelector("#dessert")
var wholeMealChooser = document.querySelector("#entire-meal")
var allChoosers = document.querySelectorAll("#radio")

//event listeners:
// cornerAddBtn.addEventListener("click", functionHere)
letsCookBtn.addEventListener("click", generateRandom)
// clearBtn.addEventListener("click", clearOutput)

function generateRandom(event){
  var userSelection = event.target
  if (userSelection == sideChooser) {
    console.log("Hello")
  }
}
//find out which radio btn user clicked on
//assign that to a variable (userSelection)
// that selection will determine which random thing is generated
