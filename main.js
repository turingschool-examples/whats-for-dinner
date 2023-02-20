var sides = [
  'Garden Salad',
  'Caeser Salad',
  'Hush Puppies',
  'Garlic Mushrooms',
  'Mashed Potatoes and Gravy',
  'Greenbeans',
  'Coleslaw',
  'Homestyle Fried Potatoes',
  'Chili Cheese Tots',
  'Rice',
  'Summer Rolls',
  'Baked Creamcheese Peppers',
  'Herb Blend Stuffing'
]

var mains = [
  'BBQ Bacon Burgers',
  'Chicken Fried Rice',
  'Homemade Ramen',
  'Eggrolls',
  'Shepards Pie',
  'Bibimbap',
  'Chicken Parmesean',
  'Baked Potatoe Soup',
  'Empanadas',
  'Lemon Pepper Chicken',
  'Fajitas',
  'Spaghetti and Meatballs',
  'BYO Pizza'
];

var desserts = [
  'Macaroons',
  'Lemon Meringue Pie',
  'Pumpkin Pie',
  'Funfetti Cake',
  'Peach Cobbler',
  'Cheesecake',
  'Baklava',
  'Flan',
  'Macarons',
  'Pinapple Upside Down Cake',
  'Apple Pie',
  'Chocolate Cupcakes',
  'Pavlova',
  'Banana Bread',
  'Key Lime Pie',
  'Orange Dream Bunt Cakes',
  'Eclairs'
];

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
  showFood();
  if (sideInput.checked == true) {
    food.innerText = sides[selectRandomFoodIndex(sides)];
  } else if (mainDishInput.checked == true) {
    food.innerText = mains[selectRandomFoodIndex(mains)];
  } else {
    food.innerText = desserts[selectRandomFoodIndex(desserts)];
  }
};

function hideCookPot() {
  cookPot.classList.add('hidden')
};

function showFood() {
  foodtxt.classList.remove('hidden')
};