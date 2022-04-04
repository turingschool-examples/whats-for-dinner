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

function formHandler(){
  event.preventDefault();
  for (let i = 0; i < 4; i++) {
    if (userInputForm[i].checked) {
      console.log(userInputForm[i].value)
    }
  }
}
