import {sides, mains, desserts, allDishes} from './dishes.js';

export function genRandomDish(dishType) {
    var randomDish = dishType[Math.floor(Math.random() * dishType.length)];
    return randomDish;
}

export function genRandomMeal(allDishes){
    var randomMeal = genRandomDish(sides) + ", " + genRandomDish(mains) + ", " + genRandomDish(desserts);
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

<div className="add-recipe-tab">
    <input id="recipe-type" list="type">Recipe Type</input>
    <input id="recipe-name">Recipe Name</input>
    <button class="add-recipe-button">Add New Recipe</button>
    <datalist id="type">
        <option value="sides">Side</option>
        <option value="mains">Main</option>
        <option value="desserts">Dessert</option>
    </datalist>
</div>
*/