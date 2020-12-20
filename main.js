var cookButton = document.querySelector(".lets-cook");
var potImage = document.querySelector(".menu-box-image");

cookButton.addEventListener('click', function() {
  potImage.classList.toggle("hidden");
  var foodType = document.querySelector(`input[type="radio"]:checked`);
  var foodList = grabArray(foodType.value);
  if (foodList === 'meal') {
    var foodText = buildFullMeal();
  }
  else {
    var foodText = buildFoodText(foodList);
  }
  insertFoodText(foodText);
});

function grabArray(foodType) {
  if (foodType === 'side') {
    return side;
  }
  if (foodType === 'main') {
    return mains;
  }
  if (foodType === 'dessert') {
    return desserts;
  }
  if (foodType === 'meal') {
    return 'meal';
  }
};

function buildFullMeal() {
  var sideMeal = side[getRandomIndex(side)];
  var mainMeal = mains[getRandomIndex(mains)];
  var dessertMeal = desserts[getRandomIndex(desserts)];
  return `<h3 class="food-idea-display">You should make:</h3>
        <h4 class="food-idea-display">${mainMeal} with a side of ${sideMeal} and ${dessertMeal} for dessert!</h4>`;
}

function buildFoodText(foodType) {
  var foodName = foodType[getRandomIndex(foodType)];
  return `<h3 class="food-idea-display">You should make:</h3>
        <h4 class="food-idea-display">${foodName}!</h4>`;
};

function insertFoodText(foodText) {
  var messageLocation = document.querySelector("#messageLocation");
  messageLocation.innerHTML = foodText;
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


// if meal
//
