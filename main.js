
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


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


var sideRButton = document.querySelector('.side-radio-button');
var mainDishRButton = document.querySelector('.main-dish-radio-button');
var dessertRButton = document.querySelector('.dessert-radio-button');
var entireMealRButton = document.querySelector('.entire-meal-radio-button');
var letsCookButton = document.querySelector('.lets-cook-button');
var cookpot = document.querySelector('.cookpot-logo');

var newMeal = document.querySelector('.random-dish');
var openText = document.querySelector('.new-meal');

var clearButton = document.querySelector('.clear-button');


letsCookButton.addEventListener('click', randomMeal);

function randomMeal() {
  showRandomMeal();
  newMeal.innerText = ``;
  if (sideRButton.checked) {
    newMeal.innerText = sides[getRandomIndex(sides)];
    //return sides;
  } else if (mainDishRButton.checked) {
    newMeal.innerText = mains[getRandomIndex(mains)];
  } else if (dessertRButton.checked) {
    newMeal.innerText = desserts[getRandomIndex(desserts)];
  } else if (entireMealRButton.checked) {
    newMeal.innerHTML +=
    `<p class="random-dish">You should make:</p>
    <p class="random-meal">${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!</p>`
  }
  //showRandomMeal();
}

function showRandomMeal() {
  cookpot.classList.add('hidden');
  openText.classList.remove('hidden');

}




// function randomSide() {
//   ('button').ready(function() {
//     ("#side").prop('checked', true).change();
//   })
//   side.innerText = sides[getRandomIndex(sides)];
// };

//document.getElementById("#side").checked;

//attr, prop
//("#side").is(":checked");

// function randomSide() {
//             var side = document.querySelector('.side-radio-button');
//
//             for(i = 0; i < sides.length; i++) {
//                 if(side[i].checked)
//                 document.getElementById("result").innerHTML
//                         = "Gender: "+side[i].value;
//             }
//         }




//Is my data.js connected to main.js?



// class Food {
//   constructor(side, mainDish, dessert) {
//     this.id = Date.now();
//     this.side = side;
//     this.main = mainDish;
//     this.dessert = dessert;
//   }
// }
