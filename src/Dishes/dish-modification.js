import {sides, mains, desserts, allDishes} from './dishes.js';

var clearButton = document.getElementsByClassName('clear-button')[0];
var pot = document.getElementById('pot-img');
var makeText = document.getElementsByClassName('make-statement')[0];
var typeSelection = document.getElementsByClassName('dishType');
var isChecked = false;

pot.querySelector


/* ------------- Generate Random Dish ------------- */
export function genRandomDish(dishType) {
    var randomDish = dishType[Math.floor(Math.random() * dishType.length)];
    return randomDish;
}

/* ------------- Generate Random Meal ------------- */
export function genRandomMeal(){
    var randomMeal = genRandomDish(mains) + " with a side of " + 
    genRandomDish(sides) + " and " + genRandomDish(desserts) + " for dessert!";
    return randomMeal;
}

/* ------------- Appearing Add Recipe Footer ------------- */
export function toggleFooter() {
    var recipeFooter = document.getElementsByClassName('add-recipe-footer')[0];

    if (recipeFooter.style.display === 'block') {
        recipeFooter.style.display = 'none';
    } else {
        recipeFooter.style.display = 'block';
    }
    return console.log(recipeFooter.style.display);
}

/* ------------- Hide Pot at Let's Cook Action ------------- */
export function togglePot() {
    for (var i = 0; i < typeSelection.length; i++) {
      if (typeSelection[i].isChecked){
        isChecked = true;
        console.log('Is Checked is true')
        break;
      }
    }

    if (!isChecked) {
      console.log('Please select a dish option.')
    }

    if (pot.style.display === 'block') {
      pot.style.display = 'none';
      makeText.style.display = 'block';
      clearButton.style.display = 'block';
    } else {
      pot.style.display = 'block';
      makeText.style.display = 'none';
      clearButton.style.display = 'none';
    }
    return console.log(isChecked);
  }

/*
var recipeTypeInput = document.getElementById('recipe-type');
var recipeNameInput = document.getElementById('recipe-name');

export function addDish() {
    var name = recipeNameInput.value;
    var type = recipeTypeInput.value;
}
*/