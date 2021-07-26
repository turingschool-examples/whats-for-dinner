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
]

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
]

var addRecipeBtn = document.querySelector('.recipe-btn');
var clearBtn= document.querySelector('.clear-btn')
var cookPot = document.querySelector('.cook-pot-img');
var foodRecommendation = document.querySelector('.food-recommendation')
var letsCookBtn = document.querySelector('.cook-btn');
var radioDessertsBtn = document.querySelector('.desserts-option');
var radioEntireBtn = document.querySelector('.entire-meal-option');
var radioMainsBtn = document.querySelector('.mains-option');
var radioSidesBtn = document.querySelector('.sides-option');
var youMake = document.querySelector('.you-make');

clearBtn.addEventListener('click', pushClearBtn);
letsCookBtn.addEventListener('click', letsCook);

function checkRadioButton () {
  if(radioSidesBtn.checked) {
     return sides[getRandomIndex(sides)];
   }
  if(radioMainsBtn.checked) {
    return mains[getRandomIndex(mains)];
  }
  if(radioDessertsBtn.checked) {
    return desserts[getRandomIndex(desserts)];
  }
  if(radioEntireBtn.checked) {
    return `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert`
  }
}

function letsCook (event) {
  event.preventDefault()
  var dish = checkRadioButton()
  foodRecommendation.innerText = dish;
  foodRecommendation.classList.remove('hidden');
  cookPot.classList.add('hidden');
  clearBtn.classList.remove('hidden');
  youMake.classList.remove('hidden');
}

function pushClearBtn (event) {
  clearBtn.classList.add('hidden');
  foodRecommendation.classList.add('hidden');
  cookPot.classList.remove('hidden');
  youMake.classList.add('hidden');
  location.reload();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
