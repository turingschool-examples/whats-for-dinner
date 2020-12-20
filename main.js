var sideRadio = document.querySelector("#meal-side");
var mainDishRadio = document.querySelector("#meal-main-dish");
var dessertRadio = document.querySelector("#meal-dessert");
var letsCookButton = document.querySelector("#lets-cook");
var form = document.querySelector("form");
var mealOptionsForm = document.querySelector(".meal-options-form");
var cookPotImage = document.querySelector(".cookpot-image");
var cookPotBox = document.querySelector(".cookpot-box");

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

form.addEventListener("submit", getRandomDish);

function getRandomDish() {
  cookPotImage.classList.add("hidden");
  cookPotBox.innerHTML += `<section>
    <p class="cookpot-meal"></p>
    <p id="random-meal-choice"></p>
    </section>`;
  event.preventDefault();
  var message = document.querySelector(".cookpot-meal");
  var randomMealChoice = document.querySelector("#random-meal-choice");
  if (sideRadio.checked == true) {
      message.innerText = "You should make:";
      randomMealChoice.innerText = sideOptions[getRandomIndex(sideOptions)];
  } else if (mainDishRadio.checked == true) {
      message.innerText = "You should make:";
      randomMealChoice.innerText = mainDishOptions[getRandomIndex(mainDishOptions)];
  } else if (dessertRadio.checked == true) {
      message.innerText = "You should make:";
      randomMealChoice.innerText = dessertOptions[getRandomIndex(dessertOptions)];
  }
};
