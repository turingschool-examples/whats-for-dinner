// Global variables
var cookButton = document.querySelector(".lets-cook");
  var potImage = document.querySelector(".menu-box-image");
console.log();

cookButton.addEventListener('click', function() {
  potImage.classList.toggle("hidden");
  var foodType = document.querySelector(`input[type="radio"]:checked`);
  var foodList = grabArray(foodType.value);
  buildFoodText(foodList);
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
}

function buildFoodText(foodType) {
  var index = getRandomIndex(foodType);
  console.log(index);
  var foodName = foodType[index];
  console.log(foodName);
  var mealText = `<h3 class="food-idea-display">You should make:</h3>
        <h4 class="food-idea-display">${foodName}!</h4>`;
  var messageLocation = document.querySelector("#messageLocation");
  messageLocation.innerHTML = mealText;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
