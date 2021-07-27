import {sides, desserts, mains} from './src/Dishes/dishes.js';
import {genRandomDish, genRandomMeal} from './src/Dishes/dish-modification.js';

console.log(genRandomDish(sides));
console.log(genRandomDish(mains));
console.log(genRandomDish(desserts));
console.log(genRandomMeal(sides, mains, desserts));