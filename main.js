var sides = [
  'Miso Glazed Carrots',
  'Coleslaw',
  'Garden Salad',
  'Crispy Potatoes',
  'Sweet Potato Tots',
  'Coconut Rice',
  'Caeser Salad',
  'Shrimp Summer Rolls',
  'Garlic Butter Mushrooms',
  'Hush Puppies'
];

var mains = [
  'Spaghetti and Meatballs',
  'Pineapple Chicken',
  'Shakshuka',
  'Thai Yellow Curry',
  'Bibimbap',
  'Chicken Parmesean',
  'Butternut Squash Soup',
  'BBQ Chicken Burgers',
  'Ramen',
  'Empanadas',
  'Chicken Fried Rice',
  'Sheet Pan Fajitas',
  'Margarita Pizza'
];

var desserts = [
  'Apple Pie',
  'Lemon Meringue Pie',
  'Black Forest Cake',
  'Banana Bread',
  'Peach Cobbler',
  'Cheesecake',
  'Funfetti Cake',
  'Baklava',
  'Flan',
  'Macarons',
  'Macaroons',
  'Chocolate Cupcakes',
  'Pavlova',
  'Pumpkin Pie',
  'Key Lime Pie',
  'Tart Tatin',
  'Croissants',
  'Eclairs'
];

//random number function
function getRedomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

//getting random number for all arrays
var sidesRandomNumber = getRedomNumber(sides);
var mainsRandomNumber = getRedomNumber(mains);
var dessertsRandomNumber = getRedomNumber(desserts);


var cookPot = document.querySelector('.cookpot')
var potImg = document.querySelector('.pot-img');
var botton = document.querySelector('#cook-button');
var dishMenu = document.querySelectorAll('.dish');
console.log(dishMenu);


botton.addEventListener('click', handleClick);

//hidding pot log on fucntion
function handleClick() {
  //potImg.classList.toggle('hidden');
  potImg.classList.toggle('hidden');
  getRandomDesert();
}

function getRandomDesert(){
  var div = document.createElement("div");
  var h3 = document.createElement('h3');
  var clearBotton = document.createElement('button');
  cookPot.append(div);
  // cookPot.append(clearBotton)
  // clearBotton.innerText = 'Clear'
  div.append(h3);

  h3.innerText = "You should Make:";
}
