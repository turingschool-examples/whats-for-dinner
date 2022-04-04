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

submitButton.addEventListener("click", formHandler);
submitButton.addEventListener("click", returnRecipe);

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
      console.log(selection);
      returnRecipe(selection);
    }
  }
}


function returnRecipe(selection) {
  if (selection == "main") {
    let recipe = getRandomElement(mainrecipes);
    console.log(recipe)
    return recipe
  }
}
