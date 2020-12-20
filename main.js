var cookButton = document.querySelector(".lets-cook");
var potImage = document.querySelector(".menu-box-image");

cookButton.addEventListener('click', function() {
  potImage.classList.toggle("hidden");
  var foodType = document.querySelector(`input[type="radio"]:checked`);
  var foodList = grabArray(foodType.value);
  var foodText = buildFoodText(foodList);
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
};

function buildFoodText(foodType) {
  var index = getRandomIndex(foodType);
  var foodName = foodType[index];
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
