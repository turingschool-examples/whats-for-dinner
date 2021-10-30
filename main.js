var main = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen"
];

var side = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls"
];

var dessert = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Macarons",
"Macaroons"
];





// When a user selects a dish option (don’t worry about “Entire Meal”) and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category
// When the dish name appears, the cookpot icon disappears


//Materials
var sideRadioInput = document.querySelector('#side');
var mainRadioInput = document.querySelector('#main');
var dessertRadioInput = document.querySelector('#dessert');
var entireMealRadioInput = document.querySelector('#entire-meal');
var letsCookButton = document.querySelector('button');
var potPic = document.querySelector('img');
var emptyBoxSpace = document.querySelector('#empty-box');

// }
//EventListeners
// sideRadioInput.addEventListener();
// mainRadioInput.addEventListener();
// dessertRadioInput.addEventListener();

//Functions
// function chooseSide(array) {
//
// }
letsCookButton.addEventListener('click', chooseRecipe);
letsCookButton.addEventListener('click', stopButton)

function chooseRecipe() {
  var recipeName = ""
 if (sideRadioInput.checked) {
   recipeName = side[getRandomIndex(side)]
 } else if (mainRadioInput.checked) {
    recipeName = main[getRandomIndex(main)]
 } else if (dessertRadioInput.checked) {
      recipeName = dessert[getRandomIndex(dessert)]
 } else if (entireMealRadioInput.checked) {
      recipeName =
       `${side[getRandomIndex(side)]} with a side of ${main[getRandomIndex(main)]}
        and ${dessert[getRandomIndex(dessert)]}`
 } else {
       recipeName = throwError();
     }
emptyBoxSpace.innerHTML = `<p class="recipe">You Should Make:<br><span class="chosen-meal">${recipeName}</span></p>`;
}

function stopButton() {
  if (!sideRadioInput.checked && !mainRadioInput.checked && !dessertRadioInput.checked && !entireMealRadioInput.checked) {
   letsCookButton.disabled = true;
 }
   letsCookButton.disabled = false;
}

function throwError() {
 if (!sideRadioInput.checked && !mainRadioInput.checked && !dessertRadioInput.checked && !entireMealRadioInput.checked)
     recipeName = `You need to select an option!`;
     return recipeName;
}



//figure out how to disable a button
//change color of button if disabled
console.log(main[getRandomIndex(main)]);


console.log(side[getRandomIndex(side)]); //this works, I get the input



//meal.(userInput)[i]
//.checked <--- to see if a butting is checked
//the user clicks and picks a value
//the value has to make it so
//it picks a meal from that array

//getRandomIndex functions

//let's cook button is clicked
//puts one meal from array in other section

//Anything with user statement that requires and output

// Step 1
// - Add event listeners to all dish options.
//Maybe all the function that the event listener button does is return the input?
// Every button clicked, inputs a random dish on the
// empty box (section of HTML)

//You can also do .value on the query Selector


//Arrays of:

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
