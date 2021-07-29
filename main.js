/* ------------------ Import in the list of entrees ------------------*/
// import {sidesArray, mainsArray, dessertsArray} from './dishes.js'
// see my comment in dishes.js and let me know if you have any questions on this!

/* ------------------ Function to get random sides, main, desserts, and entire entrees ------------------*/
function getRandomIndex(list){
    return list[Math.floor(Math.random() * list.length)];
}

// here's a new function that handles the conditional of which dish type should be displayed
// the other functions like getRandomSides and togglePotImage are now considered helper functions 
// since they handle a smaller bit of functionality inside of this displayGeneratedDish function
function displayGeneratedDish() {
    var dishText = document.getElementById('dish-text')

    if (document.getElementById('select-option1').checked) {
        // this is checking to see if "Side" is selected
        dishText.innerText = getRandomSides()
        togglePotImage(true)

    } else if (document.getElementById('select-option2').checked) {
        dishText.innerText = getRandomMainDishes()
        togglePotImage(true)

    } else if (document.getElementById('select-option3').checked) {
        dishText.innerText = getRandomDesserts()
        togglePotImage(true)

    } else if (document.getElementById('select-option4').checked) {
        dishText.innerText = getRandomEntrees()
        togglePotImage(true)

    } else {
        togglePotImage(false)
        // the use of this function means that whenever a dish type is selected, the pot will be display=none
        // if none of the radio buttons are selected, the pot will turn back on

    }
}

function getRandomSides(){
    const randomSides = sidesArray[Math.floor(Math.random() * sidesArray.length)];
    return randomSides
    // i removed the console.log from each return because we don't need the dish to print and be displayed
}
// getRandomSides();
// i commented out each of these function instantiations because this meant that
// when your app was opened, all the functions were run without reason

function getRandomMainDishes(){
    const randomMainDishes = mainsArray[Math.floor(Math.random() * mainsArray.length)];
    return randomMainDishes
}
// getRandomMainDishes();

function getRandomDesserts() {
    const randomDesserts = dessertsArray[Math.floor(Math.random() * dessertsArray.length)];
    return randomDesserts
}
// getRandomDesserts();

function getRandomEntrees() {
    const randomEntrees = [Math.floor(Math.random() * dessertsArray.length)];
    return 'A side of ' + sidesArray[randomEntrees] + ' with ' + mainsArray[randomEntrees] + ' and ' + dessertsArray[randomEntrees] + ' for desserts!'
}
// getRandomEntrees();

function togglePotImage(display) { // i renamed this to more accurately indicate what it's doing since it's toggling the image visibility
    var hideImage = document.getElementById('pot');
    var dishText = document.getElementById('dish-text')

    // i changed the conditional here because the previous conditional meant that the pot 
    // visibility will toggle on and off every time the button is clicked
    // this way we determine when the pot will be visible and when it's not
    if (display === true) { 
        hideImage.style.display = 'none';
        dishText.style.display = 'block'
    } else {
        hideImage.style.display = 'block';
        dishText.style.display = 'none'
    }
    // return console.log(hideImage.style.display);
}

function displayRecipesTab() {
    var displayAddedRecipeTab = document.getElementsByClassName('addedRecipes')[0];

    if (displayAddedRecipeTab.style.display === 'block') {
        displayAddedRecipeTab.style.display = 'none';
    } else {
        displayAddedRecipeTab.style.display = 'block';
    }
    // return console.log(displayAddedRecipeTab.style.display);
    // you don't need to return this value to toggle the visibility
}





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
