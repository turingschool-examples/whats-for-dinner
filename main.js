import {sides, desserts, mains} from './src/Dishes/dishes.js';
import {genRandomDish, genRandomMeal} from './src/Dishes/dish-modification.js';

console.log(genRandomDish(sides));
console.log(genRandomDish(mains));
console.log(genRandomDish(desserts));
console.log(genRandomMeal(sides, mains, desserts));

// in the future, i would move all of your code from dish-modification.js to here and get rid of dish-modification.js
// main.js files (for html/js projects) are where you want to store all of your functionality
