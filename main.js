let mainrecipes = ["Spaghetti and Meatballs",
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


let userInputForm = document.querySelectorAll(".radioButtons");
let submitButton = document.getElementById("submit");
let resultsWindow = document.querySelector(".recipeDisplayContainer");

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
    return recipe
  }
}

function displayResults(randomRecipe) {
  resultsWindow.innerText = randomRecipe;
}
