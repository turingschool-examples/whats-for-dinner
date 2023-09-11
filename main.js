// query selectors
var favesButton = document.querySelector(".favorites-button")
var letsCookButton = document.querySelector(".dish-selecting-button")
var clearButton = document.querySelector(".clear-button")
var radioDishSelection = document.querySelectorAll("radio-buttons")
//fav button on recipe to toggle if favorited or not

// event listeners 
favesButton.addEventListener("click", displayFavorites)
letsCookButton.addEventListener("click", displayRandomRecipe)
clearButton.addEventListener("click", displayCookPot)
radioDishSelection.addEventListener("click", selectDishType)
// fav button listener to update the property of recipe object

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

var currentRecipe
// define the properties of the object
// current recipe object needs to have : unique id and id for favorite T/F
// reassigned thru function 

function getRandomRecipe(){
    // var working on getRandomIndex
    // how to select between the three arrays?
    // part of the event listener of 
}

function showElement(elementToDisplay) {
    elementToDisplay.classList.remove("hidden")
  }
  
  function hideElement(elementToHide) {
    elementToHide.classList.add("hidden")
  }

function displayRandomRecipe(){
//display random recipe
//add hidden class to cookpot
//use hideElement on cookpot
}

function selectDishType(){
// translate the selection to the let's cook button to display random recipe
// how do radio buttons select and transfer the selection????
}

function displayFavorites(){
// define the html as an empty string
// how to find the recipes that are favorited???
// use innerHTML to insert html block to render
}

function displayCookPot(){

}


/*pseudocode map

--> array data.js file exporting to js file and html?

---> for current recipe object display
    > add fav button

---> how does the radio talk w the lets cook button
    connect radio button selection to the let's cook button

    > query selectorall for the radio button to transfer the value, treat the values as an array, actually a nodelist, can convert easily

    > choose dish button
---> adding an event listener to the container for the clear button
    > event.target for the cook pot clear button


function to display current one in the dom
function to favorite the current one in the DM


function attached to event listener for the button to toggle the hidden class for the selected dish


iteration 1 
---> when a user selects a dish option and clicks the lets cook button, the user sees a random dish from the list of possible dishes for that category
---> when the dish name appears, the cookpot icon is hidden

CYOA: favorites

where to show the favorites list??? replace the cookpot section?

---> when a recipe appears it should appear with a “Favorite” button.

---> When the “Favorite” button is clicked, that recipe should be added to a new list of favorite recipes.

---> Users should be able to view their favorites by clicking a “View Favorites” button that exists somewhere on the page

---> When the “View Favorites” button is clicked, users should be taken to a new page that displays all of their favorite recipes.

---> Users should be able to navigate back to the main page by clicking a button.

---> Users should be able to remove a recipe from their list of favorites, by clicking a button.

*** As you add these new elements to the page, be sure to match the style of existing elements.***
 
favorite function:
have a function working on the current recipe
the current recipe will have a property of favorited
automatically update the DOM bc DM is updated 


*/