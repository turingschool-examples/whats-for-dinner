//foods
var side = [
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

var main = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza'
];

var dessert = [
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

// querySelectors

var radioInput1 = document.querySelector('#side')
var radioInput2= document.querySelector('#main')
var radioInput3 = document.querySelector('#dessert')
var radioInput4 = document.querySelector('#entire-meal')
var showRecipeButton = document.querySelector('.show-recipe')
var cookPot = document.querySelector('img')
var resultRecipe = document.querySelector('.result')
// document.querySelector('')

// eventListeners
showRecipeButton.addEventListener('click', showRecipe)

//functions

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }


  function showRecipe(form) {
    event.preventDefault()
    for (var i = 0; i < form.path[1].length; i++) {
      if (form.path[1][i].checked) {
          cookPot.classList.add('hidden')
          resultRecipe.classList.remove('hidden')
          resultRecipe.innerHTML = `<p>You should make:</p> <h2> ${window[form.path[1][i].id][getRandomIndex(window[form.path[1][i].id])]}!</h2>`
      } else if (form.path[1][3].checked) {
        resultRecipe.innerHTML = `<p>You should make:</p>
        <h2> ${main[getRandomIndex(main)]} with a side of ${side[getRandomIndex(side)]} and ${dessert[getRandomIndex(dessert)]} for dessert!</h2>`
      }
    }
  }
