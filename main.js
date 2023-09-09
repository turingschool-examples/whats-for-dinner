// query selectors
var favesButton = document.querySelector(".favorites-button")
var letsCookButton = document.querySelector(".dish-selecting-button")
var clearButton = document.querySelector(".clear-button")
var radioDishSelection = document.querySelectorAll("radio-buttons")
//fav button to toggle if favorited or not

// event listeners 
favesButton.addEventListener("click", displayFavorites)
letsCookButton.addEventListener("click", displayRandomRecipe)
clearButton.addEventListener("click", displayCookPot)
radioDishSelection.addEventListener("click", selectDishType)

var currentRecipe
function displayRandomRecipe(){
//display random recipe
//add hidden class to cookpot
}

function selectDishType(){
// translate the selection to the let's cook button to display random recipe
// how do radio buttons select and transfer the selection????
}

function displayFavorites(){

}

function displayCookPot(){

}


/*pseudocode map
    > add fav button
    > choose dish button
    > event.target for the cook pot clear button


function to display current one in the dom
function to favorite the current one in the DM

connect radio button selection to the let's cook button
> query selectorall for the radio button to transfer the value, treat the values as an array, actually a nodelist, can convert easily

function attached to event listener for the button to toggle the hidden class for the selected dish

---> remove the entire meal button
---> remove the add a recipe button

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
id that matches the one on the DOM
and have a new array to push into for faves

favorite radio button
will rerender based on T/F of fave get the id property from DM to render on DOM 

OR

have a function working on the current recipe
the current recipe will have a property of favorited
automatically update the DOM bc DM is updated 







*/