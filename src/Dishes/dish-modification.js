import {sides, mains, desserts, allDishes} from './dishes.js';

export function genRandomDish(dishType) {
    var randomDish = dishType[Math.floor(Math.random() * dishType.length)];
    return randomDish;
}

export function genRandomMeal(allDishes){
    var randomMeal = genRandomDish(sides) + ", " + genRandomDish(mains) + ", " + genRandomDish(desserts);
    return randomMeal;
}

