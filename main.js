var letsCookButton = document.querySelector('.lets-cook-button');
var menuOptions = document.querySelector('.box-two');

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
'Hush Puppies',
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

class Menu {
  constructor(sides, mains, desserts) {
    this.sides = sides;
    this.mains = mains;
    this.desserts = desserts;
  };
};

letsCookButton.addEventListener('click', displayRandomFood);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function displayRandomFood() {
  var randomSides = sides[getRandomIndex(sides)];
  var randomEntrees = mains[getRandomIndex(mains)];
  var randomDesserts = desserts[getRandomIndex(desserts)];
  menuSelection = new Menu(randomSides, randomEntrees, randomDesserts);
  menuOptions.innerHTML = menuSelection.sides;
};