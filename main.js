let mainrecipes = [
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
"Margarita Pizza"]

let siderecipes = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"]

let desserts = [
"Desserts",
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
"Eclairs"]

window.addEventListener("load", displayCustomizedFeatures);

let favoriteRecipes = [];


let userInputForm = document.querySelectorAll(".radioButtons");
let submitButton = document.getElementById("submit");
let resultsWindow = document.querySelector(".recipeDisplayContainer");
let userTitle = document.getElementById("title");
let navbar = document.querySelector(".navbar");
let bodyImage = document.querySelector(".main-container");
let boxes = document.querySelectorAll(".main");

submitButton.addEventListener("click", formHandler);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomElement(array) {
  let randomNum = (getRandomIndex(array));
  let randomItem = array[randomNum]
  return randomItem
}

function formHandler(){
  event.preventDefault();
  for (let i = 0; i < 4; i++) {
    if (userInputForm[i].checked) {
      let selection = userInputForm[i].value;
      let randomRecipe = returnRecipe(selection);
      displayResults(randomRecipe);
    }
  }
}

function returnRecipe(selection) {
  if (selection == "main") {
    let recipe = getRandomElement(mainrecipes);
    return recipe;
  } else if (selection == "side") {
    let recipe = getRandomElement(siderecipes);
    return recipe;
  } else if (selection == "dessert") {
    let recipe = getRandomElement(desserts);
    return recipe;
  }
}

function displayResults(randomRecipe) {

  let thing = document.getElementById("results-string-container");
  thing.innerText = "You should have: "
  resultsWindow.innerText = randomRecipe;
}

function displayCustomizedFeatures() {
  if (localStorage.length >= 1){
  let username = localStorage.getItem("username")
  userTitle.innerText = `What's for dinner, ${username}?`

  let theme = localStorage.getItem("theme")
  if (theme == "dreamy") {
    navbar.className = "navbar dreamy"
    bodyImage.className = "main-container dreamy"
    boxes[0].className = "main userInputForm dreamy"
    boxes[1].className = "main contain dreamy"
    }
  }
}
