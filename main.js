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

var potContent = document.querySelector('.cookpot-section');
var potImg = document.querySelector('.pot-img');
var botton = document.querySelector('#cook-button');
var clearButton = document.querySelector('#clear-button')
var jsElements = document.querySelector('.js-element');
var potButton = document.querySelector('.pot-button ')


botton.addEventListener('click', handleClick);
clearButton.addEventListener('click', innerHTMLClear);


function handleClick() {
  makeInnerHtml();
}

function innerHTMLClear() {
  //getting random number for all arrays
  potButton.classList.add('hidden');
  potImg.classList.remove('hidden');
  jsElements.innerHTML = ``;

}

function makeInnerHtml() {
  var sidesRandomNumber = getRedomNumber(sides);
  var mainsRandomNumber = getRedomNumber(mains);
  var dessertsRandomNumber = getRedomNumber(desserts);

  var dishRecipes = document.querySelector('input[name="dish-item"]:checked');
  var clearForm = document.querySelector('#radio-form').reset();
  jsElements.innerHTML = ``
  if (dishRecipes === null) {
    alert("Please Select An Option")
    potImg.classList.remove('hidden');
    potButton.classList.add('hidden');
  } else if (dishRecipes.value === 'Side') {
    potImg.classList.add('hidden');
    potButton.classList.remove('hidden');
    jsElements.innerHTML += `
      <h1> You should cook: </h1>
      <h3 class="js-h1"> ${sides[sidesRandomNumber]} </h3>`;
  } else if (dishRecipes.value === 'Main Dish') {
    jsElements.innerHTML += `
      <h1> You should cook: </h1>
      <h3 class="js-h1"> ${mains[mainsRandomNumber]} </h3>`;
    potImg.classList.add('hidden');
    potButton.classList.remove('hidden');
  } else if (dishRecipes.value === 'Desert') {
    jsElements.innerHTML += `
      <h1> You should cook: </h1>
      <h3 class="js-h1"> ${desserts[dessertsRandomNumber]} </h3>`;
    potImg.classList.add('hidden');
    potButton.classList.remove('hidden');
  } else if (dishRecipes.value === 'Entire Meal') {
    jsElements.innerHTML += `
      <h1> You should cook: </h1>
      <h2 class="js-h1"> ${sides[sidesRandomNumber]} <br> ${mains[mainsRandomNumber]} <br> ${desserts[dessertsRandomNumber]} <br> </h2>`;
    potImg.classList.add('hidden');
    potButton.classList.remove('hidden');
  }
}
