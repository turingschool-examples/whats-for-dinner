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

function getRandomDish(e) {
  cookPotImage.classList.add("hidden");
  cookPotBox.innerHTML += `<section class="cookpot-meal"></>
    <p id="random-meal-choice"></p>
    </section>`;
  event.preventDefault();
  var message = document.querySelector(".cookpot-meal");
  var randomMealChoice = document.querySelector("#random-meal-choice");
  if (sideRadio.checked == true) {
      message.innerText = "You should make:";
      var randomChoice = getRandomIndex(sideOptions);
      randomMealChoice.innerText = sideOptions[randomChoice];
  } else if (mainDishRadio.checked == true) {
      message.innerText = "You should make:";
      var randomChoice = getRandomIndex(mainDishOptions);
      randomMealChoice.innerText = mainDishOptions[randomChoice];
  } else if (dessertRadio.checked == true) {
      message.innerText = "You should make:";
      var randomChoice = getRandomIndex(dessertOptions);
      randomMealChoice.innerText = dessertOptions[randomChoice];
  }
};
