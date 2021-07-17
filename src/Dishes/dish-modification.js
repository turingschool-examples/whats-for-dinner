import {sides, mains, desserts} from './dishes.js';


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

/*
var recipeTypeInput = document.getElementById('recipe-type');
var recipeNameInput = document.getElementById('recipe-name');

export function addDish() {
    var name = recipeNameInput.value;
    var type = recipeTypeInput.value;
}
*/