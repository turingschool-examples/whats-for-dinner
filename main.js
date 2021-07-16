import {sides, desserts, mains} from './src/Dishes/dishes.js';
import {genRandomMeal} from './src/Dishes/dish-modification.js';

genRandomMeal(sides);
console.log(genRandomMeal(sides));
console.log(genRandomMeal(mains));
console.log(genRandomMeal(desserts));
