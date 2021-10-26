// Header Variables
var nameGreeting = document.querySelector(".name-greeting");
var addRecipeButton = document.querySelector(".add-recipe-button");

// Meal Form Variables
var submitMealButton = document.querySelector(".meal-option-button");
var mealFormValue = document.querySelector(".meal-form");


// Meal View Variables
var mealText = document.querySelector(".meal-text");
var clearTextButton = document.querySelector(".clear-button");
var cookpotImage = document.querySelector(".cookpot-image");

// Footer Variables
var footer = document.querySelector(".footer");
var recipeTypeInput = document.querySelector(".recipe-type");
var recipeNameInput = document.querySelector("#recipe-name");
var addNewRecipeButton = document.querySelector(".add-new-recipe-button");

//Event Listeners
submitMealButton.addEventListener("click", generateRandomFoods);
addNewRecipeButton.addEventListener("click", addRecipeButtonClicked);
addRecipeButton.addEventListener("click", addNewRecipeButtonClicked)



function generateRandomFoods() {
    event.preventDefault();
    var formValue = document.querySelector('input[name="food-option"]:checked').value;
    var side = sides[getRandomIndex(sides)];
    var mainDish = mains[getRandomIndex(mains)];
    var dessert = desserts[getRandomIndex(desserts)];
    var entireMeal = `${mainDish} with a side of ${side} and ${dessert} for dessert!`;
    if(formValue === "side"){
        mealText.innerHTML = side
    } else if(formValue === "main-dish"){
        mealText.innerHTML = mainDish
    } else if(formValue === "dessert"){
        mealText.innerHTML = dessert
    } else if(formValue === "entire-meal"){
        mealText.innerHTML = entireMeal
    };
}

function addNewRecipeButtonClicked(){
    event.preventDefault();
    footer.classList.remove('hidden')


}

function addRecipeButtonClicked(){
    event.preventDefault();
    var newRecipeType = document.getElementById("recipe-type");
    var newRecipeTypeValue = newRecipeType.options[newRecipeType.selectedIndex].value;
    var recipeInputValue = recipeNameInput.value;
    // push values to array
    // `${newRecipeTypeValue}`.push(recipeNameInput.value)
}

// var e = document.getElementById("elementId");
// var value = e.options[e.selectedIndex].value;
// var text = e.options[e.selectedIndex].text;







// Random number function to be used for random sides,mains and dessert
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};