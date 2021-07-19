/* ------------------ Import in the list of entrees ------------------*/
import {sidesArray, mainsArray, dessertsArray} from './dishes.js'

/* ------------------ Function to get random sides, main, desserts, and entire entrees ------------------*/
function getRandomIndex(list){
    return list[Math.floor(Math.random() * list.length)];
}

function getRandomSides(){
    const randomSides = sidesArray [Math.floor(Math.random() * sidesArray.length)];
    return console.log(randomSides);
}
getRandomSides();

function getRandomMainDishes(){
    const randomMainDishes = mainsArray [Math.floor(Math.random() * mainsArray.length)];
    return console.log(randomMainDishes);
}
getRandomMainDishes();

function getRandomDesserts(){
    const randomDesserts = dessertsArray [Math.floor(Math.random() * dessertsArray.length)];
    return console.log(randomDesserts);
}
getRandomDesserts();

function getRandomEntrees(){
    const randomEntrees = [Math.floor(Math.random() * dessertsArray.length)];
    return console.log('A side of ' + sidesArray[randomEntrees] + ' with ' + mainsArray[randomEntrees] + ' and ' + dessertsArray[randomEntrees] + ' for desserts!');
}
getRandomEntrees();

/* ------------------ Hidden function ------------------*/
// function hiddenDisplay() {
//     document.querySelector(".addedRecipes").classList.add("hidden")
//}

/* ------------------ Function for the user to add a recipe ------------------*/
// var userNewRecipeType = document.getElementById('.recipe-type');
// var userNewRecipeName = document.getElementById('.recipe-name');
// var addRecipeButton = document.querySelector('.add-a-recipe-button');

// addRecipeButton.addEventListener('click', addRecipe);

// export function addRecipe(){
//     var recipeName = userNewRecipeType.value;
//     var recipeType = userNewRecipeName.value;
//  }

/* ------------------ Function for "What are you looking for?" ------------------*/
// var userSelectionSide = document.getElementById('.select-option1');
// var userSelectionMain = document.getElementById('.select-option2');
// var userSelectionDesserts = document.getElementById('.select-option3');
// var userSelectionEntree = document.getElementById('.select-option4');
// var letsCookButton = document.querySelector('.display-food');

// letsCookButton.addEventListener('click', displayFoodOptions);

// function displayFoodOptions(){
//     var foodChoice = userSelection.value;
// }

/* ------------------ Function for the login page ------------------*/
// var userName = document.getElementById(".users-name");
// var nameButton= document.querySelector('.add-name');

// submitNameButton.addEventListener('click',userLogin);

// function userLogin(){
//     var name = userName.value; 
// }