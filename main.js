//querySelectors

var addRecipeBtn = document.querySelector('.recipe-btn');
var letsCookBtn = document.querySelector('.cook-btn');

//eventListeners
//buttons
//does the below button even need functionality?
addRecipeBtn.addEventListener('click', addRecipe);
//DO NEED
//below to push out a food selection once users clicks
letsCookBtn.addEventListener('click', letsCook)


//object for meal? or individual foods? do i even need this?
// maybe to push into full meal array for if i get to the CYOA? A full meal array?
//would it update to output a full array?
//do i need a class instead or at all?
//i think i do because of there are several arrays running but can they just pass through the object?

class Foods {
  constructor () {
    this.sides = this.sides;
    this.mains = this.mains;
    this.desserts = this.desserts;
    this.entireMea = this.entireMeal;
  }
}

var foodSuggestion {
  sides: sides,
  mains: mains,
  desserts: desserts,
  entireMeal: entireMeal
}

//functions

//this function will grant access to one of the 3 arrays
//eventually will give option also for whole meal selection
//technically will need 3 functions w/in this for
//sides - mains - desserts
//if i get to cyoa can entire meal go in here also? i think so
//will need to create a for loop i think to run through function
//do i need to have a random math function like last weekend's project?

letsCook (){

}


//do i need a random math function like we used last weekend? can i use the same?
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
