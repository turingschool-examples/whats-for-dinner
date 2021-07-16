import {sides, mains, desserts} from './dishes.js';

export function genRandomDish(dishType) {
    var randomDish = dishType[Math.floor(Math.random() * dishType.length)];
    return randomDish;
}

export function genRandomMeal(){
    var randomMeal = genRandomDish(mains) + " with a side of " + 
    genRandomDish(sides) + " and " + genRandomDish(desserts) + " for dessert!";
    return randomMeal;
}

/*
var recipeTypeInput = document.getElementById('recipe-type');
var recipeNameInput = document.getElementById('recipe-name');
var addDishButton = document.querySelector('add-recipe=button');
addDishButton.addEventListener('click', addDish);

export function addDish() {
    var name = recipeNameInput.value;
    var type = recipeTypeInput.value;
}
*/