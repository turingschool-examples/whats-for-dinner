// class Food {
//   constructor(side, mainDish, dessert) {
//     this.id = Date.now();
//     this.side = side;
//     this.main = mainDish;
//     this.dessert = dessert;
//   }
// }

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};


var sideRButton = document.querySelector('.side-radio-button');
var mainDishRButton = document.querySelector('.main-dish-radio-button');
var dessertRButton = document.querySelector('.dessert-radio-button');
var entireMealRButton = document.querySelector('.entire-meal-radio-button');
var letsCookButton = document.querySelector('.lets-cook-button');
var cookpot = document.querySelector('.cookpot-logo');

var mealText = document.querySelector('.new-meal');

var clearButton = document.querySelector('.clear-button');


letsCookButton.addEventListener('click', randomMeal);

function randomMeal () {
  mealText.innerHTML = ``;
  if (sideRButton.checked === true) {
    mealText.innerText = getRandomIndex(sides);
  } else if (mainDishRButton.checked === true) {
    mealText.innerText = getRandomIndex(mains);
  } else if (dessertRButton.checked === true) {
    mealText.innerText = getRandomIndex(desserts);
  } else if (entireMealRButton.checked === true) {
    mealText.innerHTML +=
    `<p class="random-dish">You should make:</p>
    <p class="random-meal">${getRandomIndex(mains)} with a side of ${getRandomIndex(sides)} and ${getRandomIndex(desserts)} for dessert!</p>`
  }
}

function randomMeal() {
  cookpot.classList.add('hidden');
  mealText.classList.remove('hidden');
  clearButton.classList.remove('hidden');
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



//-
