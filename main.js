//Variables
var letsCookBtn = document.querySelector('.letsCookBtn');
var sideInput = document.getElementById('side');
var mainDishInput = document.getElementById('mainDish');
var dessertInput = document.getElementById('dessert');
var food = document.getElementById('foodtxt');
var pot = document.querySelector('cookPot')
//Event Listeners
letsCookBtn.addEventListener('click', showRandomDish);

//Functions
function selectRandomFoodIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function showRandomDish() {
  // hideCookPot();
   showFood();
  if (sideInput.checked == true) {
    food.innerText = sides[selectRandomFoodIndex(sides)];
  } else if (mainDishInput.checked == true) {
    food.innerText = mains[selectRandomFoodIndex(mains)];
  } else if (dessertInput.checked == true) {
    food.innerText = desserts[selectRandomFoodIndex(desserts)];
  }
};

function hideCookPot() {
  cookPot.classList.add('hidden')
};

function showFood() {
  foodtxt.classList.remove('hidden')
};
