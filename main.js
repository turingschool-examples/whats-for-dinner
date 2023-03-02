var divRecipeOptions = document.querySelector(".recipe-options-container");
var radioButtons = document.querySelectorAll("input");
var buttonLetsCook = document.querySelector("#lets-cook");

var showRecipeSection = document.querySelector(".show-recipe");
var cookPot = document.querySelector("img");

buttonLetsCook.addEventListener('click', displayRecipe);

function displayRecipe() {
  cookPot.classList.add('hidden');
  showRecipeSection.innerHTML = " ";
  if (radioButtons[0].checked) {
    showRecipeSection.innerHTML += `
      <p><i>You should make:</i></p>
      <h1>${sides[getRandomIndex(sides)]}!</h1>`
  } else if (radioButtons[1].checked) {
    showRecipeSection.innerHTML += `
      <p><i>You should make:</i></p>
      <h1>${mainDishes[getRandomIndex(mainDishes)]}!</h1>`
  } else if (radioButtons[2].checked) {
    showRecipeSection.innerHTML += `
      <p><i>You should make:</i></p>
      <h1>${desserts[getRandomIndex(desserts)]}!</h1>`
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
