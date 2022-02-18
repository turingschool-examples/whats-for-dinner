var cookBtn = document.querySelector('.lets-cook-button');
var potImg = document.querySelector('.dinner-box');
var makeText = document.querySelector('.dinner-box2');
var foodSuggestion = document.querySelector('.size');
var side = [
  'Potato Salad',
  'Mashed Potatoes',
  'Broccoli Salad',
  'Southern Coleslaw',
  'Roasted Potatoes',
];

var main = [
  'Chicken Parmesan',
  'Bone-in Ribeye Steak',
  'Oven-baked Salmon',
  'Air Fried Pork Belly',
  'Grilled Chicken',
];

var dessert = [
  'Fudge Caramel Brownies',
  'Chocolate Cake',
  'Apple Pie',
  'Ice Cream',
  'Original Cheese Cake',
];

cookBtn.addEventListener('click', function() {
  hide(potImg)
  show(makeText)
  random(main)
});

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function random(dish) {   //replace 'main' with meal dish
  foodSuggestion.innerText = dish[getRandomIndex(dish)]
}


function hide(element) {
  element.classList.add('hide')
}

function show(element) {
  element.classList.remove('hide')
}
