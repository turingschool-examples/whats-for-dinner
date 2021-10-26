// Header Variables
var nameGreeting = document.querySelector(".name-greeting");
var addRecipeButton = document.querySelector(".add-recipe-button");

// Meal Form Variables
var submitMealButton = document.querySelector(".meal-option-button");
var mealFormValue = document.querySelector(".meal-form");
var formValue = mealFormValue['food-option'].value;
var validationText = document.querySelector(".validation-text");

// Meal View Variables
var mealText = document.querySelector(".meal-text");
var clearTextButton = document.querySelector(".clear-button");
var cookpotImage = document.querySelector(".cookpot-image");

// Footer Variables
var recipeTypeInput = document.querySelector(".recipe-type");
var recipeNameInput = document.querySelector(".recipe-name");
var addNewRecipeButton = document.querySelector(".add-new-recipe-button");

//Event Listeners
submitMealButton.addEventListener("click",generateRandomFoods);



function generateRandomFoods() {
    event.preventDefault();
    var side = sides[getRandomIndex(sides)];
    var mainDish = mains[getRandomIndex(mains)];
    var dessert = desserts[getRandomIndex(desserts)];
    var entireMeal = `${mainDish} with a side of ${side} and ${dessert} for dessert!`;
    console.log(formValue)
    if(formValue === undefined){
        validationText.classList.remove("hidden")
    };
    
}







// Random number function to be used for random sides,mains and dessert
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};